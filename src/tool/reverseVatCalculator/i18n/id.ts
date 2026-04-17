import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ReverseVatCalculatorUI } from '../ui';

const slug = 'kalkulator-ppn-terbalik-spanyol';
const title = 'Kalkulator PPN Terbalik: Hitung Dasar Pengenaan Pajak';
const description =
  'Kalkulator PPN terbalik online. Pisahkan PPN dari jumlah total untuk mendapatkan dasar pengenaan pajak. Alat penting untuk freelancer di Spanyol.';

const faqData = [
  {
    question: 'Apa itu PPN terbalik atau memisahkan PPN?',
    answer:
      'Ini adalah proses menghitung dasar pengenaan pajak (netto) dari harga total yang sudah termasuk pajak. Ini penting bagi freelancer yang perlu membuat faktur dari harga akhir yang disepakati.',
  },
  {
    question: 'Bagaimana cara menghitung PPN terbalik secara manual?',
    answer:
      'Untuk tarif PPN 21%, bagi jumlah total dengan 1,21. Hasilnya adalah dasar pengenaan pajak. Selisih antara total dan dasar tersebut adalah jumlah PPN.',
  },
  {
    question: 'Apa saja jenis PPN yang ada di Spanyol?',
    answer:
      'Ada tiga jenis: Umum (21%), Dikurangi (10% untuk makanan, kesehatan, perumahan) dan Sangat Dikurangi (4% untuk buku, koran, roti, susu).',
  },
  {
    question: 'Kapan wajib untuk memisahkan PPN?',
    answer:
      'Setiap kali Anda menerbitkan faktur profesional atau yang disederhanakan. Anda harus mencantumkan dasar pengenaan pajak, tarif pajak yang berlaku, dan jumlah PPN secara terpisah.',
  },
];

const howToData = [
  {
    name: 'Masukkan jumlah total',
    text: 'Ketik jumlah akhir termasuk PPN yang ingin Anda pecah nilainya.',
  },
  {
    name: 'Pilih jenis PPN',
    text: 'Pilih antara 21%, 10% atau 4% tergantung pada kategori produk atau layanan Anda.',
  },
  {
    name: 'Dapatkan dasar pajak',
    text: 'Tinjau perhitungan otomatis yang menunjukkan berapa banyak uang yang sebenarnya milik Anda sebelum pajak.',
  },
  {
    name: 'Salin data penagihan',
    text: 'Gunakan nilai yang dihitung untuk mengisi bidang dasar dan PPN di perangkat lunak penagihan Anda.',
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

export const content: ToolLocaleContent<ReverseVatCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelTotal: 'Jumlah Total (Termasuk PPN)',
    labelVatType: 'Jenis PPN',
    btn21: '21 %',
    btn10: '10 %',
    btn4: '4 %',
    btn0: '0 %',
    labelBase: 'Dasar Pengenaan Pajak',
    labelVat: 'Jumlah PPN',
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
      text: 'Masalah dalam Menghitung PPN Terbalik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bagi banyak freelancer, menghitung dasar pajak dari harga total seringkali membingungkan. Kesalahan umum adalah mengira bahwa untuk menghapus PPN 21%, Anda cukup mengurangi 21% dari total. <strong>Ini salah!</strong> Melakukan hal ini akan membuat Anda rugi setiap kuartal.',
    },
    {
      type: 'title',
      text: 'Penjelasan Matematika',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'PPN diterapkan <strong>di atas</strong> nilai dasar. Oleh karena itu, harga akhir adalah 121% dari dasar (jika PPN 21%). Untuk kembali ke nilai awal, kita tidak mengurangi; kita <strong>membagi</strong>. <code>Dasar = Total / 1.21</code>.',
    },
    {
      type: 'code',
      code: 'Dasar Pengenaan Pajak = Jumlah Total / (1 + Tarif PPN)\nJumlah PPN = Jumlah Total - Dasar Pengenaan Pajak',
    },
  ],
};
