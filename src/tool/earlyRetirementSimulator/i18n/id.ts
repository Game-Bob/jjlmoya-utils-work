import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { EarlyRetirementSimulatorUI } from '../ui';

const slug = 'simulator-pensiun-dini-spanyol';
const title = 'Simulator Pensiun Dini Spanyol: Hitung Pensiun Anda';
const description =
  'Hitung usia pensiun, koefisien pengurangan, dan perkiraan pensiun Anda secara gratis. Simulator yang diperbarui untuk pensiun dini sukarela dan tidak sukarela di Spanyol.';

const faqData = [
  {
    question: 'Berapa usia minimum untuk pensiun dini di Spanyol?',
    answer:
      'Untuk pensiun dini sukarela, usia minimum adalah 2 tahun sebelum usia wajib (umumnya 63 atau 65 tahun tergantung kontribusi). Untuk pensiun tidak sukarela, hingga 4 tahun sebelum (61 atau 63 tahun).',
  },
  {
    question: 'Berapa tahun kontribusi yang saya butuhkan?',
    answer:
      'Untuk pensiun dini sukarela, diperlukan setidaknya 35 tahun kontribusi efektif. Untuk pensiun tidak sukarela atau terpaksa, minimum adalah 33 tahun.',
  },
  {
    question: 'Berapa banyak kerugian saya jika pensiun dini?',
    answer:
      'Pengurangan tergantung pada bulan percepatan dan total tahun kontribusi. Pemotongan berkisar dari 2,81% untuk satu bulan hingga maksimum sekitar 21% untuk percepatan sukarela penuh selama 2 tahun.',
  },
  {
    question: 'Apakah waktu menganggur dihitung dalam pensiun?',
    answer:
      'Ya, waktu yang dihabiskan untuk menerima tunjangan pengangguran (paro) dihitung dalam pensiun, karena SEPE melakukan kontribusi yang sesuai ke Jaminan Sosial.',
  },
];

const howToData = [
  {
    name: 'Masukkan tahun kelahiran Anda',
    text: 'Ini menentukan usia pensiun biasa Anda menurut peraturan yang berlaku pada tahun 2026.',
  },
  {
    name: 'Perkirakan tahun kontribusi Anda',
    text: 'Sertakan waktu kerja, wiraswasta, dan periode pengangguran kontributif.',
  },
  {
    name: 'Pilih jenis pensiun',
    text: 'Tunjukkan apakah pensiun bersifat sukarela atau terpaksa untuk menerapkan koefisien yang benar.',
  },
  {
    name: 'Tinjau perkiraan pensiun Anda',
    text: 'Lihat pengurangan yang diterapkan dan tanggal pasti kapan Anda bisa berhenti bekerja.',
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

export const content: ToolLocaleContent<EarlyRetirementSimulatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelBirthYear: 'Tahun Kelahiran',
    labelContributions: 'Tahun Kontribusi',
    labelBasePension: 'Basis Bulanan Kotor',
    labelRetirementAge: 'Usia Pensiun',
    labelExpectedDate: 'Tanggal Perkiraan',
    labelEstimatedPension: 'Perkiraan Pensiun',
    labelPermanentReduction: 'Pengurangan Tetap',
    labelYears: 'TAHUN',
    btnLegalTitle: 'Standar',
    btnLegalDesc: 'Usia pensiun resmi. Tanpa pengurangan. 100% dari basis.',
    btnVoluntaryTitle: 'Dini Sukarela',
    btnVoluntaryDesc: 'Pensiun atas pilihan pribadi. Pengurangan bulanan diterapkan.',
    btnInvoluntaryTitle: 'Tidak Sukarela / ERE',
    btnInvoluntaryDesc: 'Pemutusan hubungan kerja paksa. Koefisien yang lebih menguntungkan.',
    defaultBirthYear: '1975',
    defaultContributions: '30',
    defaultBasePension: '2500',
    adviceDefault: 'Geser slider untuk memproyeksikan lini masa pensiun Anda.',
    adviceDefaultWithParams: 'Geser slider untuk memproyeksikan lini masa pensiun Anda.',
    adviceDelay:
      'Jika Anda menunda pensiun hingga usia <strong>[AGE]</strong>, Anda akan mendapatkan tambahan sekitar <strong>€[GAIN]</strong> per bulan.',
    adviceBonus: 'Anda mengakumulasikan bonus penundaan. Pensiun Anda akan melebihi 100% dari basis.',
    adviceOptimal: 'Anda telah mencapai usia standar optimal dengan 100% hak Anda.',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData: 'Sumber',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Simulator Pensiun Dini untuk Spanyol: Panduan 2026',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Pensiun dini</strong> adalah salah satu kekhawatiran finansial terbesar bagi pekerja di Spanyol. Memahami kapan Anda bisa berhenti bekerja dan, di atas segalanya, berapa banyak uang yang akan hilang melalui koefisien pengurangan sangat penting untuk perencanaan hidup yang sehat.',
    },
    {
      type: 'list',
      items: [
        '<strong>Usia resmi standar:</strong> 67 tahun (atau 65 tahun dengan kontribusi yang cukup).',
        '<strong>Pensiun Dini Sukarela:</strong> Hingga 2 tahun sebelum batas resmi.',
        '<strong>Pensiun Dini Tidak Sukarela:</strong> Hingga 4 tahun sebelum (karena PHK atau penyebab lainnya).',
        '<strong>Koefisien Pengurangan:</strong> Pemotongan bulanan permanen terhadap pensiun.',
        '<strong>Persyaratan kontribusi:</strong> Minimum 35 tahun untuk sukarela, 33 tahun untuk paksa.',
      ],
    },
    {
      type: 'title',
      text: 'Pada usia berapa saya bisa pensiun secara resmi di Spanyol?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Rute 65 tahun:</strong> Jika Anda telah berkontribusi lebih dari 38 tahun dan 6 bulan, Anda bisa pensiun pada usia 65 dengan 100% basis Anda.',
        '<strong>Rute 67 tahun:</strong> Jika kontribusi Anda di bawah ambang batas tersebut, usia standar Anda adalah 67 tahun.',
        '<strong>Wajib militer:</strong> Wajib militer atau dinas sosial dapat menambah kontribusi hingga 1 tahun.',
      ],
    },
    {
      type: 'title',
      text: 'Pensiun Dini Sukarela',
      level: 2,
    },
    {
      type: 'card',
      title: 'Persyaratan untuk Pensiun Dini Sukarela',
      html: '<ul><li>Berada pada usia yang dua tahun di bawah usia resmi standar.</li><li>Memiliki periode kontribusi efektif minimum 35 tahun.</li><li>Pensiun yang akan diterima harus melebihi pensiun minimum.</li></ul>',
    },
    {
      type: 'title',
      text: 'Koefisien Pengurangan: Biaya Pensiun Dini',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Di bawah 38,5 tahun kontribusi:</strong> Pengurangan maksimum 21% (2 tahun percepatan).',
        '<strong>Antara 38,5 dan 41,5 tahun:</strong> Pengurangan maksimum sekitar 19%.',
        '<strong>Antara 41,5 dan 44,5 tahun:</strong> Pengurangan maksimum sekitar 17%.',
        '<strong>Lebih dari 44,5 tahun:</strong> Pengurangan maksimum sekitar 15%.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Tip emas:</strong> Menunda pensiun dini Anda hanya satu bulan dapat memberikan perbedaan signifikan pada koefisien pengurangan. Selalu hitung manfaat menunggu beberapa hari tambahan jika Anda berada di dekat batas braket bulanan.',
    },
    {
      type: 'title',
      text: 'Pensiun Dini Tidak Sukarela atau Terpaksa',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Percepatan maksimum:</strong> 4 tahun (48 bulan) sebelum usia standar.',
        '<strong>Kontribusi yang diperlukan:</strong> 33 tahun.',
        '<strong>Kondisi:</strong> Harus terdaftar sebagai pencari kerja setidaknya 6 bulan sebelumnya.',
        '<strong>Koefisien:</strong> Lebih menguntungkan daripada sukarela, tetapi dampak dari 4 tahun tetap berat.',
      ],
    },
    {
      type: 'card',
      title: 'Contoh praktis',
      html: '<p>Seorang pekerja dengan basis €2.000 yang pensiun secara sukarela 2 tahun lebih awal dengan kontribusi 36 tahun. Pengurangan mereka akan sekitar 21%, menjadikan pensiun mereka sekitar <strong>€1.580 per bulan</strong> seumur hidup.</p>',
    },
  ],
};
