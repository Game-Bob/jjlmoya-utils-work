import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'verificador-nie-nif';
const title = 'Verificador de NIE/NIF/CIF Online: Validador de Identificadores Fiscales';
const description =
  'Herramienta gratuita para verificar la validez de NIF (DNI españoles), NIE (extranjeros) y CIF (empresas). Comprueba el dígito de control y formato oficial.';

const faqData = [
  {
    question: '¿Es seguro introducir mi NIF o NIE en esta herramienta?',
    answer:
      'Sí, es totalmente seguro. La validación se realiza íntegramente en tu navegador mediante código JavaScript. Tus datos nunca se envían a ningún servidor ni se almacenan en ninguna base de datos.',
  },
  {
    question: '¿Qué diferencia hay entre el NIF y el CIF?',
    answer:
      'El NIF (Número de Identificación Fiscal) es el término actual para todos. Sin embargo, popularmente se sigue llamando CIF (Código de Identificación Fiscal) al NIF de las personas jurídicas (empresas y entidades).',
  },
  {
    question: '¿Cómo puedo saber si un NIF es válido si no tengo la letra?',
    answer:
      'Puedes introducir los 8 números en nuestro verificador y observar si la letra que habías pensado coincide. El algoritmo calcula la letra exacta que corresponde a esos números dividiendo por 23.',
  },
  {
    question: '¿Esta herramienta sirve para los NIE que empiezan por Y o Z?',
    answer:
      'Sí, nuestro verificador soporta todos los formatos de NIE: los antiguos que empiezan por X y los nuevos que comienzan por Y o Z, aplicando la conversión numérica oficial.',
  },
  {
    question: '¿Valida si el número existe realmente en Hacienda?',
    answer:
      'No. Esta herramienta realiza una validación algorítmica y matemática. Confirma que el número tiene una estructura legal y un dígito de control correcto, pero no consulta el censo real de la Agencia Tributaria.',
  },
];

const howToData = [
  {
    name: 'Localiza el identificador',
    text: 'Busca en el documento (DNI, Tarjeta de Residencia o Tarjeta de identificación fiscal) el código alfanumérico.',
  },
  {
    name: 'Introduce el código',
    text: 'Escribe el NIF, NIE o CIF en el campo de texto. No te preocupes por el orden de los caracteres.',
  },
  {
    name: 'Comprueba el resultado',
    text: 'La herramienta analizará instantáneamente si la estructura es válida y si la letra de control coincide con el número.',
  },
  {
    name: 'Copia el resultado',
    text: 'Si el código es válido, puedes copiarlo directamente para pegarlo en tu factura, contrato o formulario administrativo.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Introducir identificación española',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Válido',
    msgInvalidControl: 'Dígito de control incorrecto',
    msgInvalidNIEControl: 'Control erróneo',
    msgInvalidCIF: 'Combinación incorrecta',
    msgIncomplete: 'Incompleto',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData: 'Fuentes',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La importancia de verificar el NIF, NIE y CIF en España',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En el ecosistema administrativo y empresarial de España, la identificación fiscal es el pilar sobre el que se asientan todas las transacciones. Ya seas un autónomo que emite facturas, una empresa que gestiona proveedores o un particular que realiza una compraventa, contar con un <strong>verificador de NIF, NIE y CIF</strong> fiable es indispensable para evitar errores administrativos, sanciones de la Agencia Tributaria y posibles fraudes.',
    },
    {
      type: 'title',
      text: '¿Qué es el NIF, el NIE y el CIF? Diferencias clave',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> Término genérico para la identificación tributaria. Para personas físicas españolas, coincide con el DNI: 8 dígitos y una letra de control.',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> Para personas sin nacionalidad española con actividad tributaria en España. Empieza por X, Y o Z, seguido de 7 números y una letra.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> Nombre popular del NIF de personas jurídicas (empresas, entidades). Letra de tipo de organización + 7 números + dígito/letra de control.',
      ],
    },
    {
      type: 'title',
      text: 'Cómo funciona el algoritmo de validación',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para el NIF/DNI, la letra final se obtiene calculando el resto de dividir el número entre 23 (módulo 23) y asociándolo a la secuencia <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong>. Para el CIF, se suman pares y dobles de impares y se comprueba el dígito de control. Todo ocurre en tu navegador en milisegundos.',
    },
    {
      type: 'title',
      text: 'Usos comunes del Verificador de NIE/NIF',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Gestoría y Contabilidad:</strong> Verifica identificaciones antes de dar de alta clientes o proveedores en modelos de Hacienda (303, 347...).',
        '<strong>Comercio Electrónico:</strong> Valida el NIF en el checkout para emitir facturas correctas y evitar datos erróneos en la base de datos.',
        '<strong>Contratación de Personal:</strong> Confirma el NIE de trabajadores extranjeros antes del alta en la Seguridad Social.',
      ],
    },
    {
      type: 'title',
      text: 'Glosario de términos',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Dígito de Control:</strong> Carácter al final del código que valida la integridad de los datos mediante un algoritmo matemático.',
        '<strong>Módulo 23:</strong> Operación que calcula la letra del NIF y NIE a partir del resto de dividir el número entre 23.',
        '<strong>Persona Jurídica:</strong> Entidad abstracta (empresa, sociedad, fundación) con su propio NIF.',
        '<strong>Residencia Fiscal:</strong> Situación que obliga a tributar en España, vinculada a la posesión de un NIF o NIE válido.',
      ],
    },
    {
      type: 'title',
      text: 'Consejos para una verificación correcta',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Si el verificador indica error, revisa si has confundido 0 (cero) con O (letra), error muy común en los NIE.',
        'Para el CIF, incluye siempre la letra inicial que identifica el tipo de entidad (A = S.A., B = S.L., etc.).',
        'Esta herramienta comprueba la validez matemática, no si el número está activo en el censo de la AEAT.',
        'Usa el formato estándar sin espacios ni guiones para el mejor resultado.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Privacidad garantizada:</strong> La validación se realiza íntegramente en tu navegador. Los números que introduces nunca se envían a ningún servidor ni se almacenan en ninguna base de datos.',
    },
  ],
};
