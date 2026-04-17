import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'erken-emeklilik-simulatoru-ispanya';
const title = 'İspanya Erken Emeklilik Simülatörü: Emekli Maaşınızı Hesaplayın';
const description =
  "Emeklilik yaşınızı, indirim katsayılarını ve tahmini emekli maaşınızı ücretsiz hesaplayın. İspanya'daki gönüllü ve gönülsüz erken emeklilik için güncellenmiş simülatör.";

const faqData = [
  {
    question: "İspanya'da erken emeklilik için minimum yaş kaçtır?",
    answer:
      'Gönüllü erken emeklilik için minimum yaş, yasal yaştan 2 yıl öncedir (katkı paylarına bağlı olarak genellikle 63 veya 65 yaş). Gönülsüz emeklilik için bu süre 4 yıla kadardır (61 veya 63 yaş).',
  },
  {
    question: 'Kaç yıllık prim ödemem gerekiyor?',
    answer:
      'Gönüllü erken emeklilik için en az 35 yıllık fiili prim ödemesi gerekmektedir. Gönülsüz veya zorunlu emeklilik için minimum süre 33 yıldır.',
  },
  {
    question: 'Erken emekli olarak ne kadar kaybederim?',
    answer:
      "İndirim, emekliliğin ne kadar öne çekildiğine ve toplam prim yılına bağlıdır. Kesintiler, bir ay için %2,81'den, gönüllü erken emeklilikte tam 2 yıllık süre için maksimum yaklaşık %21'e kadar değişmektedir.",
  },
  {
    question: 'İşsizlik süresi emeklilik için sayılır mı?',
    answer:
      'Evet, işsizlik maaşı (paro) alınarak geçirilen süre emeklilik için sayılır çünkü SEPE, Sosyal Güvenlik kurumuna ilgili prim ödemelerini yapar.',
  },
];

const howToData = [
  {
    name: 'Doğum yılınızı girin',
    text: "Bu, 2026'da yürürlükte olan düzenlemelere göre yasal normal emeklilik yaşınızı belirler.",
  },
  {
    name: 'Prim yıllarınızı tahmin edin',
    text: 'Çalışma süresi, serbest çalışma ve prim ödemeli işsizlik dönemlerini dahil edin.',
  },
  {
    name: 'Emeklilik türünü seçin',
    text: 'Doğru katsayıları uygulamak için emekliliğin gönüllü mü yoksa zorunlu mu olduğunu belirtin.',
  },
  {
    name: 'Tahmini emekli maaşınızı inceleyin',
    text: 'Uygulanan indirimi ve işi bırakabileceğiniz kesin tarihi görün.',
  },
];

const bibliography = [
  {
    name: 'İspanya Sosyal Güvenlik: Normal ve Erken Emeklilik',
    url: 'https://www.seg-social.es/wps/portal/wss/internet/Trabajadores/PrestacionesPensionesTrabajadores/10963',
  },
  {
    name: 'Emekli maaşlarının alım gücünün garanti altına alınmasına ilişkin 21/2021 sayılı Kanun',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2021-21652',
  },
  {
    name: 'Resmi Simülatör - Tu Seguridad Social',
    url: 'https://prestaciones.seg-social.es/simulador-servicio/simulador-pension-jubilacion.html',
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

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Doğum Yılı',
    labelContributions: 'Prim Yılları',
    labelBasePension: 'Aylık Brüt Matrah',
    labelRetirementAge: 'Emeklilik Yaşı',
    labelExpectedDate: 'Beklenen Tarih',
    labelEstimatedPension: 'Tahmini Maaş',
    labelPermanentReduction: 'Kalıcı İndirim',
    labelYears: 'YIL',
    btnLegalTitle: 'Standart',
    btnLegalDesc: "Yasal emeklilik yaşı. İndirim yok. Matrahın %100'ü.",
    btnVoluntaryTitle: 'Gönüllü Erken',
    btnVoluntaryDesc: 'Kişisel tercihle emeklilik. Aylık indirim uygulanır.',
    btnInvoluntaryTitle: 'Gönülsüz / ERE',
    btnInvoluntaryDesc: 'Zorunlu fesih. Daha avantajlı katsayılar.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Emeklilik planınızı yansıtmak için kaydırıcıyı hareket ettirin.',
    adviceDefaultWithParams: 'Emeklilik planınızı yansıtmak için kaydırıcıyı hareket ettirin.',
    adviceDelay:
      'Emekliliğinizi <strong>[AGE]</strong> yaşına kadar ertelerseniz, ayda yaklaşık <strong>[GAIN] € fazladan</strong> kazanırsınız.',
    adviceBonus: "Erteleme bonusu biriktiriyorsunuz. Emekli maaşınız matrahın %100'ünü aşacak.",
    adviceOptimal: "Haklarınızın %100'ü ile optimal standart yaşa ulaştınız.",
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
      text: 'İspanya Erken Emeklilik Simülatörü: 2026 Rehberi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "<strong>Erken emeklilik</strong>, İspanya'daki çalışanlar için en büyük finansal endişelerden biridir. Ne zaman işi bırakabileceğinizi ve her şeyden önemlisi, indirim katsayıları aracılığıyla ne kadar para kaybedeceğinizi anlamak, sağlıklı bir yaşam planlaması için hayati önem taşır.",
    },
    {
      type: 'list',
      items: [
        '<strong>Standart yasal yaş:</strong> 67 yaş (veya yeterli primle 65 yaş).',
        '<strong>Gönüllü Erken Emeklilik:</strong> Yasal sınırdan 2 yıl öncesine kadar.',
        '<strong>Gönülsüz Erken Emeklilik:</strong> 4 yıl öncesine kadar (işten çıkarmalar veya diğer nedenlerle).',
        '<strong>İndirim Katsayıları:</strong> Emekli maaşında kalıcı aylık kesintiler.',
        '<strong>Prim gereksinimi:</strong> Gönüllü için minimum 35 yıl, zorunlu için 33 yıl.',
      ],
    },
    {
      type: 'title',
      text: "İspanya'da yasal olarak hangi yaşta emekli olabilirim?",
      level: 2,
    },
    {
      type: 'list',
      items: [
        "<strong>65 yaş rotası:</strong> 38 yıl 6 aydan fazla prim ödediyseniz, 65 yaşında matrahınızın %100'ü ile emekli olabilirsiniz.",
        "<strong>67 yaş rotası:</strong> Prim ödemeleriniz bu eşiğin altındaysa, standart yaşınız 67'dir.",
        "<strong>Askerlik hizmeti:</strong> Zorunlu askerlik hizmeti veya sosyal hizmet, 1 yıla kadar prim gününe eklenebilir.",
      ],
    },
    {
      type: 'title',
      text: 'Gönüllü Erken Emeklilik',
      level: 2,
    },
    {
      type: 'card',
      title: 'Gönüllü Erken Emeklilik Şartları',
      html: '<ul><li>Standart yasal yaşın iki yıl altında bir yaşta olmak.</li><li>Minimum 35 yıllık fiili prim ödeme süresine sahip olmak.</li><li>Alınacak emekli maaşı, asgari emekli maaşını aşmalıdır.</li></ul>',
    },
    {
      type: 'title',
      text: 'İndirim Katsayıları: Erken Emekli Olmanın Maliyeti',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>38.5 yıldan az prim ödeyenler:</strong> Maksimum %21 indirim (2 yıl öne çekme).',
        '<strong>38.5 ile 41.5 yıl arası:</strong> Maksimum yaklaşık %19 indirim.',
        '<strong>41.5 ile 44.5 yıl arası:</strong> Maksimum yaklaşık %17 indirim.',
        '<strong>44.5 yıldan fazla:</strong> Maksimum yaklaşık %15 indirim.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Altın ipucu:</strong> Erken emekliliğinizi sadece bir ay ertelemek, indirim katsayısında önemli bir fark yaratabilir. Aylık bir dilim sınırına yakınsanız, fazladan birkaç gün beklemenin faydasını her zaman hesaplayın.',
    },
    {
      type: 'title',
      text: 'Gönülsüz veya Zorunlu Erken Emeklilik',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Maksimum öne çekme:</strong> Standart yaştan 4 yıl (48 ay) önce.',
        '<strong>Gerekli primler:</strong> 33 yıl.',
        '<strong>Koşul:</strong> En az 6 ay öncesinden iş arayan olarak kayıtlı olunmalıdır.',
        '<strong>Katsayılar:</strong> Gönüllüden daha avantajlıdır, ancak 4 yılın etkisi hala ciddidir.',
      ],
    },
    {
      type: 'card',
      title: 'Pratik örnek',
      html: '<p>2.000 € matrahı olan ve 36 yıllık primle 2 yıl erken gönüllü emekli olan bir işçi. İndirimi yaklaşık %21 olacak ve ömrünün geri kalanında emekli maaşı ayda yaklaşık <strong>1.580 €</strong> olacaktır.</p>',
    },
  ],
};
