import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SalaryCalculatorUI } from '../ui';

const slug = 'kalkulator-gaji-spanyol';
const title = 'Kalkulator Gaji Spanyol: Simulator Gaji Bersih IRPF dan Jaminan Sosial';
const description =
  'Cari tahu berapa banyak penghasilan nyata yang akan Anda terima setiap bulan. Perhitungan akurat untuk pemotongan, basis pajak, dan pendapatan bersih sesuai peraturan Spanyol.';

const faqData = [
  {
    question: 'Bagaimana gaji bersih dihitung di Spanyol?',
    answer:
      'Gaji bersih dihitung dengan mengurangi pemotongan IRPF (sesuai skala) dan kontribusi Jaminan Sosial (sekitar 6,35% dari gaji kotor) dari jumlah total kotor. Persentase IRPF bervariasi sesuai dengan situasi pribadi dan tingkat gaji Anda.',
  },
  {
    question: 'Apa perbedaan antara 12 dan 14 periode pembayaran?',
    answer:
      'Dengan 12 periode pembayaran, gaji bonus didistribusikan setiap bulan. Dengan 14 periode pembayaran, Anda menerima dua pembayaran bonus (biasanya pada bulan Juni/Juli dan Desember). Total kotor tahunan tetap sama, hanya distribusinya yang berubah.',
  },
  {
    question: 'Mengapa slip gaji saya tidak sama persis dengan kalkulator?',
    answer:
      'Kalkulator ini menggunakan nilai perkiraan standar. Slip gaji nyata Anda mungkin berbeda karena: potongan khusus perusahaan, tunjangan, anak dalam tanggungan, disabilitas, atau situasi pribadi yang memengaruhi IRPF.',
  },
  {
    question: 'Berapa persentase gaji saya yang diambil oleh Kantor Pajak?',
    answer:
      'Tergantung pada gaji Anda. Secara umum, antara IRPF dan Jaminan Sosial, 25% hingga 45% dari gaji kotor dipotong. Semakin tinggi gaji, semakin tinggi persentase pemotongan karena sistem progresif IRPF.',
  },
  {
    question: 'Apa itu IRPF?',
    answer:
      'Pajak Penghasilan Orang Pribadi. Ini adalah pajak progresif: mereka yang berpenghasilan lebih membayar persentase yang lebih tinggi pada tingkat gaji yang lebih tinggi.',
  },
];

const howToData = [
  {
    name: 'Masukkan gaji kotor tahunan',
    text: 'Ketik total jumlah yang disepakati dalam kontrak Anda sebelum pajak dan pemotongan.',
  },
  {
    name: 'Atur situasi keluarga',
    text: 'Tunjukkan jika Anda memiliki anak atau tanggungan, karena ini mengurangi persentase IRPF yang dikenakan pada Anda.',
  },
  {
    name: 'Jumlah periode pembayaran',
    text: 'Pilih apakah Anda menerima gaji dalam 12 periode pembayaran (bonus didistribusikan) atau 14 periode pembayaran.',
  },
  {
    name: 'Tinjau rincian bulanan',
    text: 'Periksa berapa banyak yang disalurkan ke Jaminan Sosial, IRPF, dan berapa pendapatan bersih tepat yang akan masuk ke rekening bank Anda.',
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
  inLanguage: 'id',
};

export const content: ToolLocaleContent<SalaryCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelGross: 'Gaji Kotor Tahunan',
    labelPays: 'Jumlah Periode Pembayaran',
    btn12: '12 Periode',
    btn14: '14 Periode',
    labelAge: 'Usia',
    labelContract: 'Jenis Kontrak',
    optIndefinite: 'Tidak Tetap / Umum',
    optTemporal: 'Sementara',
    btnCalculate: 'Hitung Gaji Bersih',
    labelNetMonthly: 'Gaji Bersih Bulanan',
    labelNetAnnual: 'Gaji Bersih Tahunan',
    labelPaysDisplay: 'Periode Pembayaran',
    labelBreakdown: 'Rincian Pemotongan (Perkiraan)',
    labelIRPF: 'IRPF',
    labelSS: 'Jaminan Sosial',
    disclaimer:
      '*Perhitungan yang disederhanakan untuk pekerja lajang, tidak memiliki anak dan berusia di bawah 65 tahun.',
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
      text: 'Ke mana perginya gaji kotor saya?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ini adalah kejutan paling umum di pekerjaan pertama: Anda menandatangani kontrak seharga €24.000 setahun, dibagi 12 dengan harapan menerima €2.000 sebulan, dan menemukan €1.600 di akun Anda. Ke mana yang €400 lagi?',
    },
    {
      type: 'paragraph',
      html: 'Di Spanyol, perbedaan antara <strong>Kotor</strong> (apa yang dibayarkan perusahaan) dan <strong>Bersih</strong> (apa yang Anda terima) dibagi menjadi dua item utama: IRPF dan Jaminan Sosial. Memahami keduanya adalah kunci untuk menegosiasikan kenaikan gaji.',
    },
    {
      type: 'title',
      text: 'Jaminan Sosial: ~6,35% yang mendanai masa depan Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ini adalah kontribusi tetap bagi hampir semua pekerja. Ini tidak tergantung pada apakah Anda lajang atau sudah menikah. Dengan uang ini Anda membiayai:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kontigensi Umum (4,70%)</strong>: Mencakup ketidakhadiran karena sakit umum, kecelakaan di luar pekerjaan, pensiun dan persalinan.',
        '<strong>Pengangguran (1,55% atau 1,60%)</strong>: Kontribusi Anda untuk mengklaim tunjangan pengangguran jika Anda kehilangan pekerjaan. Sedikit bervariasi jika kontrak bersifat sementara.',
        '<strong>Pelatihan Profesional (0,10%)</strong>: Untuk kursus pelatihan subsidi dan pelatihan ulang.',
      ],
    },
    {
      type: 'title',
      text: 'IRPF: Pajak yang paling menyakitkan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pajak ini progresif dan dapat berkisar dari 2% hingga 47% tergantung pada gaji dan situasi pribadi Anda. Ini bukan pajak tetap; ini adalah pembayaran di muka ke Kantor Pajak. Perusahaan menghitung berapa banyak pajak yang harus Anda penuhi tahun depan dan memotongnya bulan demi bulan.',
    },
    {
      type: 'title',
      text: 'Faktor yang menurunkan IRPF Anda',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Memiliki anak (terutama di bawah usia 3 tahun).',
        'Memiliki disabilitas yang diakui (>33%).',
        'Memiliki pasangan dalam tanggungan dengan penghasilan rendah.',
      ],
    },
    {
      type: 'title',
      text: 'Skala IRPF Negara (Perkiraan 2026)',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '€0 - €12,450: 19%',
        '€12,450 - €20,200: 24%',
        '€20,200 - €35,200: 30%',
        '€35,200 - €60,000: 37%',
        '> €60,000: 45%',
      ],
    },
    {
      type: 'title',
      text: 'Pertanyaan abadi: 12 atau 14 periode pembayaran?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Banyak pekerja lebih memilih 14 periode pembayaran untuk pembayaran ekstra di musim panas dan Natal. Yang lain lebih suka (atau perusahaan mengharuskan) menyebarkan gaji selama 12 bulan. Secara matematis, Anda berpenghasilan sama persis per tahun.',
    },
    {
      type: 'list',
      items: [
        '<strong>12 PERIODE PEMBAYARAN</strong>: Anda berpenghasilan lebih banyak setiap bulan, tetapi tidak memiliki bonus. Lebih baik untuk arus kas bulanan yang konstan.',
        '<strong>14 PERIODE PEMBAYARAN</strong>: Anda berpenghasilan sedikit lebih sedikit setiap bulan, tetapi menerima dua pembayaran ganda per tahun. Bekerja seperti "tabungan paksa".',
      ],
    },
  ],
};
