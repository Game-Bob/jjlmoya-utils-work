import * as fs from 'fs';
import * as path from 'path';
import * as ts from 'typescript';

const toolsDir = path.join(process.cwd(), 'src', 'tool');

const tools = fs.readdirSync(toolsDir).filter(f => fs.statSync(path.join(toolsDir, f)).isDirectory());

for (const tool of tools) {
  const toolPath = path.join(toolsDir, tool);
  const i18nPath = path.join(toolPath, 'i18n');
  const bibPath = path.join(toolPath, 'bibliography.ts');

  if (!fs.existsSync(i18nPath)) continue;

  const locales = fs.readdirSync(i18nPath).filter(f => f.endsWith('.ts'));
  if (locales.length === 0) continue;

  let bibliographyText = 'export const bibliography = [];\n';

  // Find bibliography content from es.ts or first locale
  if (!fs.existsSync(bibPath)) {
    const fallbackFile = path.join(i18nPath, locales.includes('es.ts') ? 'es.ts' : locales[0]);
    const fallbackContent = fs.readFileSync(fallbackFile, 'utf8');

    const sourceFile = ts.createSourceFile(
      fallbackFile,
      fallbackContent,
      ts.ScriptTarget.Latest,
      true
    );

    let found = false;

    // Search for const bibliography = [...]
    ts.forEachChild(sourceFile, node => {
      if (ts.isVariableStatement(node)) {
        node.declarationList.declarations.forEach(decl => {
          if (ts.isIdentifier(decl.name) && decl.name.text === 'bibliography' && decl.initializer && ts.isArrayLiteralExpression(decl.initializer)) {
            bibliographyText = `import type { BibliographyEntry } from '../../../types';\n\nexport const bibliography: BibliographyEntry[] = ${decl.initializer.getText(sourceFile)};\n`;
            found = true;
          }
        });
      }
    });

    // Search for exported bibliography: [...] inside export const content
    if (!found) {
      ts.forEachChild(sourceFile, node => {
        if (ts.isVariableStatement(node) && node.modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) {
          node.declarationList.declarations.forEach(decl => {
            if (ts.isIdentifier(decl.name) && decl.name.text === 'content' && decl.initializer && ts.isObjectLiteralExpression(decl.initializer)) {
              decl.initializer.properties.forEach(prop => {
                if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name) && prop.name.text === 'bibliography') {
                   if (ts.isArrayLiteralExpression(prop.initializer)) {
                       bibliographyText = `import type { BibliographyEntry } from '../../../types';\n\nexport const bibliography: BibliographyEntry[] = ${prop.initializer.getText(sourceFile)};\n`;
                       found = true;
                   }
                }
              });
            }
          });
        }
      });
    }

    fs.writeFileSync(bibPath, bibliographyText);
    console.log(`Created ${bibPath}`);
  }

  // Refactor i18n files
  for (const locale of locales) {
    const file = path.join(i18nPath, locale);
    let content = fs.readFileSync(file, 'utf-8');

    // Remove const bibliography = [...];
    content = content.replace(/const bibliography = \[[^]*?\];\r?\n\r?\n?/g, '');
    
    // Replace inline bibliography array with imported reference
    // using a non-greedy match that stops at ],
    content = content.replace(/bibliography:\s*\[[^]*?\],/g, 'bibliography,');

    // Remove empty bibliography: [],
    content = content.replace(/[ \t]*bibliography:\s*\[\s*\],?\r?\n/g, '  bibliography,\n');

    // Remove titles
    content = content.replace(/[ \t]*faqTitle:\s*['"`][^]*?['"`],?\r?\n/g, '');
    content = content.replace(/[ \t]*bibliographyTitle:\s*['"`][^]*?['"`],?\r?\n/g, '');
    
    // Fix faq syntax if broken
    content = content.replace(/faq:\s*faqData:\s*['"`][^]*?['"`],/g, 'faq: faqData,');
    
    // Add import if missing
    if (!content.includes("import { bibliography } from '../bibliography';") && !content.includes("import { bibliography } from \"../bibliography\";")) {
        // Insert after last import
        const lastImportIndex = content.lastIndexOf('import ');
        if (lastImportIndex !== -1) {
            const endOfLine = content.indexOf('\n', lastImportIndex);
            content = content.slice(0, endOfLine + 1) + "import { bibliography } from '../bibliography';\n" + content.slice(endOfLine + 1);
        } else {
            content = "import { bibliography } from '../bibliography';\n" + content;
        }
    }

    // Check if `bibliography,` exists in the content
    if (!content.match(/(\s)bibliography,/)) {
       // Append it after faq:
       content = content.replace(/faq:\s*faqData,/, 'faq: faqData,\n  bibliography,');
    }

    fs.writeFileSync(file, content);
  }
}

// 2. Modify types.ts
const typesFile = path.join(process.cwd(), 'src', 'types.ts');
if (fs.existsSync(typesFile)) {
    let typesContent = fs.readFileSync(typesFile, 'utf8');
    typesContent = typesContent.replace(/[ \t]*faqTitle\?:\s*string;\r?\n/, '');
    typesContent = typesContent.replace(/[ \t]*bibliographyTitle\?:\s*string;\r?\n/, '');
    fs.writeFileSync(typesFile, typesContent);
    console.log('Updated types.ts');
}

// 3. Update tests
const testsFile = path.join(process.cwd(), 'src', 'tests', 'tool_exports.test.ts');
if (fs.existsSync(testsFile)) {
    let testContent = fs.readFileSync(testsFile, 'utf8');
    testContent = testContent.replace(/expect\(content\)\.toHaveProperty\('faqTitle'\);?/g, '');
    testContent = testContent.replace(/expect\(content\)\.toHaveProperty\('bibliographyTitle'\);?/g, '');
    // Ensure no empty lines left randomly if needed, but it's fine
    fs.writeFileSync(testsFile, testContent);
    console.log('Updated tool_exports.test.ts');
}

console.log("Refactoring complete!");
