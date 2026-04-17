import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SettlementCalculatorUI } from '../ui';

const slug = 'kalkulator-pesangon-spanyol';
const title = 'Kalkulator Pesangon Spanyol 2026: Hitung Finiquito';
const description =
  'Hitung penyelesaian bruto Anda langkah demi langkah: sisa hari cuti, bonus, dan kompensasi pesangon berdasarkan hukum ketenagakerjaan Spanyol.';

const faqData = [
  {
    question: 'Apakah saya berhak atas penyelesaian jika saya mengundurkan diri secara sukarela?',
    answer:
      'Ya, tentu saja. Penyelesaian (finiquito) mencakup jumlah yang sudah diakumulasikan, seperti hari kerja di bulan berjalan, hari cuti yang tidak digunakan, dan bagian proporsional dari pembayaran bonus. Anda tidak akan berhak atas uang pesangon atau tunjangan pengangguran.',
  },
  {
    question: 'Berapa uang pesangon yang saya dapatkan untuk pemecatan yang tidak sah?',
    answer:
      'Untuk kontrak yang ditandatangani setelah 12 Februari 2012, haknya adalah 33 hari gaji per tahun masa kerja, hingga maksimum 24 bulan gaji.',
  },
  {
    question: 'Dapatkah majikan saya memotong uang dari penyelesaian jika saya tidak memberikan pemberitahuan?',
    answer:
      'Ya. Jika kontrak Anda memerlukan masa pemberitahuan (biasanya 15 hari) dan Anda tidak mematuhinya, perusahaan berhak memotong gaji yang sesuai dengan hari pemberitahuan yang terlewat dari penyelesaian Anda.',
  },
  {
    question: 'Apa yang terjadi dengan cuti dan kontribusi jaminan sosial dalam penyelesaian?',
    answer:
      'Ketika Anda menerima pembayaran untuk cuti yang tidak digunakan, perusahaan harus terus memberikan kontribusi ke Jaminan Sosial atas nama Anda untuk hari-hari tersebut.',
  },
];

const howToData = [
  {
    name: 'Masukkan gaji bruto Anda',
    text: 'Ketik gaji bruto tahunan Anda (sebelum pajak) dan pilih jumlah pembayaran cicilan.',
  },
  {
    name: 'Atur tanggal yang tepat',
    text: 'Masukkan tanggal pasti Anda mulai bekerja dan hari kerja terakhir yang direncanakan.',
  },
  {
    name: 'Tambahkan cuti yang tidak digunakan',
    text: 'Tentukan berapa hari cuti yang masih Anda miliki di tahun berjalan.',
  },
  {
    name: 'Pilih alasan berhenti',
    text: 'Pilih alasan berhenti agar simulator menerapkan rasio pesangon yang benar.',
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<SettlementCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelSalary: 'Gaji Bruto Tahunan',
    labelExtraPayments: 'Pembayaran Ekstra per Tahun',
    labelStartDate: 'Tanggal Mulai',
    labelEndDate: 'Tanggal Selesai',
    labelVacationDays: 'Sisa Hari Cuti',
    labelDepartureReason: 'Alasan Berhenti',
    opt12pays: '12 pembayaran (Pro-rata)',
    opt14pays: '14 pembayaran (Standar)',
    optImprocedente: 'Pemecatan Tidak Sah (33 hari)',
    optObjetivo: 'Pemecatan Objektif (20 hari)',
    optTemporal: 'Akhir Kontrak Sementara (12 hari)',
    optVoluntaria: 'Pengunduran Diri Sukarela (Tanpa pesangon)',
    labelTotal: 'Estimasi Total Penyelesaian',
    labelSeverance: 'Uang Pesangon',
    labelVacation: 'Cuti Tidak Digunakan',
    labelExtras: 'Bonus Pro-rata',
    labelMonthSalary: 'Gaji Bulanan',
    disclaimer:
      'Catatan: Ini adalah estimasi bruto berdasarkan hukum Spanyol. Jumlah akhir dapat bervariasi tergantung pada pajak dan kontribusi jaminan sosial.',
    btnCopy: 'Salin Ringkasan',
    copySuccess: 'Disalin',
    copySummaryTitle: 'Ringkasan Estimasi Penyelesaian',
    defaultSalary: '24000',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber',
  bibliography: [],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Panduan Uang Pesangon di Spanyol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memahami hak-hak keuangan Anda saat masa kontrak berakhir di Spanyol sangatlah penting. Apakah itu melalui <strong>pemecatan</strong> atau <strong>pengunduran diri</strong>.',
    },
  ],
};
