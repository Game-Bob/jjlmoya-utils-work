import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ResignationLetterGeneratorUI } from '../ui';

const slug = 'pembuat-surat-pengunduran-diri';
const title = 'Pembuat Surat Pengunduran Diri Profesional';
const description =
  'Buat surat pengunduran diri yang dipersonalisasi dalam hitungan detik. Template profesional siap salin atau unduh sebagai PDF secara instan.';

const faqData = [
  {
    question: 'Berapa hari pemberitahuan (notice period) yang harus saya berikan?',
    answer:
      'Di Indonesia, standarnya biasanya adalah 30 hari (one month notice) sesuai dengan aturan perusahaan atau kontrak kerja. Sangat penting untuk memeriksa kembali buku manual karyawan atau kontrak Anda.',
  },
  {
    question: 'Apakah saya berhak menerima uang pisah/penggantian hak jika mengundurkan diri?',
    answer:
      'Sesuai UU Cipta Kerja (atau UU Ketenagakerjaan), pekerja yang mengundurkan diri secara baik-baik berhak atas Uang Penggantian Hak (seperti sisa cuti yang belum diambil) dan Uang Pisah yang besarannya diatur dalam kontrak atau PP/PKB perusahaan.',
  },
  {
    question: 'Apakah saya bisa mendapatkan tunjangan pengangguran jika berhenti atas kemauan sendiri?',
    answer:
      'Dalam program Jaminan Kehilangan Pekerjaan (JKP) di Indonesia, manfaat biasanya diberikan kepada mereka yang terkena PHK, bukan yang mengundurkan diri secara sukarela.',
  },
  {
    question: 'Apa yang terjadi jika saya tidak memenuhi masa pemberitahuan?',
    answer:
      'Perusahaan mungkin tidak memberikan surat keterangan kerja (Paklaring) atau menahan sisa gaji/tunjangan tertentu sebagai penalti jika hal tersebut diatur dalam kontrak kerja Anda.',
  },
];

const howToData = [
  {
    name: 'Isi detail pribadi Anda',
    text: 'Masukkan nama lengkap Anda, nama atasan atau kontak HR, dan nama perusahaan.',
  },
  {
    name: 'Tentukan hari terakhir kerja',
    text: 'Pilih tanggal pengunduran diri Anda, pastikan sudah memperhitungkan masa pemberitahuan dalam kontrak.',
  },
  {
    name: 'Pilih jenis alasan',
    text: 'Pilih pendekatan yang paling sesuai dengan situasi Anda untuk mempersonalisasi teks surat.',
  },
  {
    name: 'Salin atau unduh surat',
    text: 'Klik tombol untuk menyalin teks ke clipboard atau unduh langsung dalam format PDF.',
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

export const content: ToolLocaleContent<ResignationLetterGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelUserName: 'Nama lengkap Anda',
    labelManagerName: 'Nama Manajer atau HR',
    labelManagerGender: 'Salam Penutup',
    labelCompanyName: 'Nama Perusahaan',
    labelLastDay: 'Hari terakhir kerja (Tanggal keluar)',
    labelReasonType: 'Pendekatan Alasan',
    labelCity: 'Kota tempat Anda menulis',
    optGenderNeutral: 'Bapak/Ibu (Netral)',
    optGenderM: 'Bapak (Laki-laki)',
    optGenderF: 'Ibu (Perempuan)',
    optReasonStandard: 'Standar (Profesional dan formal)',
    optReasonOpportunity: 'Kesempatan profesional baru',
    optReasonPersonal: 'Alasan pribadi',
    optReasonEducation: 'Studi / Pendidikan',
    optReasonGrowth: 'Kurangnya perkembangan karir',
    optReasonDirect: 'Langsung dan singkat (Tanpa alasan)',
    btnCopy: 'Salin Surat',
    btnDownload: 'Unduh PDF',
    copyFeedback: 'Berhasil disalin ke clipboard',
    defaultUserName: 'Budi Santoso',
    defaultManagerName: 'Siti Aminah',
    defaultCompanyName: 'PT Maju Jaya',
    defaultCity: 'Jakarta',
    dateLocale: 'id-ID',
    datePrefix: '',
    managerPrefix: 'Yth.',
    managerFallback: 'Departemen HR',
    companyFallback: 'Nama Perusahaan',
    salutationNeutral: 'Bapak/Ibu',
    salutationM: 'Bapak',
    salutationF: 'Ibu',
    salutationFallback: 'Manajer',
    signatureFallback: 'Tanda Tangan Karyawan',
    thanksParagraph:
      'Saya ingin menyampaikan rasa terima kasih yang tulus atas kesempatan berkembang secara profesional dan pribadi yang telah diberikan selama masa kerja saya di perusahaan.',
    transitionParagraph:
      'Saya berkomitmen penuh untuk mendukung transisi yang lancar dan siap membantu serah terima tanggung jawab saya serta tugas-tugas yang tertunda seefektif mungkin.',
    closingWord: 'Hormat saya,',
    reasonStandard:
      'Bersama surat ini, saya bermaksud untuk secara resmi mengajukan pengunduran diri dari posisi saya saat ini. Hari terakhir kerja saya adalah tanggal [DATE], sesuai dengan masa pemberitahuan yang ditentukan dalam kontrak saya.',
    reasonOpportunity:
      'Saya menulis surat ini untuk menginformasikan keputusan saya mengundurkan diri, karena telah menerima peluang profesional baru yang memungkinkan saya untuk mengambil tantangan baru. Tanggal pengunduran diri saya efektif per [DATE].',
    reasonPersonal:
      'Karena adanya keadaan pribadi yang memerlukan perhatian penuh dan segera dari saya, saya merasa perlu untuk mengundurkan diri dari posisi saya saat ini. Masa kerja saya akan berakhir pada [DATE].',
    reasonEducation:
      'Saya telah memutuskan untuk melanjutkan pendidikan tingkat lanjut secara penuh waktu, oleh karena itu saya mengajukan pengunduran diri sukarela. Hari terakhir saya bekerja adalah [DATE].',
    reasonGrowth:
      'Setelah mempertimbangkan dengan matang, saya memutuskan untuk mengarahkan kembali karier saya demi lingkungan yang memungkinkan saya mengembangkan keterampilan di bidang yang berbeda. Pengunduran diri saya efektif per [DATE].',
    reasonDirect:
      'Melalui surat ini saya informasikan keputusan saya untuk mengakhiri hubungan kerja dengan perusahaan. Hari terakhir kerja saya adalah [DATE].',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData: 'Sumber',
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Cara Menulis Surat Pengunduran Diri yang Profesional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memutuskan untuk meninggalkan pekerjaan adalah langkah besar. <strong>Menyerahkan surat pengunduran diri</strong> bukan sekadar formalitas administratif; ini adalah kesan terakhir Anda pada organisasi.',
    },
    {
      type: 'tip',
      html: '<strong>Tips:</strong> Meskipun Anda memiliki hubungan baik dengan atasan, pengunduran diri <strong>harus selalu diserahkan secara tertulis</strong> untuk menandai dimulainya masa pemberitahuan secara resmi.',
    },
    {
      type: 'title',
      text: 'Elemen Penting dalam Surat Pengunduran Diri',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Data kontak Anda dan penerima',
        'Tanggal penyerahan surat',
        'Pernyataan pengunduran diri yang jelas',
        'Tanggal terakhir bekerja',
        'Ucapan terima kasih singkat',
        'Tanda tangan',
      ],
    },
    {
      type: 'code',
      code: '[Kota, Tanggal]\n\nYth: [Nama Manajer]\n[Nama Perusahaan]\n\nDengan hormat,\n\nSaya bermaksud mengajukan pengunduran diri saya. Hari terakhir kerja saya adalah [Tanggal].\n\nTerima kasih atas kepercayaan yang diberikan selama ini.\n\nHormat saya,\n[Tanda Tangan]',
    },
  ],
};
