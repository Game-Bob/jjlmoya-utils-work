import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'irpf-hesaplama-ispanya';
const title = 'IRPF Hesaplama 2026: İspanya Net Maaş Simülatörü';
const description =
  '2026 yılı için İspanya'daki aylık ve yıllık net maaşınızı hesaplayın. Devlet, bölgesel ölçekler, MEI ve aile durumuna göre güncellenmiş simülatör.';

const faqData = [
  {
    question: 'MEI, 2026'daki net maaşımı nasıl etkiler?',
    answer:
      'Nesiller Arası Hakkaniyet Mekanizması (MEI), emekli maaşlarının sürdürülebilirliğini sağlamak için 2026'da %0,90'a yükseliyor. Büyük bir kısmı işveren tarafından ödense de, çalışanlar katkı payı oranları nedeniyle net maaşlarında bir azalma görecekler.',
  },
  {
    question: 'Net maaşım Madrid'de neden Katalonya'dakinden farklı?',
    answer:
      'IRPF, %50'si Özerk Topluluklara devredilmiş bir vergidir. Madrid, devlet ölçeğinden daha düşük dilimler uygularken, Katalonya'nın ilk stopajı artırabilecek kendi ölçeği vardır.',
  },
  {
    question: 'Marjinal oran nedir ve beni nasıl etkiler?',
    answer:
      'Marjinal oran, kazandığınız son euro üzerindeki vergi yüzdesidir. Bir maaş artışının veya primin size vergi olarak gerçekte ne kadara mal olduğunu gösterir.',
  },
  {
    question: 'Aylık hesaplama için kaç ödeme dönemi seçmeliyim?',
    answer:
      'Normalde 12 veya 14 ödeme dönemi (yaz ve Noel'de ikramiyelerle birlikte) alırsınız. Gerçek aylık net gelirinizi öğrenmek için şirketinizin kullandığı seçeneği belirleyin.',
  },
  {
    question: ' Bu hesaplayıcı vergi beyannamem için güvenilir mi?',
    answer:
      'Bu araç 2026 düzenlemelerine dayalı bir tahmin sunar. Aylık stopaj bir yaklaşımdır; gerçek final sonucunuz Haziran ayındaki vergi beyannamesiyle belirlenir.',
  },
];

const howToData = [
  {
    name: 'Brüt maaşınızı girin',
    text: 'Sözleşmenizde belirtilen, herhangi bir kesinti veya stopaj öncesindeki toplam yıllık tutarı yazın.',
  },
  {
    name: 'Kişisel durumunuzu tanımlayın',
    text: 'Yasal vergi muafiyetlerini uygulamak için çocuk sayınızı, tanınmış herhangi bir engel durumunuzu ve medeni halinizi belirtin.',
  },
  {
    name: 'Özerk Topluluğunuzu seçin',
    text: 'Vergi ikametgahınız, uygulanan bölgesel vergi ölçeğini belirleyerek final net gelirinizi etkiler.',
  },
  {
    name: 'Detayları inceleyin',
    text: 'IRPF'ye ve Sosyal Güvenliğe ne kadar gittiğini ve gerçek aylık ve yıllık net maaşınızın ne kadar olduğunu görün.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Hesaplama Değişkenleri',
    titleCalculo: 'Şeffaf Hesaplama 2026',
    labelBruto: 'Yıllık Brüt Maaş (€)',
    labelPagas: 'Ödeme Dönemi Sayısı',
    labelComunidad: 'Vergi İkametgahı',
    labelHijos: 'Çocuk (25 yaş altı)',
    labelDiscapacidad: 'Engellilik Derecesi',
    labelUnidad: 'Aile Birimi veya Birlikte Yaşam',
    opt12pagas: '12 ödeme',
    opt14pagas: '14 ödeme',
    optGen: 'Ortak Bölge (Genel)',
    optMad: 'Madrid',
    optCat: 'Katalonya',
    optAnd: 'Endülüs',
    optVal: 'Valensiya Bölgesi',
    optPV: 'Bask Bölgesi (Foral)',
    optNav: 'Navarra (Foral)',
    optNinguna: 'Yok',
    opt33: '> %33',
    opt65: '> %65',
    optSoltero: 'Bekar, boşanmış veya dul',
    optCasadoLow: 'Evli (eş yıllık 1.500 €'dan az kazanıyor)',
    optCasadoHigh: 'Evli (eşin geliri var)',
    labelSalarioBruto: 'Brüt Maaş',
    labelSS: 'Sosyal Güvenlik / MEI (-)',
    labelGastos: 'Düşülebilir Giderler (Madde 20)',
    labelNetoAnual: 'YILLIK NET MAAŞ',
    labelRetencionIRPF: 'IRPF Kesintisi (%)',
    labelNetoMensual: 'Mevcut Aylık Net',
    labelMarginal: 'Uygulanan Marjinal Oran',
    resultRetention: 'IRPF Kesintisi (%)',
    resultAnual: '/ yıl',
    infoText:
      '2026 yılı için doğrulanmış AEAT Algoritması (Brüt Vergi - Minimum Vergi). %6,47 oranında MEI katkısını ve iş geliri indirimlerini içerir. jjlmoya.es.',
  },
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynaklar',
  bibliography: [
    {
      name: 'Vergi Dairesi: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'IRPF Hesaplama 2026: Yeni vergi senaryosu için tam kılavuz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kişisel Gelir Vergisi (IRPF), İspanyol vergi sistemindeki en ilgili vergidir ve milyonlarca çalışanın aylık maaş çekini doğrudan etkiler. 2026 yılında, Nesiller Arası Hakkaniyet Mekanizması'ndaki (MEI) artış ve çeşitli özerk topluluklardaki oranların deflasyonu gibi aşamalılığa ve yeni ekonomik gerçeklere uyuma yönelik çeşitli reformların sağlamlaştığını görüyoruz.',
    },
    {
      type: 'paragraph',
      html: '<strong>2026 için IRPF hesaplayıcımız</strong>, banka hesabınıza gerçekte ne kadar geçeceğine dair doğru ve güncel bir bakış açısı sunmak üzere tasarlanmıştır. Net maaşı hesaplamak sadece sabit bir yüzdeyi çıkarmak değildir; kişisel durumunuzu, bakmakla yükümlü olduğunuz kişileri, engellilik durumunuzu ve en önemlisi, İspanya'daki her bölgenin bölgesel vergi dilimi üzerinde yetkisi olduğu için vergi ikametgahınızı dikkate alan matematiksel bir süreçtir.',
    },
    {
      type: 'title',
      text: '2026 maaş bordrolarında neler değişiyor?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Simülasyon sonuçlarınızı anlamak için bu yılki stopaj hesaplamalarının temellerini bilmek çok önemlidir:',
    },
    {
      type: 'list',
      items: [
        '<strong>MEI Etkisi:</strong> Nesiller Arası Hakkaniyet Mekanizması, emekli maaşlarını garanti altına almak için yükselişini sürdürerek 2026'da %0,90'a ulaşıyor. Büyük bir kısmı işveren tarafından ödeniyor ancak çalışanlar katkı paylarının yaklaşık %0,15'e yükseldiğini ve bunun da net geliri biraz azalttığını görüyor.',
        '<strong>SMI ve İndirimler:</strong> Meslekler Arası Asgari Ücret (SMI) bir engel görevi görür. Düşük gelirler, brüt maaş artışlarının daha yüksek vergi stopajı tarafından emilmemesini sağlamak için genişletilmiş iş geliri indiriminden yararlanır.',
        '<strong>Bölgesel Dilimler:</strong> Madrid, Endülüs veya Murcia gibi bölgeler genellikle devlet ortalamasından daha düşük oranlar uygularken, Katalonya veya Valensiya Bölgesi, daha yüksek gelir seviyelerinde stopajı artırabilen kendi ölçeklerine sahiptir.',
      ],
    },
    {
      type: 'title',
      text: 'Net maaşınızı anlamak için anahtar kavramlar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Vergi Matrahı - Brüt Maaş Karşılaştırması:</strong> Kazandığınız her şey üzerinden vergi ödemezsiniz. IRPF'nin uygulandığı matrah, brüt maaşınızdan Sosyal Güvenlik katkı paylarının (yaklaşık %6,45) ve haklı gösterilmesi zor giderler için genel bir indirimin (yıllık 2.000 €) çıkarılmasının sonucudur. Ardından bu sonuca vergi muafiyeti asgari tutarları uygulanır.',
    },
    {
      type: 'title',
      text: 'Temel kavramlar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Marjinal Oran:</strong> Kazandığınız son euro üzerindeki vergi yüzdesi. Bir zammın veya primin size vergi olarak gerçekte ne kadara mal olacağını bilmek için kritiktir.',
        '<strong>Yaşam Asgarisi (Vital Minimum):</strong> Devletin, mükellefin ve ailesinin temel ihtiyaçlarını karşılaması için elzem gördüğü ve bu nedenle vergiden muaf tutulan gelir.',
        '<strong>Maaş Stopajı:</strong> İşverenlerin, yıl sonunda borçlu olacağınız tutarın bir tahminine dayanarak sizin adınıza her ay Vergi Dairesine yatırdığı mahsup ödemesidir.',
        '<strong>Net Gelir:</strong> Brüt maaş eksi Sosyal Güvenlik katkı payları ve vergi kanunu tarafından izin verilen düşülebilir giderler.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF stopajınızı nasıl optimize edersiniz?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pek çok çalışan, işverenlerinden daha fazla mı yoksa daha az mı stopaj yapmalarını istemeleri gerektiğini merak eder. Gerçek şu ki stopaj, Vergi Dairesine yapılan bir "ön ödemedir". Yıl içinde eksik stopaj yapıldıysa vergi beyannamenizde borç çıkabilir; fazla stopaj yapıldıysa iade alırsınız.',
    },
    {
      type: 'paragraph',
      html: '<strong>Dilim Atlama Efsanesi:</strong> Daha yüksek bir dilime geçmenin daha az net kazanmak anlamına geldiğine dair bir efsane vardır. Bu yanlıştır. IRPF artan oranlıdır; sadece dilim sınırını aşan gelir daha yüksek orandan vergilendirilir. Brüt artıştan dolayı marjinal oran daha yüksek olsa bile asla daha az net kazanmazsınız.',
    },
    {
      type: 'paragraph',
      html: '<strong>Aileler için ipucu:</strong> 145 numaralı formu kullanarak çocuk doğumunu veya aile üyelerinin engellilik durumundaki değişiklikleri doğru bir şekilde bildirdiğinizden emin olun. Bu, aylık stopajınızı ayarlar ve Haziran ayındaki vergi döneminde sürprizleri önler.',
    },
    {
      type: 'title',
      text: 'Özerk Topluluklara göre farklılıklar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'İspanya'daki mali ademi merkeziyet, aynı maaşa ve aile durumuna sahip iki kişinin Toledo veya Barselona'da yaşamalarına bağlı olarak farklı net gelirlere sahip olması anlamına gelir. Topluluklar verginin yarısını (bölgesel dilim) kontrol eder. Örneğin Madrid, hemen hemen her gelir seviyesinde en düşük oranlara sahip olmasıyla öne çıkarken, diğer bölgeler kira veya çocuk eğitimi için ulusal düzeyde mevcut olmayan indirimler uygulamaktadır. Hesaplayıcımız, konumunuza göre size en gerçekçi rakamı vermek için bu varyasyonları dikkate alır.',
    },
    {
      type: 'paragraph',
      html: 'Sonuç olarak, <strong>2026 net maaş simülasyonu</strong> temel bir finansal planlama aracıdır. Gerçek tasarruf kapasitenizi bilmek ve gelirinizin hangi kısmının kamu hizmetlerini desteklediğini anlamak, yatırımlar, ipotekler veya kariyer değişiklikleri hakkında bilinçli kararlar vermenizi sağlar.',
    },
  ],
};
