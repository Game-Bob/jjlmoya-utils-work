import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { NieNifVerifierUI } from '../ui';

const slug = 'verifikator-nie-nif-spanyol';
const title = 'Verifikator NIE/NIF/CIF Spanyol: Validator Identitas Pajak Spanyol';
const description =
  'Alat gratis untuk memverifikasi validitas NIF (DNI Spanyol), NIE (orang asing), dan CIF (perusahaan) di Spanyol. Memeriksa digit kontrol dan format resmi.';

const faqData = [
  {
    question: 'Apakah aman memasukkan NIF atau NIE saya di alat ini?',
    answer:
      'Ya, sepenuhnya aman. Validasi dilakukan sepenuhnya di browser Anda menggunakan JavaScript. Data Anda tidak pernah dikirim ke server mana pun atau disimpan dalam database.',
  },
  {
    question: 'Apa perbedaan antara NIF dan CIF?',
    answer:
      'NIF (Número de Identificación Fiscal) adalah istilah saat ini untuk semua ID pajak. Namun, CIF (Código de Identificación Fiscal) masih umum digunakan untuk merujuk pada NIF badan hukum (perusahaan dan organisasi).',
  },
  {
    question: 'Bagaimana saya bisa tahu jika NIF valid jika saya tidak memiliki hurufnya?',
    answer:
      'Masukkan 8 digit di verifikator kami dan periksa apakah hurufnya cocok. Algoritma menghitung huruf yang tepat dengan membagi angka tersebut dengan 23.',
  },
  {
    question: 'Apakah alat ini berfungsi untuk nomor NIE yang dimulai dengan Y atau Z?',
    answer:
      'Ya, verifikator kami mendukung semua format NIE: mulai dari format lama yang diawali X hingga yang lebih baru yang diawali Y atau Z, dengan menerapkan konversi numerik resmi.',
  },
  {
    question: 'Apakah ini memvalidasi apakah nomor tersebut benar-benar ada di otoritas pajak?',
    answer:
      'Tidak. Alat ini melakukan validasi algoritmik dan matematis. Ini mengonfirmasi bahwa nomor tersebut memiliki struktur legal dan digit kontrol yang benar, tetapi tidak menanyakan sensus nyata dari Agencia Tributaria.',
  },
];

const howToData = [
  {
    name: 'Temukan pengidentifikasi',
    text: 'Cari kode alfa-numerik pada dokumen (DNI, Kartu Izin Tinggal, atau Kartu Identitas Pajak).',
  },
  {
    name: 'Masukkan kode',
    text: 'Ketik NIF, NIE, atau CIF di bidang teks. Jangan khawatir tentang spasi atau tanda hubung.',
  },
  {
    name: 'Periksa hasilnya',
    text: 'Alat ini akan secara instan menganalisis apakah strukturnya valid dan apakah karakter kontrolnya cocok.',
  },
  {
    name: 'Salin hasil',
    text: 'Jika kode valid, Anda dapat langsung menyalinnya untuk ditempelkan ke dalam faktur, kontrak, atau formulir administratif Anda.',
  },
];

const bibliography = [
  {
    name: 'Agencia Tributaria: NIF untuk perorangan dan badan hukum',
    url: 'https://sede.agenciatributaria.gob.es/Sede/procedimiento-recaudatorio-gestor/nif.html',
  },
  {
    name: 'Kementerian Dalam Negeri: Struktur DNI dan NIE',
    url: 'https://www.dnielectronico.es/PortalDNIe/PRF1_9._2.html?punto=5.2',
  },
  {
    name: 'BOE: Peraturan Manajemen Pajak Umum',
    url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-14406',
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

export const content: ToolLocaleContent<NieNifVerifierUI> = {
  slug,
  title,
  description,
  ui: {
    labelInput: 'Masukkan pengidentifikasi pajak Spanyol',
    placeholder: '45938210Y',
    typeNIF: 'NIF / DNI',
    typeNIE: 'NIE',
    typeCIF: 'CIF',
    msgValidSuffix: 'Valid',
    msgInvalidControl: 'Digit kontrol salah',
    msgInvalidNIEControl: 'Kesalahan karakter kontrol',
    msgInvalidCIF: 'Kombinasi salah',
    msgIncomplete: 'Tidak lengkap',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Pentingnya Memverifikasi NIF, NIE, dan CIF di Spanyol',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dalam ekosistem administratif dan bisnis di Spanyol, identifikasi pajak adalah landasan dari semua transaksi, kontrak, dan urusan publik. Baik Anda seorang freelancer yang menerbitkan faktur, perusahaan yang mengelola pemasok, atau individu yang melakukan pembelian, <strong>verifikator NIF, NIE, dan CIF</strong> yang andal adalah alat yang sangat diperlukan untuk menghindari kesalahan administratif dan potensi penipuan.',
    },
    {
      type: 'title',
      text: 'Apa itu NIF, NIE, dan CIF? Perbedaan Utama',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>NIF (Número de Identificación Fiscal):</strong> Istilah umum untuk identifikasi pajak di Spanyol. Untuk warga negara Spanyol, NIF cocok dengan nomor DNI diikuti dengan huruf kontrol (8 digit + 1 huruf).',
        '<strong>NIE (Número de Identidad de Extranjero):</strong> Kode identifikasi untuk individu non-Spanyol dengan aktivitas pajak di Spanyol. Dimulai dengan X, Y, atau Z, diikuti oleh 7 digit dan satu huruf kontrol.',
        '<strong>CIF (Código de Identificación Fiscal):</strong> Nama populer untuk NIF badan hukum (perusahaan, asosiasi). Terdiri dari satu huruf yang menunjukkan jenis organisasi + 7 digit + digit atau huruf kontrol.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Kerja Algoritma Validasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Untuk NIF/DNI, huruf akhir didapat dengan membagi bagian numerik dengan 23 (modulo 23) dan memetakan sisanya ke urutan <strong>TRWAGMYFPDXBNJZSQVHLCKE</strong>. Untuk CIF, pasangan dan digit posisi ganjil yang digandakan dijumlahkan untuk memverifikasi karakter kontrol. Seluruh perhitungan berjalan di browser Anda dalam milidetik.',
    },
    {
      type: 'title',
      text: 'Penggunaan Umum Verifikator NIE/NIF',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Akuntansi dan Agen Pajak:</strong> Verifikasi pengidentifikasi sebelum mendaftarkan klien atau pemasok dalam model pajak.',
        '<strong>E-commerce:</strong> Validasi NIF saat checkout untuk menerbitkan faktur yang benar.',
        '<strong>Departemen SDM:</strong> Konfirmasikan NIE karyawan asing sebelum mendaftarkan mereka ke Jaminan Sosial.',
      ],
    },
    {
      type: 'title',
      text: 'Tips untuk Verifikasi yang Benar',
      level: 2,
    },
    {
      type: 'list',
      items: [
        'Jika verifikator melaporkan kesalahan, periksa apakah Anda bingung membedakan 0 (nol) dengan O (huruf) — kesalahan yang sangat umum pada nomor NIE.',
        'Untuk CIF, selalu sertakan huruf awal yang mengidentifikasi jenis entitas (A = S.A., B = S.L., dll.).',
        'Alat ini memeriksa validitas matematis, bukan apakah nomor tersebut saat ini aktif dalam sensus AEAT.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Privasi terjamin:</strong> Validasi berjalan sepenuhnya di browser Anda. Nomor yang Anda masukkan tidak pernah dikirim ke server mana pun.',
    },
  ],
};
