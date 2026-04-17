import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'istifa-dilekcesi-hazirlama';
const title = 'Profesyonel İstifa Dilekçesi Oluşturucu';
const description =
  'Saniyeler içinde kişiselleştirilmiş istifa dilekçenizi oluşturun. Kopyalamaya veya anında PDF olarak indirmeye hazır profesyonel şablonlar.';

const faqData = [
  {
    question: 'İstifa etmeden kaç gün önce haber vermeliyim?',
    answer:
      "Türkiye'de İş Kanunu'na göre ihbar süresi çalışma sürenize bağlıdır: 6 aya kadar 2 hafta, 6 aydan 1.5 yıla kadar 4 hafta, 1.5 yıldan 3 yıla kadar 6 hafta, 3 yıldan fazla ise 8 haftadır.",
  },
  {
    question: 'İstifa edersem kıdem tazminatı alabilir miyim?',
    answer:
      "Normal şartlarda istifa eden çalışan kıdem tazminatına hak kazanamaz. Ancak \"haklı nedenle fesih\" (maaşın ödenmemesi, mobbing vb.) veya askerlik, emeklilik, evlilik (kadın çalışanlar için 1 yıl içinde) gibi özel durumlar istisnadır.",
  },
  {
    question: 'İstifa ettikten sonra işsizlik maaşı alabilir miyim?',
    answer:
      "Kendi isteğiyle (haklı bir neden olmaksızın) istifa eden çalışanlar İŞKUR'dan işsizlik maaşı alamazlar.",
  },
  {
    question: 'İhbar süresine uymazsam ne olur?',
    answer:
      "İhbar süresine uymadan işten ayrılan taraf (işçi veya işveren), karşı tarafa ihbar tazminatı ödemekle yükümlü olur.",
  },
];

const howToData = [
  {
    name: 'Kişisel bilgilerinizi doldurun',
    text: 'Adınızı, yöneticinizin veya İK yetkilisinin adını ve şirket ismini girin.',
  },
  {
    name: 'Son çalışma gününüzü belirleyin',
    text: 'Sözleşmenizdeki ihbar süresini dikkate alarak işten ayrılacağınız tarihi seçin.',
  },
  {
    name: 'İstifa nedenini seçin',
    text: 'Durumunuza en uygun yaklaşımı seçerek dilekçe metnini kişiselleştirin.',
  },
  {
    name: 'Kopyalayın veya indirin',
    text: 'Metni kopyalamak veya doğrudan PDF olarak indirmek için ilgili butona tıklayın.',
  },
];

const bibliography = [
  {
    name: '4857 Sayılı İş Kanunu - Mevzuat',
    url: 'https://www.mevzuat.gov.tr',
  },
  {
    name: 'İŞKUR - İşten Ayrılma Süreçleri',
    url: 'https://www.iskur.gov.tr',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Adınız ve soyadınız',
    labelManagerName: 'Yönetici veya İK adı',
    labelManagerGender: 'Hitap şekli',
    labelCompanyName: 'Şirket adı',
    labelLastDay: 'Son çalışma gününüz',
    labelReasonType: 'İstifa yaklaşımı',
    labelCity: 'Şehir',
    optGenderNeutral: 'Sayın (Nötr)',
    optGenderM: 'Sayın Bey (Erkek)',
    optGenderF: 'Sayın Hanım (Kadın)',
    optReasonStandard: 'Standart (Profesyonel)',
    optReasonOpportunity: 'Yeni kariyer fırsatı',
    optReasonPersonal: 'Kişisel nedenler',
    optReasonEducation: 'Eğitim / Akademik büyüme建议',
    optReasonGrowth: 'Gelişim olanaklarının yetersizliği',
    optReasonDirect: 'Doğrudan ve kısa (Açıklamasız)',
    btnCopy: 'Dilekçeyi Kopyala',
    btnDownload: 'PDF Olarak İndir',
    copyFeedback: 'Panoya kopyalandı',
    defaultUserName: 'Ahmet Yılmaz',
    defaultManagerName: 'Mehmet Demir',
    defaultCompanyName: 'Örnek Teknoloji A.Ş.',
    defaultCity: 'İstanbul',
    dateLocale: 'tr-TR',
    datePrefix: '',
    managerPrefix: 'Sayın',
    managerFallback: "İnsan Kaynakları Müdürlüğü'ne",
    companyFallback: 'Şirket Adı',
    salutationNeutral: 'Sayın',
    salutationM: 'Sayın',
    salutationF: 'Sayın',
    salutationFallback: 'Yönetici',
    signatureFallback: 'Çalışan İmzası',
    thanksParagraph:
      'Şirkette çalıştığım süre boyunca bana sunulan profesyonel ve kişisel gelişim fırsatları için içtenlikle teşekkür ederim.',
    transitionParagraph:
      'Sorunsuz bir geçiş süreci için işlerimi devretmeye ve üzerimdeki sorumlulukları en etkin şekilde aktarmaya hazırım.',
    closingWord: 'Saygılarımla,',
    reasonStandard:
      'Şu an yürütmekte olduğum görevimden istifamı sunuyorum. İş sözleşmemdeki ihbar süresine uygun olarak son çalışma günüm [DATE] olacaktır.',
    reasonOpportunity:
      'Yeni bir profesyonel fırsatı kabul etmem nedeniyle görevimden ayrılma kararımı bilgilerinize sunarım. İşten ayrılış tarihim [DATE] olacaktır.',
    reasonPersonal:
      'Tam dikkatimi gerektiren kişisel nedenlerden dolayı görevimden istifa etmem gerektiğini bildirmek isterim. İş ilişkim [DATE] tarihinde sona erecektir.',
    reasonEducation:
      'Eğitimime tam zamanlı devam etme kararı aldım ve bu nedenle istifamı sunuyorum. Son iş günüm [DATE] olacaktır.',
    reasonGrowth:
      'Kariyerimi farklı alanlarda geliştirmek amacıyla aldığım karar doğrultusunda istifamı sunarım. [DATE] tarihi itibarıyla ayrılmış olacağım.',
    reasonDirect:
      'Şirketteki görevimi sonlandırma kararımı bilgilerinize sunarım. Son iş günüm [DATE] olacaktır.',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Profesyonel İstifa Dilekçesi Nasıl Yazılır',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İstifa dilekçesi sadece bir formalite değil, şirketle ilişkinizi profesyonel bir şekilde sonlandırdığınız resmi bir belgedir.',
    },
    {
      type: 'tip',
      html: '<strong>İpucu:</strong> Yöneticinizle aranız ne kadar iyi olursa olsun, istifanız <strong>mutlaka yazılı olarak</strong> sunulmalıdır.',
    },
    {
      type: 'code',
      code: '[Şehir, Tarih]\n\nSayın [Yönetici Adı]\n[Şirket Adı]\n\nİstifa ile ilgili dilekçemdir.\n\nSayın [İsim],\n\nİstifamı sunuyorum. Son günüm [Tarih] olacaktır.\n\nSaygılarımla,\n[İmza]',
    },
  ],
};
