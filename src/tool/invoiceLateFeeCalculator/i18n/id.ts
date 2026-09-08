import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { InvoiceLateFeeCalculatorUI } from '../ui';

const slug = 'kalkulator-denda-keterlambatan-tagihan';
const title = 'Kalkulator denda keterlambatan tagihan';
const description = 'Hitung denda sederhana dari tagihan yang terlambat, masa tenggang, dan tarif yang disepakati dalam kontrak. Lihat hari yang dikenai denda, biaya, dan total secara jelas.';

const faq = [
  { question: 'Bagaimana cara kerja perhitungan denda tagihan?', answer: 'Kalkulator mengurangi masa tenggang dari jumlah hari kalender antara tanggal jatuh tempo dan tanggal perhitungan. Untuk tarif tahunan atau bulanan, persentase yang disepakati dihitung secara proporsional sesuai hari yang dikenai denda. Tarif satu kali diterapkan sekali setelah masa tenggang berakhir.' },
  { question: 'Dapatkah saya menggunakan tarif keterlambatan menurut hukum?', answer: 'Bisa, jika tarif tersebut sudah Anda verifikasi dan kontrak atau hukum yang berlaku mengizinkannya. Masukkan tarif itu sendiri. Alat ini tidak memilih negara, menebak tarif hukum, atau menentukan apakah denda dapat ditagih.' },
  { question: 'Apa yang berubah jika ada masa tenggang?', answer: 'Hari dalam masa tenggang dikeluarkan dari periode setelah jatuh tempo sebelum denda dimulai. Jika tagihan masih berada dalam masa tersebut, denda tetap nol dan status menunjukkan bahwa masa tenggang masih berlangsung.' },
  { question: 'Apakah total mencakup pajak, biaya penagihan, atau bunga berbunga?', answer: 'Tidak. Hasilnya adalah pokok dalam mata uang pilihan Anda ditambah denda sederhana dari input Anda. Pergantian mata uang menggunakan faktor ilustratif tetap, bukan kurs langsung. Pajak, biaya penagihan tetap, biaya hukum, bunga berbunga, dan riwayat pembayaran tidak ditambahkan.' },
];

const howTo = [
  { name: 'Masukkan jumlah tagihan', text: 'Tambahkan pokok yang belum dibayar dan pilih mata uang tagihan. Jika mata uang diubah nanti, jumlahnya dikonversi dengan faktor ilustratif yang ditampilkan, bukan kuotasi valuta asing langsung.' },
  { name: 'Atur tanggal', text: 'Pilih tanggal jatuh tempo dalam kontrak dan tanggal pemeriksaan akun. Alat ini menghitung hari kalender penuh di antara kedua tanggal tersebut.' },
  { name: 'Masukkan masa tenggang dan tarif', text: 'Isi jumlah hari tenggang dan persentase yang disepakati untuk tagihan. Pilih apakah tarif berlaku per tahun, per bulan, atau satu kali.' },
  { name: 'Periksa rincian hasil', text: 'Tinjau hari sejak jatuh tempo, hari yang dikenai denda, denda, dan total. Simpan rincian bersama tagihan dan periksa kontrak sebelum mengirim tuntutan.' },
];

const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step, index) => ({ '@type': 'HowToStep', position: index + 1, name: step.name, text: step.text })) };
const applicationSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'BusinessApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' }, inLanguage: 'id' };

export const content: ToolLocaleContent<InvoiceLateFeeCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    eyebrow: 'TAGIHAN TERLAMBAT / RINCIAN SEDERHANA',
    intro: 'Ubah tanggal jatuh tempo yang terlewat menjadi tuntutan yang jelas.',
    sectionTerms: 'Atur ketentuan tagihan',
    labelAmount: 'Jumlah tagihan belum dibayar',
    labelCurrency: 'Mata uang tagihan',
    currencyConversionHint: 'Mengganti mata uang mengonversi jumlah dengan faktor ilustratif tetap, bukan kurs langsung.',
    currencyRateTemplate: '1 EUR ≈ {value} {currency}.',
    labelDueDate: 'Tanggal jatuh tempo kontrak',
    labelCalculationDate: 'Hitung sampai',
    labelGraceDays: 'Masa tenggang',
    labelRate: 'Tarif denda yang disepakati',
    labelRatePeriod: 'Tarif berlaku',
    rateAnnual: 'Per tahun',
    rateMonthly: 'Per bulan',
    rateOneTime: 'Satu kali',
    sectionReceipt: 'Rincian penagihan',
    labelDaysSinceDue: 'Hari sejak jatuh tempo',
    labelChargedDays: 'Hari yang dikenai denda',
    labelAppliedRate: 'Tarif yang diterapkan',
    labelLateFee: 'Denda keterlambatan',
    labelTotalDue: 'Total yang diminta',
    statusNotDue: 'Belum terlambat',
    statusGrace: 'Masih dalam masa tenggang',
    statusOverdue: 'Denda sedang berjalan',
    timelineDue: 'Jatuh tempo',
    timelineToday: 'Diperiksa sampai',
    timelineGrace: 'hari yang dikenai denda setelah masa tenggang',
    noteDisclaimer: 'Perkiraan sederhana dari input Anda. Pastikan kontrak, yurisdiksi, perlakuan pajak, dan biaya penagihan tetap sebelum mengajukan tuntutan.',
    buttonReset: 'Hapus ketentuan tersimpan',
    numberLocale: 'id-ID',
  },
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, applicationSchema],
  seo: [
    { type: 'title', text: 'Jelaskan tagihan terlambat dengan mudah', level: 2 },
    { type: 'paragraph', html: 'Tuntutan pembayaran lebih mudah diperiksa ketika pokok, tanggal, masa tenggang, tarif, dan denda terlihat di satu tempat. Kalkulator ini mengubah ketentuan kontrak tersebut menjadi rincian bergaya tanda terima.' },
    { type: 'card', title: 'Rumus sederhana', html: '<p><strong>Hari yang dikenai denda</strong> = hari antara jatuh tempo dan tanggal perhitungan - hari masa tenggang.</p><p><strong>Denda</strong> = jumlah tagihan × tarif ÷ 100 × faktor waktu. Tarif tahunan menggunakan hari yang dikenai denda ÷ 365, tarif bulanan menggunakan hari ÷ 30, dan tarif satu kali diterapkan sekali setelah masa tenggang.</p>' },
    { type: 'paragraph', html: 'Perhitungan ini sengaja transparan dan tidak memilih tarif hukum untuk Anda. Kontrak dapat menetapkan biaya tetap, tarif per tahun, atau cara menghitung hari yang berbeda. Konversi mata uang hanya merupakan bantuan ilustratif berdasarkan faktor pilihan, bukan kurs valuta asing langsung. Jika perjanjian Anda berbeda, periksa klausulnya dan sesuaikan perhitungan di luar alat ini.' },
    { type: 'title', text: 'Periksa hasil sebelum mengajukan tuntutan', level: 2 },
    { type: 'code', code: 'Tagihan: Rp1.250.000\nSampai pemeriksaan: 38 hari\nMasa tenggang: 5 hari\nTarif tahunan: 10%\nHari dikenai denda: 33\nDenda: Rp1.250.000 × 0,10 × 33 / 365 = Rp11.301\nTotal: Rp1.261.301' },
    { type: 'list', items: ['Cocokkan tanggal jatuh tempo dengan pesanan, tagihan, atau kontrak yang ditandatangani.', 'Gunakan tanggal saat Anda benar-benar menyiapkan tuntutan, bukan tanggal pembayaran yang dibayangkan.', 'Pisahkan pokok dan denda agar penerima dapat mencocokkan kedua jumlah tersebut.', 'Pastikan pajak, biaya pemulihan tetap, atau batas hukum tidak mengubah jumlah yang dapat diminta.'] },
    { type: 'tip', html: '<strong>Tips bukti:</strong> simpan tagihan, bukti pengiriman atau penerimaan, klausul kontrak, dan perhitungan ini bersama-sama. Alat ini menjelaskan aritmetika, tetapi tidak membuktikan bahwa utang sudah jatuh tempo atau denda dapat ditagih.' },
  ],
};
