export interface CheckMessages {
  typeNIF: string;
  typeNIE: string;
  typeCIF: string;
  msgValidSuffix: string;
  msgInvalidControl: string;
  msgInvalidNIEControl: string;
  msgInvalidCIF: string;
  msgIncomplete: string;
}

const NIF_LETTERS = 'TRWAGMYFPDXBNJZSQVHLCKE';

export function validateNIF(nif: string): boolean {
  const upper = nif.toUpperCase().replace(/[\s-]/g, '');
  if (!/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(upper)) return false;
  return NIF_LETTERS[parseInt(upper.slice(0, 8), 10) % 23] === upper.charAt(8);
}

export function validateNIE(nie: string): boolean {
  const upper = nie.toUpperCase().replace(/[\s-]/g, '');
  if (!/^[XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/.test(upper)) return false;
  const num = upper.replace('X', '0').replace('Y', '1').replace('Z', '2');
  return NIF_LETTERS[parseInt(num.slice(0, 8), 10) % 23] === upper.charAt(8);
}

export function validateCIF(cif: string): boolean {
  const upper = cif.toUpperCase().replace(/[\s-]/g, '');
  if (!/^[ABCDEFGHJNPQRSUVW][0-9]{7}[0-9A-J]$/.test(upper)) return false;
  const digits = upper.slice(1, 8);
  const control = upper.charAt(8);
  let sumPairs = 0;
  let sumOdds = 0;
  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i] ?? '0');
    if (i % 2 === 0) {
      let doubled = digit * 2;
      if (doubled > 9) doubled = Math.floor(doubled / 10) + (doubled % 10);
      sumOdds += doubled;
    } else {
      sumPairs += digit;
    }
  }
  const lastDigit = (10 - ((sumPairs + sumOdds) % 10)) % 10;
  const controlLetters = 'JABCDEFGHI';
  return /[0-9]/.test(control)
    ? parseInt(control) === lastDigit
    : control === controlLetters[lastDigit];
}

function checkNIFBlock(
  clean: string,
  msgs: CheckMessages
): { valid: boolean; display: string } | null {
  if (!/^[0-9]/.test(clean)) return null;
  if (validateNIF(clean)) return { valid: true, display: `\u2713 ${msgs.typeNIF} ${msgs.msgValidSuffix}` };
  if (clean.length >= 9) return { valid: false, display: `\u2715 ${msgs.msgInvalidControl}` };
  return null;
}

function checkNIEBlock(
  clean: string,
  msgs: CheckMessages
): { valid: boolean; display: string } | null {
  if (!/^[XYZ]/.test(clean)) return null;
  if (validateNIE(clean)) return { valid: true, display: `\u2713 ${msgs.typeNIE} ${msgs.msgValidSuffix}` };
  if (clean.length >= 9) return { valid: false, display: `\u2715 ${msgs.msgInvalidNIEControl}` };
  return null;
}

function checkCIFBlock(
  clean: string,
  msgs: CheckMessages
): { valid: boolean; display: string } | null {
  if (!/^[ABCDEFGHJNPQRSUVW]/.test(clean)) return null;
  if (validateCIF(clean)) return { valid: true, display: `\u2713 ${msgs.typeCIF} ${msgs.msgValidSuffix}` };
  if (clean.length >= 9) return { valid: false, display: `\u2715 ${msgs.msgInvalidCIF}` };
  return null;
}

export function checkIdentifier(
  value: string,
  msgs: CheckMessages
): { valid: boolean; display: string } {
  const clean = value.trim().toUpperCase().replace(/[\s-]/g, '');
  if (!clean) return { valid: false, display: '' };
  return (
    checkNIFBlock(clean, msgs) ??
    checkNIEBlock(clean, msgs) ??
    checkCIFBlock(clean, msgs) ??
    { valid: false, display: `\u2715 ${msgs.msgIncomplete}` }
  );
}
