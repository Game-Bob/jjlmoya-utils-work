import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AutonomosCalculatorUI } from '../ui';

const slug = 'kalkulator-kuota-freelance-spanyol';
const title = 'Kalkulator Kuota Freelance 2026: Sistem Nyata RETA Spanyol';
const description =
  'Simulator gratis untuk kontribusi wiraswasta di Spanyol 2026. Hitung pendapatan bersih nyata Anda, tingkat kontribusi, dan kuota bulanan dengan MEI 0,9% yang baru.';

const faqData = [
  {
    question: 'Bagaimana sistem kontribusi baru bekerja untuk tahun 2026?',
    answer:
      'Sistem ini didasarkan pada 15 tingkat pendapatan bersih nyata. Anda harus menyatakan prakiraan laba Anda (pendapatan dikurangi biaya) dan membayar kontribusi yang terkait dengan tingkat bulanan tersebut.',
  },
  {
    question: 'Apa itu MEI dan bagaimana pengaruhnya terhadap kuota wiraswasta saya?',
    answer:
      'Mekanisme Kesetaraan Antargenerasi (MEI) adalah pajak khusus untuk pensiun. Pada tahun 2026 naik menjadi 0,9%, sedikit meningkatkan kontribusi dibandingkan tahun 2025 untuk semua pekerja mandiri.',
  },
  {
    question: 'Berapa kali saya dapat mengubah basis kontribusi saya?',
    answer:
      'Anda dapat mengubah basis kontribusi Anda, dan oleh karena itu kuota wiraswasta Anda, hingga 6 kali setahun untuk menyesuaikannya dengan realitas laba bulanan Anda.',
  },
  {
    question: 'Apa yang terjadi jika pendapatan aktual saya berbeda dari prakiraan saya?',
    answer:
      'Jaminan Sosial akan melakukan rekonsiliasi tahunan dengan mencocokkan data dengan Kantor Pajak. Jika Anda membayar kurang, mereka akan menagih selisihnya; jika Anda membayar lebih, kelebihannya akan dikembalikan secara otomatis.',
  },
  {
    question: 'Apakah tarif flat 80 euro masih ada?',
    answer:
      'Ya, biaya yang dikurangi sebesar €80 dipertahankan untuk wiraswasta baru selama 12 bulan pertama aktivitas, dapat diperpanjang selama 12 bulan lagi jika pendapatan di bawah upah minimum.',
  },
];

const howToData = [
  {
    name: 'Masukkan pendapatan dan pengeluaran Anda',
    text: 'Input prakiraan omzet bulanan Anda dan biaya yang dapat dikurangkan dari aktivitas profesional Anda.',
  },
  {
    name: 'Tentukan profil kerja Anda',
    text: 'Pilih apakah Anda seorang pekerja mandiri individu (potongan 7%) atau direktur perusahaan (potongan 3%).',
  },
  {
    name: 'Lihat tingkat aktual Anda',
    text: 'Simulator akan menghitung pendapatan bersih Anda dan menunjukkan tingkat kontribusi yang berlaku untuk tahun 2026.',
  },
  {
    name: 'Periksa dampak MEI',
    text: 'Anda akan melihat rincian kuota akhir termasuk kontigensi dan faktor kesetaraan antargenerasi yang baru.',
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

export const content: ToolLocaleContent<AutonomosCalculatorUI> = {
  slug,
  title,
  description,
  ui: {
    labelIncome: 'Pendapatan Kotor Bulanan',
    labelExpenses: 'Biaya Bulanan yang Dapat Dikurangkan',
    labelType: 'Profil Pekerja',
    labelFlatRate: 'Tarif Flat (Pendaftaran Baru)',
    optStandard: 'Wiraswasta Individu (Potongan 7%)',
    optSocietario: 'Direktur Perusahaan (Potongan 3%)',
    optNoFlatRate: 'Tidak diterapkan (Kuota Nyata)',
    optFlatRate: 'Ya, tahun pertama (€80/bulan)',
    labelBracket: 'Tingkat Pendapatan Bersih Anda',
    labelNetDisplay: 'Pendapatan Bersih Bulanan',
    labelCuota: 'Kontribusi Jaminan Sosial',
    labelBase: 'Basis Kontribusi',
    labelNetAfter: 'Netto Nyata (Setelah Kontribusi)',
    labelProjection: 'PROYEKSI 2026 (MEI 0,9%)',
    infoText:
      'Sistem RETA 2026: Perhitungan mencakup pendapatan bersih bulanan dengan potongan biaya umum (7% atau 3%). Kontribusi yang ditampilkan mencakup kontigensi umum, kontigensi profesional, penghentian aktivitas, pelatihan, dan Mekanisme Kesetaraan Antargenerasi (MEI) yang diperbarui menjadi 0,9% untuk tahun 2026.',
  },
  faqTitle: 'Pertanyaan yang Sering Diajukan',
  faq: faqData,
  bibliographyTitle: 'Sumber',
  bibliography: [
    {
      name: 'Jaminan Sosial: Sistem kontribusi baru',
      url: 'https://portal.seg-social.gob.es/wps/portal/importass/importass/Colectivos/Trabajo+Autonomo/guia',
    },
    {
      name: 'Kantor Pajak: Pendapatan dari aktivitas ekonomi',
      url: 'https://sede.agenciatributaria.gob.es/Sede/irpf/empresarios-individuales-profesionales/rendimientos-actividades-economicas.html',
    },
    {
      name: 'BOE: Keputusan-Undang-undang Kerajaan 13/2022 tentang reformasi RETA',
      url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2022-12482',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kalkulator Kuota Wiraswasta 2026: Panduan untuk Sistem Baru',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Menjadi wiraswasta di Spanyol berarti menghadapi salah satu tugas yang paling dinamis dan terkadang membingungkan: <strong>kontribusi Jaminan Sosial</strong>. Sejak sistem baru berdasarkan <strong>pendapatan bersih nyata</strong> mulai berlaku, konsep "kuota tetap" telah hilang, digantikan oleh model progresif.',
    },
    {
      type: 'title',
      text: 'Bagaimana Sistem Kontribusi RETA yang Baru Bekerja?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Hingga tahun 2023, setiap pekerja mandiri dapat bebas memilih basis kontribusi mereka, yang menyebabkan sebagian besar berkontribusi pada batas minimum. Reformasi ini bertujuan untuk memastikan penghasilan tinggi memberikan kontribusi lebih banyak, sementara mereka dengan pendapatan lebih rendah melihat beban bulanan mereka berkurang.',
    },
    {
      type: 'paragraph',
      html: 'Sistem ini didasarkan pada <strong>tingkat pendapatan bersih</strong>. Ini berarti kuota Anda tidak tergantung pada pendapatan kotor (omzet) Anda, tetapi pada apa yang sebenarnya Anda simpan secara "bersih" setelah mengurangkan biaya profesional dan menerapkan potongan biaya umum tambahan.',
    },
    {
      type: 'title',
      text: 'Perubahan Kunci untuk 2026: Faktor MEI',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tahun 2026 menandai konsolidasi fase kedua dari reformasi. Salah satu pembaruan paling kritis adalah kenaikan <strong>Mekanisme Kesetaraan Antargenerasi (MEI)</strong>.',
    },
    {
      type: 'list',
      items: [
        '<strong>Kenaikan MEI:</strong> Untuk tahun 2026, MEI naik menjadi 0,9%, mewakili sedikit kenaikan kontribusi dibandingkan dengan tahun 2025 untuk semua tingkat.',
        '<strong>Tinjauan Tingkat:</strong> Tingkat pendapatan bersih dipertahankan, tetapi kontribusi minimum dan maksimum dari setiap rentang disesuaikan untuk menyatu dengan sistem kontribusi pendapatan nyata.',
        '<strong>Rekonsiliasi Tahunan:</strong> Pada akhir tahun, Jaminan Sosial akan mencocokkan data dengan Kantor Pajak. Jika Anda membayar lebih atau membayar kurang berdasarkan laba aktual, pengembalian dana atau tagihan akan diterbitkan.',
      ],
    },
    {
      type: 'title',
      text: 'Cara Menghitung Pendapatan Bersih Bulanan Anda',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Untuk menggunakan kalkulator kami secara akurat, penting untuk memahami angka mana yang harus dimasukkan. Rumus yang diterapkan oleh Jaminan Sosial adalah:',
    },
    {
      type: 'code',
      code: 'Pendapatan Bersih = (Pendapatan Kotor - Biaya yang Dapat Dikurangkan) / (1 - Potongan Biaya Umum)',
    },
    {
      type: 'paragraph',
      html: '<strong>Potongan Biaya Umum</strong> adalah <strong>7%</strong> untuk wiraswasta individu dan <strong>3%</strong> untuk direktur perusahaan.',
    },
    {
      type: 'card',
      title: 'Contoh perhitungan 2026',
      html: '<ul><li>Omzet: €4.000 / Biaya: €1.000</li><li>Margin laba: €3.000</li><li>Potongan umum (7%): €210</li><li>Pendapatan bersih yang dapat diperhitungkan: €2.790</li><li><strong>Estimasi kuota 2026:</strong> Tingkat 8, kira-kira €350 + penyesuaian MEI.</li></ul>',
    },
    {
      type: 'title',
      text: 'Keuntungan dari Sistem Progresif',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Perlindungan sosial yang lebih baik:</strong> Dengan berkontribusi berdasarkan basis yang lebih realistis, tunjangan disabilitas sementara, persalinan, paternitas, dan terutama pensiun akan jauh lebih tinggi.',
        '<strong>Fleksibilitas penuh:</strong> Anda dapat mengubah basis kontribusi Anda hingga 6 kali setahun. Jika Anda mengantisipasi penurunan pendapatan yang drastis, Anda dapat pindah ke tingkat yang lebih rendah untuk menghindari tekanan arus kas.',
        '<strong>Tarif Flat €80:</strong> Dipertahankan untuk pengusaha baru di tahun pertama, memungkinkan awal dengan biaya tetap terkendali.',
      ],
    },
    {
      type: 'title',
      text: 'Direktur Perusahaan vs. Wiraswasta Individu',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Direktur perusahaan</strong> (dengan perusahaan SL) memiliki basis kontribusi minimum yang sedikit lebih tinggi dan potongan biaya umum lebih rendah (3%). Hal ini karena hukum menganggap bahwa kontrol pemegang saham memberi mereka posisi yang berbeda relatif terhadap risiko pasar.',
    },
    {
      type: 'tip',
      html: '<strong>Tip Pro:</strong> Jika pendapatan bersih Anda sangat bervariasi setiap bulannya, cobalah untuk menempatkan diri Anda pada tingkat menengah yang bijaksana. Rekonsiliasi berikutnya tidak terhindarkan, tetapi dengan cara ini Anda akan menghindari pembayaran tak terduga sebesar ribuan euro ketika "tagihan" Jaminan Sosial tiba di akhir tahun.',
    },
    {
      type: 'title',
      text: 'Apa yang termasuk dalam kuota bulanan Anda?',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Kontigensi Umum (28,30%):</strong> Mencakup ketidakhadiran karena sakit umum atau kecelakaan non-kerja.',
        '<strong>Kontigensi Profesional (1,30%):</strong> Kecelakaan kerja dan penyakit akibat kerja.',
        '<strong>Penghentian Aktivitas (0,90%):</strong> Tunjangan "pengangguran" wiraswasta.',
        '<strong>Pelatihan Profesional (0,10%):</strong> Akses ke kursus dan pelatihan.',
        '<strong>MEI (0,90% pada 2026):</strong> Dana untuk menjamin keberlanjutan pensiun.',
      ],
    },
    {
      type: 'title',
      text: 'Proses Rekonsiliasi (Kantor Pajak dan Jaminan Sosial)',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Setiap tahun, setelah kampanye lapor pajak, Kantor Pajak mengkomunikasikan pendapatan bersih aktual Anda kepada Jaminan Sosial. Jika Anda memilih tingkat yang lebih rendah dari yang diwajibkan oleh pendapatan aktual Anda, Anda akan menerima pemberitahuan pembayaran untuk selisihnya. Sebaliknya, jika Anda berkontribusi di atas laba Anda, Jaminan Sosial akan secara otomatis mengembalikan kelebihannya tanpa Anda perlu memintanya secara eksplisit.',
    },
    {
      type: 'title',
      text: 'Kesimpulan dan Rekomendasi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Kalkulator wiraswasta 2026</strong> adalah alat yang sangat diperlukan untuk perencanaan pajak bagi setiap freelancer. Kami menyarankan untuk menggunakan simulator ini setiap kali Anda menutup kontrak penting atau mengubah biaya tetap Anda untuk memastikan kuota wiraswasta Anda selalu sejalan dengan realitas bisnis Anda.',
    },
  ],
};
