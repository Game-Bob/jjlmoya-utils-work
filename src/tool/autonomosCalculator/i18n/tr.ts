import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'bagimsiz-calisan-aidat-hesaplama-ispanya';
const title = 'Bağkur (Autónomo) Prim Hesaplama 2026: İspanya RETA Gerçek Gelir Sistemi';
const description =
  '2026 İspanya serbest çalışan (autónomo) primleri için ücretsiz simülatör. Yeni %0,9 MEI ile gerçek net gelirinizi, prim dilimlerinizi ve aylık ödemenizi hesaplayın.';

const faqData = [
  {
    question: '2026 için yeni prim sistemi nasıl çalışıyor?',
    answer:
      'Sistem, 15 gerçek net gelir dilimine dayanmaktadır. Kar tahmininizi (gelir eksi giderler) beyan etmeniz ve bu aylık dilimle ilişkili primi ödemeniz gerekir.',
  },
  {
    question: 'MEI nedir ve serbest çalışan primimi nasıl etkiler?',
    answer:
      "Nesiller Arası Hakkaniyet Mekanizması (MEI), emeklilik için ayrılmış bir vergidir. 2026'da %0,9'a yükselerek tüm serbest çalışanlar için 2025'e kıyasla primi biraz artıracaktır.",
  },
  {
    question: 'Prim esas matrahımı yılda kaç kez değiştirebilirim?',
    answer:
      'Prim esas matrahınızı ve dolayısıyla serbest çalışan ödemenizi, aylık kazancınızın gerçekliğine uyarlamak için yılda 6 defaya kadar değiştirebilirsiniz.',
  },
  {
    question: 'Gerçek gelirim tahminimden farklı olursa ne olur?',
    answer:
      'Sosyal Güvenlik kurumu, Vergi Dairesi ile veri paylaşımı yaparak yıllık bir uzlaştırma gerçekleştirecektir. Eksik ödeme yaptıysanız fark talep edilecek; fazla ödeme yaptıysanız fazlalık otomatik olarak iade edilecektir.',
  },
  {
    question: "80 Euro'luk sabit tarife (Tarifa Plana) hala var mı?",
    answer:
      "Evet, faaliyetin ilk 12 ayı boyunca yeni serbest çalışanlar için 80 €'luk indirimli prim korunmaktadır; gelir asgari ücretin altındaysa 12 ay daha uzatılabilir.",
  },
];

const howToData = [
  {
    name: 'Gelir ve giderleri girin',
    text: 'Mesleki faaliyetinizin beklenen aylık cirosunu ve indirilebilir giderlerini girin.',
  },
  {
    name: 'Çalışma profilini belirleyin',
    text: 'Bireysel serbest çalışan (%7 indirim) mi yoksa şirket ortağı/yöneticisi (%3 indirim) mi olduğunuzu seçin.',
  },
  {
    name: 'Güncel diliminizi görün',
    text: 'Simülatör net gelirinizi hesaplayacak ve 2026 için geçerli prim dilimini gösterecektir.',
  },
  {
    name: 'MEI etkisini kontrol edin',
    text: 'Beklenmedik durumlar ve yeni nesiller arası hakkaniyet faktörü dahil olmak üzere nihai prim detaylarını göreceksiniz.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Aylık Brüt Gelir',
    labelExpenses: 'Aylık İndirilebilir Giderler',
    labelType: 'Çalışan Profili',
    labelFlatRate: 'Sabit Tarife (Yeni Kayıt)',
    optStandard: 'Bireysel Serbest Çalışan (%7 indirim)',
    optSocietario: 'Şirket Ortağı/Yöneticisi (%3 indirim)',
    optNoFlatRate: 'Uygulanmıyor (Gerçek Prim)',
    optFlatRate: 'Evet, ilk yıl (80 €/ay)',
    labelBracket: 'Net Gelir Diliminiz',
    labelNetDisplay: 'Aylık Net Gelir',
    labelCuota: 'Sosyal Güvenlik Primi',
    labelBase: 'Prim Esas Matrahı',
    labelNetAfter: 'Gerçek Net (Ödeme sonrası)',
    labelProjection: '2026 PROJEKSİYONU (MEI %0,9)',
    infoText:
      "RETA 2026 Sistemi: Hesaplama, genel gider indirimi (%7 veya %3) ile aylık net geliri içerir. Gösterilen prim; genel durumlar, mesleki durumlar, faaliyetin durdurulması, eğitim ve 2026 için %0,9'a güncellenen Nesiller Arası Hakkaniyet Mekanizmasını (MEI) kapsar.",
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    {
      name: 'Sosyal Güvenlik: Yeni prim sistemi',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Vergi Dairesi: Ekonomik faaliyetlerden elde edilen gelirler',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: RETA reformuna ilişkin 13/2022 sayılı Kraliyet Kararnamesi',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '2026 Serbest Çalışan Prim Hesaplayıcı: Yeni Sistem Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "İspanya'da serbest çalışan (autónomo) olmak, en dinamik ve bazen kafa karıştırıcı görevlerden biriyle yüzleşmek demektir: <strong>Sosyal Güvenlik primleri</strong>. <strong>Gerçek net gelir</strong> bazlı yeni sistem yürürlüğe girdiğinden beri, \"sabit ödeme\" kavramı ortadan kalkmış, yerini artan oranlı bir modele bırakmıştır.",
    },
    {
      type: 'title',
      text: 'Yeni RETA Prim Sistemi Nasıl Çalışıyor?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '2023 yılına kadar her serbest çalışan prim esas matrahını serbestçe seçebiliyordu, bu da çoğunluğun asgari tutardan ödeme yapmasına neden oluyordu. Reform, yüksek kazançlıların daha fazla katkıda bulunmasını sağlarken, daha düşük gelirlilerin aylık yükünün azaldığını görmeyi amaçlıyor.',
    },
    {
      type: 'paragraph',
      html: 'Sistem <strong>net gelir dilimleri</strong> üzerine kuruludur. Bu, ödemenizin brüt gelirinize (ciro) değil, mesleki giderleri düştükten ve ek bir genel gider indirimi uyguladıktan sonra gerçekte size kalan "net" tutara bağlı olduğu anlamına gelir.',
    },
    {
      type: 'title',
      text: '2026 İçin Temel Değişiklikler: MEI Faktörü',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '2026 yılı, reformun ikinci aşamasının konsolidasyonunu işaret ediyor. En kritik güncellemelerden biri, <strong>Nesiller Arası Hakkaniyet Mekanizmasının (MEI)</strong> artırılmasıdır.',
    },
    {
      type: 'list',
      items: [
        "<strong>MEI Artışı:</strong> 2026 yılı için MEI %0,9'a yükselerek tüm dilimler için 2025'e kıyasla primde hafif bir artışı temsil etmektedir.",
        "<strong>Dilimlerin Gözden Geçirilmesi:</strong> Net gelir dilimleri korunur, ancak her aralığın minimum ve maksimum primleri gerçek gelirli prim sistemine yaklaşmak için ayarlanır.",
        "<strong>Yıllık Uzlaştırma:</strong> Yıl sonunda Sosyal Güvenlik kurumu, Vergi Dairesi ile verileri çapraz kontrol edecektir. Gerçek kâra göre fazla veya eksik ödeme yaptıysanız bir iade veya ödeme talebi oluşturulacaktır.",
      ],
    },
    {
      type: 'title',
      text: 'Aylık Net Gelirinizi Nasıl Hesaplarsınız?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hesaplayıcımızı doğru kullanmak için hangi rakamın girileceğini anlamak esastır. Sosyal Güvenlik tarafından uygulanan formül şöyledir:',
    },
    {
      type: 'code',
      code: 'Net Gelir = (Brüt Gelir - İndirilebilir Giderler) / (1 - Genel Gider İndirimi)',
    },
    {
      type: 'paragraph',
      html: "<strong>Genel Gider İndirimi</strong> bireysel serbest çalışanlar için <strong>%7</strong>, şirket yöneticileri için <strong>%3</strong>'tür.",
    },
    {
      type: 'card',
      title: '2026 Hesaplama Örneği',
      html: '<ul><li>Ciro: 4.000 € / Giderler: 1.000 €</li><li>Kâr marjı: 3.000 €</li><li>Genel indirim (%7): 210 €</li><li>Hesaba esas net gelir: 2.790 €</li><li><strong>Tahmini 2026 primi:</strong> 8. dilim, yaklaşık 350 € + MEI ayarı.</li></ul>',
    },
    {
      type: 'title',
      text: 'Artan Oranlı Sistemin Avantajları',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Daha iyi sosyal koruma:</strong> Daha gerçekçi temeller üzerinden prim ödeyerek; geçici iş göremezlik ödeneği, doğum, babalık ve özellikle emeklilik maaşları önemli ölçüde daha yüksek olacaktır.',
        '<strong>Tam esneklik:</strong> Prim esas matrahınızı yılda 6 defaya kadar değiştirebilirsiniz. Gelirinizde ciddi bir düşüş öngörüyorsanız, nakit akışı sıkıntısı yaşamamak için daha düşük bir dilime geçebilirsiniz.',
        '<strong>80 € Sabit Tarife:</strong> Yeni girişimciler için ilk yıl boyunca korunarak, kontrollü sabit maliyetlerle bir başlangıç yapılmasına olanak tanır.',
      ],
    },
    {
      type: 'title',
      text: 'Şirket Yöneticisi vs Bireysel Serbest Çalışan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Şirket yöneticisi</strong> (bir SL şirketi olanlar) biraz daha yüksek bir asgari prim matrahına sahiptir ve genel gider indirimi daha düşüktür (%3). Bunun nedeni, yasaların hissedar kontrolünün onlara piyasa risklerine karşı farklı bir konum sağladığını varsaymasıdır.',
    },
    {
      type: 'tip',
      html: "<strong>Uzman İpucu:</strong> Net geliriniz aydan aya çok değişiyorsa, kendinizi ihtiyatlı bir orta dilimde konumlandırmaya çalışın. Daha sonraki uzlaştırma kaçınılmazdır, ancak bu şekilde yıl sonunda Sosyal Güvenliğin \"faturası\" geldiğinde binlerce Euro'luk beklenmedik ödemelerden kaçınmış olursunuz.",
    },
    {
      type: 'title',
      text: 'Aylık priminize neler dahildir?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>Genel Durumlar (%28,30):</strong> Genel hastalık veya iş dışı kazalardan kaynaklanan devamsızlıkları kapsar.",
        "<strong>Mesleki Durumlar (%1,30):</strong> İş kazaları ve meslek hastalıkları.",
        "<strong>Faaliyetin Durdurulması (%0,90):</strong> Serbest çalışanların \"işsizlik\" ödeneği.",
        "<strong>Mesleki Eğitim (%0,10):</strong> Kurslara ve eğitime erişim.",
        "<strong>MEI (2026'da %0,90):</strong> Emekli maaşlarının sürdürülebilirliğini garanti altına alma fonu.",
      ],
    },
    {
      type: 'title',
      text: 'Uzlaştırma Süreci (Vergi Dairesi ve Sosyal Güvenlik)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Her yıl, vergi beyannamesi döneminden sonra Vergi Dairesi gerçek net gelirinizi Sosyal Güvenlik kurumuna bildirir. Gerçek gelirinizin gerektirdiğinden daha düşük bir dilim seçtiyseniz, fark için bir ödeme bildirimi alırsınız. Aksine, kazancınızın üzerinde prim ödediyseniz, Sosyal Güvenlik kurumu sizden açık bir talep gelmeksizin fazlalığı otomatik olarak iade edecektir.',
    },
    {
      type: 'title',
      text: 'Sonuç ve Öneriler',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>2026 serbest çalışan hesaplayıcı</strong>, her freelancer için vergi planlamasında vazgeçilmez bir araçtır. Sabit maliyetlerinizi değiştirdiğinizde veya önemli bir sözleşme kapattığınızda, serbest çalışan priminizin her zaman iş gerçekliğinizle uyumlu olduğundan emin olmak için bu simülatörü kullanmanızı öneririz.',
    },
  ],
};
