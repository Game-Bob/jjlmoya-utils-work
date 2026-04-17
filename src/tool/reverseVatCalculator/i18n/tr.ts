import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'kdv-ayristirma-hesaplama-ispanya';
const title = 'KDV Ayrıştırma: İspanya Vergi Matrahı Hesaplama';
const description =
  'Çevrimiçi KDV ayrıştırma (içten dışa) hesaplayıcı. Vergi matrahını elde etmek için herhangi bir toplam tutardan KDV'yi ayırın. İspanya'daki serbest çalışanlar için temel araç.';

const faqData = [
  {
    question: 'KDV ayrıştırma veya KDV'yi dışarıda bırakmak nedir?',
    answer:
      'Zaten vergi dahil olan toplam fiyattan vergi matrahını (KDV hariç tutarı) hesaplama işlemidir. Belirlenmiş bir son fiyat üzerinden fatura kesmesi gereken serbest çalışanlar için gereklidir.',
  },
  {
    question: 'KDV ayrıştırma manuel olarak nasıl hesaplanır?',
    answer:
      '%21 KDV oranı için toplam tutarı 1,21'e bölün. Sonuç vergi matrahıdır. Toplam ile matrah arasındaki fark KDV tutarıdır.',
  },
  {
    question: 'İspanya'da hangi KDV türleri vardır?',
    answer:
      'Üç tür vardır: Genel (%21), İndirimli (%10: gıda, sağlık, konut) ve Süper İndirimli (%4: ekmek, süt gibi temel gıdalar, kitaplar).',
  },
  {
    question: 'KDV'yi ayrıştırmak ne zaman zorunludur?',
    answer:
      'Profesyonel veya basitleştirilmiş bir fatura kestiğiniz her zaman. Vergi matrahını, uygulanan vergi oranını ve toplam KDV tutarını ayrı ayrı belirtmelisiniz.',
  },
];

const howToData = [
  {
    name: 'Toplam tutarı girin',
    text: 'Ayrıştırmak istediğiniz KDV dahil son tutarı yazın.',
  },
  {
    name: 'KDV oranını seçin',
    text: 'Ürün veya hizmet kategorinize göre %21, %10 veya %4 arasından seçim yapın.',
  },
  {
    name: 'Vergi matrahını görün',
    text: 'Vergiler öncesinde elinize geçen net tutarı gösteren otomatik hesaplamayı inceleyin.',
  },
  {
    name: 'Fatura verilerini kopyalayın',
    text: 'Hesaplanan değerleri fatura yazılımınızdaki matrah ve KDV alanlarına girmek için kullanın.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Toplam Tutar (KDV Dahil)',
    labelVatType: 'KDV Oranı',
    btn21: '% 21',
    btn10: '% 10',
    btn4: '% 4',
    btn0: '% 0',
    labelBase: 'Vergi Matrahı (Net)',
    labelVat: 'KDV Tutarı',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'KDV Ayrıştırmada Yapılan Yaygın Hata',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'En yaygın hata, %21 KDV'yi çıkarmak için toplam tutardan doğrudan %21'i düşeceğinizi düşünmektir. <strong>Bu yanlıştır!</strong> Bunu yapmak her dönem para kaybetmenize neden olur.',
    },
    {
      type: 'title',
      text: 'Matematiksel Açıklama',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'KDV, matrahın <strong>üzerine</strong> eklenir. Dolayısıyla son fiyat, matrahın %121'idir (%21 KDV için). Geriye dönmek için çıkarma yapmayız, <strong>böleriz</strong>. <code>Matrah = Toplam / 1,21</code>.',
    },
    {
      type: 'code',
      code: 'Vergi Matrahı = Toplam Tutar / (1 + KDV Oranı)\nKDV Tutarı = Toplam Tutar - Vergi Matrahı',
    },
  ],
};
