import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { MeetingCostCalculatorUI } from '../ui';

const slug = 'kalkulator-biaya-rapat';
const title = 'Kalkulator Biaya Rapat Ticker Real Time';
const description =
  'Lihat secara real time berapa biaya rapat Anda. Masukkan jumlah peserta dan gaji rata-rata untuk melihat jumlah mata uang yang terus bertambah setiap detik.';

const faqData = [
  {
    question: 'Mengapa mengukur biaya rapat itu berguna?',
    answer:
      'Memberikan nilai moneter pada waktu rapat menciptakan kesadaran produktivitas. Ini membantu mengurangi rapat yang tidak perlu, mendorong ketepatan waktu, dan memastikan topik yang dibahas sebanding dengan investasi ekonomi tim.',
  },
  {
    question: 'Bagaimana biaya real-time dihitung?',
    answer:
      'Sistem mengambil estimasi gaji tahunan atau per jam dari setiap peserta dan menghitung biaya per detik. Ticker diperbarui setiap frame animasi untuk menunjukkan akumulasi biaya secara real time.',
  },
  {
    question: 'Biaya tidak langsung apa yang tidak termasuk dalam alat ini?',
    answer:
      'Kalkulator ini fokus pada biaya gaji langsung. Ini tidak termasuk biaya peluang (apa yang bisa dihasilkan karyawan jika tidak rapat), atau biaya operasional tetap seperti sewa kantor, lisensi perangkat lunak, atau utilitas.',
  },
  {
    question: 'Bagaimana saya bisa mengurangi biaya rapat saya?',
    answer:
      'Tentukan agenda yang jelas, batasi peserta hanya pada orang-orang penting, tetapkan batas waktu yang ketat, dan pertimbangkan apakah pesan asinkron atau email bisa mencapai hasil yang sama.',
  },
];

const howToData = [
  {
    name: 'Masukkan jumlah peserta',
    text: 'Ketik berapa banyak orang yang saat ini berpartisipasi dalam rapat.',
  },
  {
    name: 'Atur gaji rata-rata',
    text: 'Masukkan estimasi gaji bruto tahunan rata-rata atau tarif per jam peserta untuk perhitungan yang akurat.',
  },
  {
    name: 'Mulai ticker',
    text: 'Tekan tombol Mulai segera setelah rapat dimulai dan saksikan biaya terakumulasi secara real time.',
  },
  {
    name: 'Berhenti dan evaluasi',
    text: 'Saat rapat berakhir, hentikan ticker. Tinjau total biaya dan evaluasi apakah hasil yang dicapai sebanding dengan investasi tersebut.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
};

export const content: ToolLocaleContent<MeetingCostCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelAccumulated: 'Akumulasi Biaya',
    labelAttendees: 'Peserta',
    labelSalary: 'Gaji Rata-rata',
    optAnnual: 'Bruto Tahunan',
    optHourly: 'Tarif Per Jam',
    btnStart: 'Mulai Rapat',
    btnPause: 'Jeda',
    btnResume: 'Lanjutkan',
    btnReset: 'Reset',
    currencySymbol: 'Rp',
    defaultSalary: '150000000',
    numberLocale: 'id-ID',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber',
  bibliography: [
    { name: 'Hentikan Kegilaan Rapat (Harvard Business Review)', url: 'https://hbr.org/2017/07/stop-the-meeting-madness' },
    { name: 'Pembuangan Waktu di Tempat Kerja (Atlassian)', url: 'https://www.atlassian.com/time-wasting-at-work-infographic' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Mengapa Memvisualisasikan Biaya Rapat?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Waktu adalah sumber daya yang paling mahal dan paling sulit diperbarui di organisasi mana pun. Alat ini tidak dirancang untuk mencegah kolaborasi — alat ini dirancang untuk menumbuhkan <strong>kesadaran produktif</strong>. Saat kita melihat uang "terbakar" secara real time, kita menjadi lebih tepat waktu, lebih ringkas, dan lebih sengaja dalam menyusun agenda rapat.',
    },
    {
      type: 'card',
      title: 'Matematika Biaya Tersembunyi',
      html: '<p>Kami menghitung biaya berdasarkan gaji bruto tahunan atau tarif per jam. Untuk gaji tahunan, kami menggunakan standar industri <strong>1.750 jam kerja per tahun</strong> (memperhitungkan cuti dan hari libur nasional) untuk mengonversi gaji menjadi tarif per jam.</p><p>Rumus biaya per detiknya adalah:<br><code>(Tarif Per Jam × Jumlah Peserta) / 3600</code><br>Ini memberikan biaya yang tepat setiap detik yang ditunjukkan pada ticker.</p>',
    },
    {
      type: 'code',
      code: 'Gaji Tahunan: Rp 175.000.000\nTarif Per Jam: Rp 175.000.000 / 1.750 = Rp 100.000/jam\nBiaya Detik (4 orang): (Rp 100.000 × 4) / 3600 = Rp 111,11/detik\nBiaya rapat 1 jam: Rp 400.000',
    },
    {
      type: 'title',
      text: 'Tips untuk Rapat yang Lebih Efisien',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Aturan 2-Pizza:</strong> Dipopulerkan oleh Jeff Bezos — jika dua pizza tidak bisa memberi makan semua orang di rapat, maka terlalu banyak orang di ruangan tersebut.',
        '<strong>Tanpa Agenda, Tanpa Rapat:</strong> Jangan pernah menerima rapat tanpa agenda yang jelas dan tujuan yang ditentukan.',
        '<strong>Rapat Berdiri (Stand-up):</strong> Lakukan sinkronisasi harian sambil berdiri. Ketidaknyamanan fisik mendorong singkatnya pembicaraan.',
        '<strong>Hukum Parkinson:</strong> Pekerjaan meluas hingga mengisi waktu yang tersedia. Tetapkan slot 25 menit atau 50 menit alih-alih setumpuk satu jam penuh.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Gunakan ticker sebagai pengingat langsung:</strong> Bagikan layar Anda dengan ticker biaya rapat yang berjalan selama rapat tim. Jumlah uang yang terlihat menciptakan insentif alami untuk tetap fokus pada topik.',
    },
  ],
};
