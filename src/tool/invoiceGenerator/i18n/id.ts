import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { InvoiceGeneratorUI } from '../ui';

const slug = 'pembuat-faktur';
const title = 'Pembuat Faktur Gratis untuk Freelancer dan Bisnis Kecil';
const description =
  'Buat faktur profesional online secara gratis. Isi detail Anda, tambahkan layanan, atur pajak penjualan dan pemotongan, lalu buat PDF yang siap cetak. Tidak perlu akun.';

const faqData = [
  {
    question: 'Informasi apa yang harus dicantumkan dalam faktur profesional?',
    answer:
      'Faktur profesional harus mencakup nomor faktur yang unik, tanggal faktur, nama bisnis lengkap dan informasi kontak Anda (termasuk NPWP), informasi bisnis klien, daftar layanan atau produk yang diperinci dengan jumlah dan harga satuan, pajak penjualan yang berlaku, dan syarat pembayaran yang jelas.',
  },
  {
    question: 'Apakah freelancer perlu memungut pajak atas layanan?',
    answer:
      'Tergantung pada negara dan jenis layanan Anda. Beberapa layanan profesional mungkin dikenakan PPN atau PPh. Pastikan untuk memahami peraturan perpajakan yang berlaku bagi freelancer di wilayah Anda.',
  },
  {
    question: 'Apa itu pemotongan pajak dan kapan itu berlaku?',
    answer:
      'Pemotongan pajak adalah pajak penghasilan yang mungkin dipotong oleh klien dari pembayaran Anda dan disetorkan ke kas negara atas nama Anda. Ini biasanya berlaku untuk transaksi jasa profesional tertentu.',
  },
  {
    question: 'Bolehkah saya menggunakan NIK atau NPWP pada faktur?',
    answer:
      'Sangat disarankan untuk menggunakan NPWP (Nomor Pokok Wajib Pajak) untuk keperluan profesional dan bisnis guna melindungi data pribadi Anda dan mematuhi peraturan pelaporan pajak.',
  },
];

const howToData = [
  {
    name: 'Masukkan informasi bisnis Anda',
    text: 'Klik pada "Perusahaan Saya" dan ganti dengan nama bisnis aktual, NPWP, alamat surat, dan email kontak Anda.',
  },
  {
    name: 'Isi detail klien Anda',
    text: 'Di bawah "Tagih Ke:", klik setiap bidang untuk memasukkan nama perusahaan klien, NPWP, alamat, dan email kontak.',
  },
  {
    name: 'Tambah layanan dan atur tarif',
    text: 'Jelaskan setiap layanan dalam tabel, atur jumlah dan harga satuan. Klik "Tambah Baris" untuk memasukkan item tambahan.',
  },
  {
    name: 'Tinjau total dan buat PDF',
    text: 'Verifikasi semua jumlah sudah benar, atur persentase Pajak jika berlaku, dan klik "Buat PDF" untuk mencetak atau menyimpan sebagai PDF.',
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

export const content: ToolLocaleContent<InvoiceGeneratorUI> = {
  slug,
  title,
  description,
  ui: {
    labelEditor: 'Editor Interaktif',
    labelEditHint: 'Klik pada teks mana pun dalam dokumen untuk mengeditnya secara langsung.',
    btnGenerate: 'Buat PDF',
    labelFrom: 'Dari:',
    labelTo: 'Tagih Ke:',
    labelDesc: 'Deskripsi Layanan atau Produk',
    labelQty: 'Jml.',
    labelPrice: 'Harga',
    labelAmount: 'Jumlah',
    btnAddRow: 'Tambah Baris',
    labelSubtotal: 'Subtotal:',
    labelTax: 'Pajak',
    labelWithholding: 'Pemotongan',
    labelTotal: 'Total:',
    defaultInvoiceTitle: 'FAKTUR',
    defaultInvoiceNum: 'FKT-24-001',
    defaultCompanyName: 'Perusahaan Saya',
    defaultCompanyId: 'NPWP 00.000.000.0-000.000',
    defaultAddress: 'Jl. Utama No. 123',
    defaultCity: 'Jakarta, 10001',
    defaultEmail: 'admin@perusahaansaya.com',
    placeholderDesc: 'Tambah deskripsi...',
    placeholderNotes: 'misal. Pembayaran jatuh tempo dalam 30 hari melalui transfer bank...',
    labelNotes: 'Catatan / Syarat Pembayaran',
    currencySymbol: 'Rp',
    defaultTaxRate: '11',
    defaultRetRate: '0',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber',
  bibliography: [
    { name: 'Pedoman Perpajakan Wajib Pajak Orang Pribadi - DJP', url: 'https://www.pajak.go.id/' },
    { name: 'Aturan Faktur Pajak - Indonesia', url: 'https://www.pajak.go.id/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Elemen Penting dalam Faktur Profesional',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Faktur bisnis yang valid lebih dari sekadar permintaan pembayaran — ia adalah dokumen hukum yang melindungi Anda dan klien Anda. Hilangnya bidang yang diperlukan dapat menunda pembayaran, menyebabkan masalah pelaporan pajak, atau bahkan membuat faktur tidak dapat dilaksanakan. Bagi freelancer dan kontraktor independen, melakukan hal ini dengan benar sejak hari pertama sangatlah penting.',
    },
    {
      type: 'card',
      title: 'Bidang yang Diperlukan dalam Faktur',
      html: '<ul><li><strong>Nomor Faktur:</strong> Harus berurutan tanpa celah (misal FKT-2024-001, FKT-2024-002).</li><li><strong>Tanggal Faktur:</strong> Tanggal Anda menerbitkan faktur.</li><li><strong>Info Penjual dan Pembeli:</strong> Nama legal lengkap, NPWP, dan alamat surat kedua belah pihak.</li><li><strong>Layanan Terperinci:</strong> Deskripsi, jumlah, dan harga satuan untuk setiap item.</li><li><strong>Syarat Pembayaran:</strong> Tanggal jatuh tempo dan metode pembayaran yang diterima.</li></ul>',
    },
    {
      type: 'title',
      text: 'Pajak dan Pemotongan pada Faktur Freelance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dua variabel pajak mempengaruhi jumlah pembayaran akhir Anda. <strong>Pajak Penjualan (seperti PPN)</strong> dipungut dari klien dan disetorkan ke negara — ini menambah biaya klien. <strong>Pemotongan Pajak (seperti PPh 23)</strong> dipotong dari pembayaran Anda oleh klien dan dikirim ke kantor pajak — ini akan mengurangi apa yang sebenarnya Anda terima sebagai pembayaran bersih.',
    },
    {
      type: 'code',
      code: 'Layanan yang diberikan         Rp 1.000.000\n+ PPN (11%)                     Rp 110.000\n- Pemotongan PPh                Rp 0\n--------------------------------------------\nPembayaran bersih diterima      Rp 1.110.000',
    },
    {
      type: 'title',
      text: 'Melindungi Identitas Pajak Anda sebagai Freelancer',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Gunakan NPWP Anda daripada data kependudukan pribadi lainnya jika memungkinkan. Ini menjaga informasi pribadi Anda tetap aman dalam dokumen yang dibagikan dengan berbagai pihak dalam proses bisnis klien.',
    },
    {
      type: 'tip',
      html: '<strong>Simpan setiap faktur sebagai PDF:</strong> Sangat disarankan untuk menyimpan catatan bisnis selama setidaknya beberapa tahun. Gunakan tombol Buat PDF setelah setiap faktur dan simpan ke folder khusus yang diatur berdasarkan tahun dan klien.',
    },
  ],
};
