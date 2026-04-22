import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'ispanya-nie-nif-dogrulayici';
const title = 'İspanya NIE/NIF/CIF Doğrulayıcı: İspanyol Vergi Kimlik Kartı Doğrulama';
const description =
  "İspanya'daki NIF (İspanyol DNI), NIE (yabancılar) ve CIF (şirketler) numaralarının geçerliliğini doğrulamak için ücretsiz araç. Kontrol basamağını ve resmi formatı kontrol eder.";

const faqData = [
  {
    question: 'NIF veya NIE numaramı bu araca girmek güvenli mi?',
    answer:
      'Evet, tamamen güvenlidir. Doğrulama işlemi JavaScript kullanılarak tamamen tarayıcınızda gerçekleştirilir. Verileriniz asla bir sunucuya gönderilmez veya herhangi bir veri tabanında saklanmaz.',
  },
  {
    question: 'NIF ve CIF arasındaki fark nedir?',
    answer:
      "NIF (Número de Identificación Fiscal), tüm vergi kimlikleri için kullanılan güncel terimdir. Ancak CIF (Código de Identificación Fiscal), tüzel kişilerin (şirketler ve kuruluşlar) NIF'ini ifade etmek için hala yaygın olarak kullanılmaktadır.",
  },
  {
    question: 'Harfi bilmiyorsam bir NIF numarasının geçerli olup olmadığını nasıl anlarım?',
    answer:
      "Doğrulayıcımıza 8 haneyi girin ve harfin eşleşip eşleşmediğini kontrol edin. Algoritma, sayıyı 23'e bölerek tam harfi hesaplar.",
  },
  {
    question: 'Bu araç Y veya Z ile başlayan NIE numaraları için çalışır mı?',
    answer:
      'Evet, doğrulayıcımız tüm NIE formatlarını destekler: X ile başlayan eski formatlar ve Y veya Z ile başlayan yeni formatlar, resmi numerik dönüşüm uygulanarak kontrol edilir.',
  },
  {
    question: 'Numaranın vergi dairesinde gerçekten kayıtlı olup olmadığını doğrular mı?',
    answer:
      "Hayır. Bu araç algoritmik ve matematiksel doğrulama yapar. Numaranın yasal bir yapıya ve doğru kontrol basamağına sahip olduğunu onaylar, ancak Agencia Tributaria'nın gerçek nüfus kayıtlarını sorgulamaz.",
  },
];

const howToData = [
  {
    name: 'Kimlik numarasını bulun',
    text: 'Belgedeki (DNI, Oturum Kartı veya Vergi Kimlik Kartı) alfanümerik kodu bulun.',
  },
  {
    name: 'Kodu girin',
    text: 'Metin alanına NIF, NIE veya CIF numarasını yazın. Boşluklar veya tireler konusunda endişelenmeyin.',
  },
  {
    name: 'Sonucu kontrol edin',
    text: 'Araç, yapının geçerli olup olmadığını ve kontrol karakterinin eşleşip eşleşmediğini anında analiz edecektir.',
  },
  {
    name: 'Sonucu kopyalayın',
    text: 'Kod geçerliyse, faturanıza, sözleşmenize veya idari formunuza yapıştırmak için doğrudan kopyalayabilirsiniz.',
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
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'İspanyol vergi kimlik numarasını girin',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Geçerli',
    msgInvalidControl: 'Hatalı kontrol basamağı',
    msgInvalidNIEControl: 'Kontrol karakteri hatası',
    msgInvalidCIF: 'Hatalı kombinasyon',
    msgIncomplete: 'Eksik',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData: 'Kaynaklar',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "İspanya'da NIF, NIE ve CIF Doğrulamanın Önemi",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "İspanya'nın idari ve iş ekosisteminde, vergi kimlik tespiti tüm işlemlerin, sözleşmelerin ve kamu işlerinin temel taşıdır. Fatura kesen bir freelancer, tedarikçileri yöneten bir şirket veya satın alma yapan bir birey olun, güvenilir bir <strong>NIF, NIE ve CIF doğrulayıcı</strong> idari hataları ve olası dolandırıcılığı önlemek için vazgeçilmez bir araçtır.",
    },
    {
      type: 'title',
      text: 'NIF, NIE ve CIF Nedir? Temel Farklar',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>NIF (Número de Identificación Fiscal):</strong> İspanya'daki vergi kimliği için genel terim. İspanyol vatandaşları için NIF, DNI numarasını ve ardından bir kontrol harfini (8 rakam + 1 harf) eşleştirir.",
        "<strong>NIE (Número de Identidad de Extranjero):</strong> İspanya'da vergi faaliyeti olan İspanyol olmayan bireyler için kimlik kodu. X, Y veya Z ile başlar, ardından 7 rakam ve bir kontrol harfi gelir.",
        "<strong>CIF (Código de Identificación Fiscal):</strong> Tüzel kişilerin (şirketler, dernekler) NIF'inin popüler adıdır.",
      ],
    },
    {
      type: 'title',
      text: 'Doğru Doğrulama İçin İpuçları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Doğrulayıcı hata verirse, 0 (sıfır) rakamı ile O (harf) karakterini karıştırıp karıştırmadığınızı kontrol edin; bu, NIE numaralarında çok yaygın bir hatadır.',
        'CIF için, kuruluş türünü tanımlayan başlangıç harfini (örneğin A = S.A., B = S.L., vb.) her zaman ekleyin.',
        'Bu araç matematiksel geçerliliği kontrol eder, numaranın AEAT kayıtlarında aktif olup olmadığını değil.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Gizlilik garantili:</strong> Doğrulama tamamen tarayıcınızda çalışır. Girdiğiniz numaralar asla bir sunucuya gönderilmez.',
    },
  ],
};
