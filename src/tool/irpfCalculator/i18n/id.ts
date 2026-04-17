import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { IrpfCalculatorUI } from '../ui';

const slug = 'kalkulator-irpf-spanyol';
const title = 'Kalkulator IRPF 2026: Simulator Gaji Bersih Spanyol';
const description =
  'Hitung gaji bersih bulanan dan tahunan Anda untuk tahun 2026 di Spanyol. Simulator terbaru dengan skala negara bagian, regional, MEI, und situasi keluarga.';

const faqData = [
  {
    question: 'Bagaimana MEI memengaruhi gaji bersih saya di tahun 2026?',
    answer:
      'Mekanisme Kesetaraan Antargenerasi (MEI) naik menjadi 0,90% pada tahun 2026 untuk menjamin keberlanjutan pensiun. Sebagian besar dibayar oleh pemberi kerja, tetapi karyawan akan melihat gaji bersih mereka berkurang sebesar persentase kontribusi mereka.',
  },
  {
    question: 'Mengapa gaji bersih saya berbeda di Madrid dibandingkan di Catalonia?',
    answer:
      'IRPF adalah pajak yang 50% didelegasikan ke Daerah Otonom. Madrid menerapkan tarif yang lebih rendah daripada skala negara bagian, sementara Catalonia memiliki skala sendiri yang mungkin meningkatkan pemotongan awal.',
  },
  {
    question: 'Apa itu tarif marginal dan bagaimana pengaruhnya bagi saya?',
    answer:
      'Tarif marginal adalah persentase pajak atas euro terakhir yang Anda hasilkan. Ini menunjukkan berapa besar beban pajak sebenarnya dari kenaikan gaji atau bonus yang Anda terima.',
  },
  {
    question: 'Berapa banyak periode pembayaran yang harus saya pilih untuk perhitungan bulanan?',
    answer:
      'Biasanya Anda menerima 12 atau 14 periode pembayaran (dengan bonus di musim panas dan Natal). Pilih opsi yang digunakan perusahaan Anda untuk mengetahui pendapatan bersih bulanan Anda yang sebenarnya.',
  },
  {
    question: 'Apakah kalkulator ini dapat diandalkan untuk laporan pajak saya?',
    answer:
      'Alat ini memberikan perkiraan berdasarkan peraturan tahun 2026. Pemotongan bulanan adalah perkiraan; hasil akhir Anda yang sebenarnya ditentukan dalam pelaporan pajak di bulan Juni.',
  },
];

const howToData = [
  {
    name: 'Masukkan gaji kotor Anda',
    text: 'Ketik total jumlah tahunan yang tercantum dalam kontrak Anda sebelum ada potongan atau pemotongan pajak.',
  },
  {
    name: 'Tentukan situasi pribadi Anda',
    text: 'Tunjukkan jumlah anak, disabilitas yang diakui, dan status perkawinan untuk menerapkan tunjangan bebas pajak yang sah.',
  },
  {
    name: 'Pilih Daerah Otonom Anda',
    text: 'Tempat tinggal pajak Anda menentukan skala pajak regional yang diterapkan, yang memengaruhi pendapatan bersih akhir Anda.',
  },
  {
    name: 'Tinjau rinciannya',
    text: 'Lihat berapa banyak yang disalurkan ke IRPF, Jaminan Sosial, dan berapa gaji bersih bulanan serta tahunan Anda yang sebenarnya.',
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

export const content: ToolLocaleContent<IrpfCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    titleVariables: 'Variabel Perhitungan',
    titleCalculo: 'Perhitungan Transparan 2026',
    labelBruto: 'Gaji Kotor Tahunan (€)',
    labelPagas: 'Jumlah Periode Pembayaran',
    labelComunidad: 'Tempat Tinggal Pajak',
    labelHijos: 'Anak (di bawah 25)',
    labelDiscapacidad: 'Tingkat Disabilitas',
    labelUnidad: 'Unit Keluarga atau Kohabitasi',
    opt12pagas: '12 periode',
    opt14pagas: '14 periode',
    optGen: 'Wilayah Umum (Umum)',
    optMad: 'Madrid',
    optCat: 'Catalonia',
    optAnd: 'Andalusia',
    optVal: 'Wilayah Valencia',
    optPV: 'Negeri Basque (Foral)',
    optNav: 'Navarre (Foral)',
    optNinguna: 'Tidak ada',
    opt33: '> 33%',
    opt65: '> 65%',
    optSoltero: 'Lajang, cerai, atau janda/duda',
    optCasadoLow: 'Menikah (pasangan berpenghasilan kurang dari €1.500/tahun)',
    optCasadoHigh: 'Menikah (pasangan memiliki penghasilan)',
    labelSalarioBruto: 'Gaji Kotor',
    labelSS: 'Jaminan Sosial / MEI (-)',
    labelGastos: 'Biaya yang Dapat Dikurangkan (Pasal 20)',
    labelNetoAnual: 'GAJI BERSIH TAHUNAN',
    labelRetencionIRPF: 'Pemotongan IRPF (%)',
    labelNetoMensual: 'Neto Bulanan Tersedia',
    labelMarginal: 'Tarif Marginal yang Diterapkan',
    resultRetention: 'Pemotongan IRPF (%)',
    resultAnual: '/ tahun',
    infoText:
      'Algoritma AEAT (Pajak Kotor - Pajak Minimum) divalidasi untuk 2026. Termasuk kontribusi MEI sebesar 6,47% dan pengurangan pendapatan pekerjaan. jjlmoya.es.',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber',
  bibliography: [
    {
      name: 'Kantor Pajak: IRPF',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator IRPF 2026: Panduan lengkap untuk skenario pajak baru',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pajak Penghasilan Orang Pribadi (IRPF) adalah pungutan paling relevan dalam sistem pajak Spanyol, yang secara langsung memengaruhi gaji bulanan jutaan pekerja. Di tahun 2026, kita melihat konsolidasi berbagai reformasi yang ditujukan pada progresivitas dan adaptasi terhadap realitas ekonomi baru, seperti kenaikan Mekanisme Kesetaraan Antargenerasi (MEI) und deflasi tarif di berbagai daerah otonom.',
    },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator IRPF kami untuk tahun 2026</strong> dirancang untuk memberikan gambaran yang akurat dan terkini tentang apa yang sebenarnya akan masuk ke rekening bank Anda. Menghitung gaji bersih bukan sekadar mengurangi persentase tetap; ini adalah proses matematika yang mempertimbangkan situasi pribadi Anda, tanggungan, disabilitas, dan yang terpenting, tempat tinggal pajak Anda, karena setiap wilayah di Spanyol memiliki wewenang atas rincian pajak regional.',
    },
    {
      type: 'title',
      text: 'Apa yang berubah pada slip gaji tahun 2026?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Untuk memahami hasil simulasi Anda, penting untuk mengetahui pilar-pilar perhitungan pemotongan tahun ini:',
    },
    {
      type: 'list',
      items: [
        '<strong>Dampak MEI:</strong> Mekanisme Kesetaraan Antargenerasi melanjutkan jalur kenaikannya untuk menjamin pensiun, mencapai 0,90% pada tahun 2026. Sebagian besar dibayar oleh pemberi kerja, tetapi karyawan melihat kontribusi mereka meningkat menjadi sekitar 0,15%, sedikit mengurangi pendapatan bersih.',
        '<strong>SMI dan Pengurangan:</strong> Gaji Minimum Antarprofesi bertindak sebagai penghalang. Pendapatan rendah mendapat manfaat dari pengurangan pendapatan pekerjaan yang diperluas untuk memastikan kenaikan gaji kotor tidak terserap oleh pemotongan pajak yang lebih tinggi.',
        '<strong>Skema Regional:</strong> Daerah seperti Madrid, Andalusia atau Murcia biasanya menerapkan tarif yang lebih rendah daripada rata-rata negara bagian, sementara Catalonia atau Wilayah Valencia memiliki skala sendiri yang dapat meningkatkan pemotongan pada tingkat pendapatan yang lebih tinggi.',
      ],
    },
    {
      type: 'title',
      text: 'Konsep kunci untuk memahami gaji bersih Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Basis Kena Pajak vs. Gaji Kotor:</strong> Anda tidak membayar pajak atas semua yang Anda hasilkan. Basis di mana IRPF berlaku adalah hasil dari pengurangan gaji kotor Anda dengan kontribusi Jaminan Sosial (sekitar 6,45%) dan pengurangan umum untuk biaya yang sulit dibenarkan (€2.000 per tahun). Tunjangan bebas pajak kemudian diterapkan pada hasil ini.',
    },
    {
      type: 'title',
      text: 'Konsep dasar',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Tarif Marginal:</strong> Persentase pajak atas euro terakhir yang Anda hasilkan. Penting untuk mengetahui berapa besar beban pajak sebenarnya dari kenaikan gaji atau bonus.',
        '<strong>Minimum Vital:</strong> Pendapatan yang dianggap penting oleh Negara untuk memenuhi kebutuhan dasar wajib pajak dan keluarga, sehingga dibebaskan dari pajak.',
        '<strong>Pemotongan Gaji:</strong> Pembayaran di muka yang dilakukan pemberi kerja setiap bulan ke Kantor Pajak atas nama Anda, berdasarkan perkiraan apa yang menjadi kewajiban Anda di akhir tahun.',
        '<strong>Pendapatan Bersih:</strong> Gaji kotor dikurangi kontribusi Jaminan Sosial dan biaya yang dapat dikurangkan yang diizinkan oleh undang-undang pajak.',
      ],
    },
    {
      type: 'title',
      text: 'Cara mengoptimalkan pemotongan IRPF Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Banyak pekerja bertanya-taya apakah mereka harus meminta pemberi kerja mereka untuk memotong lebih banyak atau lebih sedikit. Kenyataannya, pemotongan adalah "pembayaran di muka" ke Kantor Pajak. Jika pemotongan Anda kurang selama setahun, laporan pajak Anda mungkin menunjukkan saldo yang harus dibayar; jika pemotongan berlebih, Anda akan menerima pengembalian dana.',
    },
    {
      type: 'paragraph',
      html: '<strong>Mitos Kenaikan Golongan Pajak:</strong> Ada mitos bahwa pindah ke golongan pajak yang lebih tinggi berarti pendapatan bersih Anda berkurang. Ini salah. IRPF bersifat progresif; hanya pendapatan yang melebihi batas golongan yang dikenakan tarif lebih tinggi. Anda tidak akan pernah mendapatkan pendapatan bersih yang lebih rendah dari kenaikan bruto, meskipun dengan tarif marginal yang lebih tinggi.',
    },
    {
      type: 'paragraph',
      html: '<strong>Tip untuk keluarga:</strong> Pastikan Anda telah melaporkan kelahiran anak atau perubahan status disabilitas anggota keluarga dengan benar menggunakan formulir 145. Ini menyesuaikan pemotongan bulanan Anda dan menghindari kejutan dalam pelaporan pajak bulan Juni.',
    },
    {
      type: 'title',
      text: 'Perbedaan berdasarkan Daerah Otonom',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Desentralisasi fiskal di Spanyol berarti dua orang dengan gaji dan situasi keluarga yang sama memiliki pendapatan bersih yang berbeda tergantung apakah mereka tinggal di Toledo atau Barcelona. Daerah mengendalikan setengah dari pajak (skema regional). Madrid, misalnya, menonjol karena memiliki tarif terendah di hampir semua tingkat pendapatan, sementara wilayah lain menerapkan pengurangan untuk sewa atau pendidikan anak yang tidak tersedia secara nasional. Kalkulator kami memperhitungkan variasi ini untuk memberi Anda angka paling realistis berdasarkan lokasi Anda.',
    },
    {
      type: 'paragraph',
      html: 'Sebagai kesimpulan, <strong>simulasi gaji bersih 2026</strong> adalah alat perencanaan keuangan dasar. Mengetahui kapasitas tabungan nyata Anda dan memahami bagian mana dari pendapatan Anda yang mendukung layanan publik memungkinkan Anda membuat keputusan yang tepat tentang investasi, hipotek, atau perubahan karier.',
    },
  ],
};
