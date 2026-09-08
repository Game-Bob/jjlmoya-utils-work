import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'fatura-gecikme-ucreti-hesaplayici';
const title = 'Fatura gecikme ücreti hesaplayıcı';
const description = 'Vadesi geçmiş bir fatura, ek süre ve sözleşmede anlaşılan oran üzerinden basit bir gecikme ücreti hesaplayın. Ücretlendirilen günleri, bedeli ve toplam tutarı anlaşılır bir dökümde görün.';

const faq = [
  { question: 'Fatura gecikme ücreti hesaplaması nasıl çalışır?', answer: 'Hesaplayıcı, vade tarihi ile hesaplama tarihi arasındaki takvim günlerinden ek süre günlerini çıkarır. Yıllık veya aylık oranlarda anlaşılan yüzde ücretlendirilen günlere göre orantılanır. Tek seferlik oran, ek süre bittikten sonra bir kez uygulanır.' },
  { question: 'Yasal gecikme oranını kullanabilir miyim?', answer: 'Oranı doğruladıysanız ve sözleşme veya geçerli hukuk buna izin veriyorsa kullanabilirsiniz. Oranı kendiniz girin. Araç ülke seçmez, yasal oran tahmin etmez ve ücretin tahsil edilebilir olup olmadığına karar vermez.' },
  { question: 'Ek süre neyi değiştirir?', answer: 'Ücret başlamadan önce vade tarihinden sonraki süreden ek süre günleri çıkarılır. Fatura hâlâ bu dönemdeyse gecikme ücreti sıfır kalır ve sonuç ek sürenin devam ettiğini gösterir.' },
  { question: 'Toplamda vergi, tahsilat masrafı veya bileşik faiz var mı?', answer: 'Hayır. Sonuç, seçtiğiniz para birimindeki ana para ile girdilerinizden çıkan basit ücretin toplamıdır. Para birimi değişikliği, canlı kur değil sabit bir gösterge katsayısı kullanır. Vergi, sabit tahsilat masrafı, hukuki gider, bileşik faiz ve ödeme geçmişi eklenmez.' },
];

const howTo = [
  { name: 'Fatura tutarını girin', text: 'Ödenmemiş ana parayı ekleyin ve faturanın para birimini seçin. Sonradan para birimini değiştirirseniz tutar, gösterilen gösterge katsayısıyla çevrilir; canlı döviz kuru kullanılmaz.' },
  { name: 'Tarihleri ayarlayın', text: 'Sözleşmedeki vade tarihini ve hesabı kontrol ettiğiniz tarihi seçin. Araç iki tarih arasındaki tam takvim günlerini sayar.' },
  { name: 'Ek süreyi ve oranı ekleyin', text: 'Ek süre günlerini ve fatura için anlaşılan yüzdeyi girin. Oranın yıllık, aylık veya tek seferlik olacağını seçin.' },
  { name: 'Dökümü inceleyin', text: 'Vade tarihinden geçen günleri, ücretlendirilen günleri, gecikme ücretini ve toplamı kontrol edin. Dökümü faturayla birlikte saklayın ve talep göndermeden önce sözleşmeyi doğrulayın.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' }, inLanguage: 'tr' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'VADESİ GEÇMİŞ FATURA / BASİT DÖKÜM',
    intro: 'Kaçırılan vade tarihini açık bir talebe dönüştürün.',
    sectionTerms: 'Fatura koşullarını ayarlayın',
    labelAmount: 'Ödenmemiş fatura tutarı',
    labelCurrency: 'Fatura para birimi',
    currencyConversionHint: 'Para birimini değiştirmek, tutarı canlı kurla değil sabit bir gösterge katsayısıyla çevirir.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Sözleşmedeki vade tarihi',
    labelCalculationDate: 'Şu tarihe kadar hesapla',
    labelGraceDays: 'Ek süre',
    labelRate: 'Anlaşılan gecikme ücreti oranı',
    labelRatePeriod: 'Oran uygulanma şekli',
    rateAnnual: 'Yıllık',
    rateMonthly: 'Aylık',
    rateOneTime: 'Tek seferlik',
    sectionReceipt: 'Tahsilat dökümü',
    labelDaysSinceDue: 'Vade tarihinden geçen günler',
    labelChargedDays: 'Ücretlendirilen günler',
    labelAppliedRate: 'Uygulanan oran',
    labelLateFee: 'Gecikme ücreti',
    labelTotalDue: 'Talep edilecek toplam',
    statusNotDue: 'Vadesi geçmedi',
    statusGrace: 'Ek süre devam ediyor',
    statusOverdue: 'Ücret işliyor',
    timelineDue: 'Vade tarihi',
    timelineToday: 'Kontrol tarihi',
    timelineGrace: 'ek süreden sonra ücretlendirilen gün',
    noteDisclaimer: 'Girdilerinize göre basit tahmindir. Talep oluşturmadan önce sözleşmeyi, yetki alanını, vergi uygulamasını ve sabit tahsilat masraflarını doğrulayın.',
    buttonReset: 'Kayıtlı koşulları temizle',
    numberLocale: 'tr-TR',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Vadesi geçmiş faturayı kolayca açıklayın', level: 2 },
    { type: 'paragraph', html: 'Ana para, tarihler, ek süre, oran ve ücret tek yerde görüldüğünde ödeme talebini incelemek kolaylaşır. Bu hesaplayıcı sözleşme koşullarını makbuz tarzı küçük bir döküme dönüştürür.' },
    { type: 'card', title: 'Basit formül', html: '<p><strong>Ücretlendirilen günler</strong> = vade tarihi ile hesaplama tarihi arasındaki günler - ek süre günleri.</p><p><strong>Gecikme ücreti</strong> = fatura tutarı × oran ÷ 100 × zaman katsayısı. Yıllık oranlarda ücretlendirilen günler ÷ 365, aylık oranlarda günler ÷ 30 kullanılır; tek seferlik oran ek süreden sonra bir kez uygulanır.</p>' },
    { type: 'paragraph', html: 'Hesaplama bilerek şeffaftır ve sizin için yasal faiz oranı seçmez. Sözleşme sabit bir bedel, yıllık oran veya farklı bir gün hesabı belirleyebilir. Para birimi dönüşümü seçilen katsayıya dayalı gösterge değeridir, canlı döviz kuru değildir. Anlaşmanız farklıysa maddeyi doğrulayın ve hesaplamayı bu aracın dışında uyarlayın.' },
    { type: 'title', text: 'Talep etmeden önce sonucu kontrol edin', level: 2 },
    { type: 'code', code: 'Fatura: 1.250 TL\nKontrole kadar: 38 gün\nEk süre: 5 gün\nYıllık oran: %10\nÜcretlendirilen günler: 33\nÜcret: 1.250 TL × 0,10 × 33 / 365 = 11,30 TL\nToplam: 1.261,30 TL' },
    { type: 'list', items: ['Vade tarihini imzalı sipariş, fatura veya sözleşmeyle karşılaştırın.', 'Hayali ödeme tarihi yerine talebi hazırladığınız gerçek tarihi kullanın.', 'Alıcının her iki tutarı da eşleştirebilmesi için ana para ile ücreti ayrı tutun.', 'Vergi, sabit geri alma masrafı veya yasal sınırların talep edebileceğiniz tutarı değiştirip değiştirmediğini kontrol edin.'] },
    { type: 'tip', html: '<strong>Kanıt ipucu:</strong> faturayı, teslim veya kabul kanıtını, sözleşme maddesini ve bu hesaplamayı birlikte saklayın. Araç aritmetiği açıklar; borcun vadesinin geldiğini veya ücretin tahsil edilebilir olduğunu kanıtlamaz.' },
  ],
};
