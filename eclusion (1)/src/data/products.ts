import { Product, Artist, Founder } from '../types';

// ==========================================
// IDENTIFIER / DATA DECLARATION
// All platform data including products, artists, 
// and founders are defined below.
// ==========================================

import greenToteImg from '../assets/images/real_green_tote_1783842923126.jpg';
import bunnyKeychainImg from '../assets/images/real_bunny_keychain_1783842937996.jpg';
import stripedToteImg from '../assets/images/real_striped_tote_1783842949476.jpg';
import yellowCapImg from '../assets/images/real_yellow_cap_1783842960453.jpg';
import pinkSocksImg from '../assets/images/real_pink_socks_1783842972967.jpg';
import yellowStickersImg from '../assets/images/real_sunflower_stickers_1783842984767.jpg';
import rainbowNotebookImg from '../assets/images/real_rainbow_notebook_1783842996446.jpg';
import blueSocksImg from '../assets/images/real_blue_socks_1783843007299.jpg';

export const ARTISTS: Artist[] = [
  {
    id: 'ayu',
    name: 'Ayu',
    age: 11,
    specialNeeds: 'Sindrom Down (Down Syndrome)',
    bio: 'Ayu adalah anak yang periang dan sangat menyukai warna-warna pastel. Melukis adalah caranya mengekspresikan imajinasinya yang tanpa batas. Baginya, setiap goresan kuas adalah senyuman hangat yang ingin dia bagikan kepada dunia.',
    avatar: '🌸',
  },
  {
    id: 'bimo',
    name: 'Bimo',
    age: 12,
    specialNeeds: 'Autisme (Autism)',
    bio: 'Bimo memiliki fokus luar biasa pada detail pola geometris dan alam. Melalui karyanya, Bimo menceritakan keindahan struktur, dedaunan, dan harmoni warna cerah matahari hangat musim panas.',
    avatar: '☀️',
  },
  {
    id: 'candra',
    name: 'Candra',
    age: 10,
    specialNeeds: 'Tunarungu (Hearing Impairment)',
    bio: 'Candra mengekspresikan dunianya yang tenang namun penuh warna melalui lukisan cat air bertema laut, awan, dan petualangan imajinatif. Warna-warnanya mencerminkan semangat eksplorasi yang tinggi.',
    avatar: '🐬',
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'tote-green-check',
    name: 'Tote Bag Green Checkered',
    price: 74000,
    category: 'Tote Bag',
    image: greenToteImg,
    description: 'Tas jinjing kanvas serbaguna dengan pola kotak-kotak hijau pastel segar hasil lukisan tangan Bimo. Bahan kanvas organik tebal, kuat untuk membawa buku pelajaran, laptop, ataupun perlengkapan piknik musim panas Anda.',
    artistId: 'bimo',
  },
  {
    id: 'keychain-bunny',
    name: 'Bunny Keychain Pinky',
    price: 29000,
    category: 'Key Chain',
    image: bunnyKeychainImg,
    description: 'Gantungan kunci akrilik berbentuk kelinci pink yang menggemaskan, didesain langsung dari coretan tulus Ayu. Sangat cocok sebagai hiasan manis di tas sekolah, kunci rumah, maupun hadiah kecil untuk orang tersayang.',
    artistId: 'ayu',
  },
  {
    id: 'tote-striped-teal',
    name: 'Tote Bag Striped Teal',
    price: 74000,
    category: 'Tote Bag',
    image: stripedToteImg,
    description: 'Tote bag dengan garis horizontal warna biru toska (teal) dan krem laut karya Candra. Terinspirasi oleh ombak pantai yang menenangkan, tas ini membawa suasana angin sepoi-sepoi musim panas ke mana pun Anda melangkah.',
    artistId: 'candra',
  },
  {
    id: 'hat-yellow-sun',
    name: 'Topi Kuning Pastel',
    price: 55000,
    category: 'Hat',
    image: yellowCapImg,
    description: 'Topi baseball berwarna kuning cerah matahari karya Bimo. Dibuat dengan bahan katun premium berpori yang nyaman dipakai seharian di luar ruangan, membawa energi positif yang ceria untuk gaya kasual Anda.',
    artistId: 'bimo',
  },
  {
    id: 'socks-pink-knit',
    name: 'Socks Knit Pinky',
    price: 37000,
    category: 'Socks',
    image: pinkSocksImg,
    description: 'Kaos kaki rajut lembut berwarna merah muda pastel hangat karya Ayu. Bahan serat katun elastis premium menyerap keringat dengan baik, menjaga kaki Anda tetap nyaman, hangat, dan bergaya ceria.',
    artistId: 'ayu',
  },
  {
    id: 'stickers-sunflower',
    name: 'Stiker Bunga Matahari Ceria',
    price: 15000,
    category: 'Others',
    image: yellowStickersImg,
    description: 'Set stiker vinil tahan air (waterproof) dengan desain bunga matahari tersenyum hasil coretan bahagia Ayu. Sempurna untuk menghias botol minum (tumblr), laptop, jurnal, ataupun case handphone Anda.',
    artistId: 'ayu',
  },
  {
    id: 'notebook-rainbow',
    name: 'Buku Catatan Pelangi Sahabat',
    price: 45000,
    category: 'Others',
    image: rainbowNotebookImg,
    description: 'Buku sketsa bergaris dengan sampul tebal bermotif pelangi tersenyum hasil lukisan tangan Bimo. Berisi kertas ramah lingkungan berkualitas tinggi yang sangat halus untuk menulis impian, catatan, maupun gambar sketsa Anda.',
    artistId: 'bimo',
  },
  {
    id: 'socks-blue-clouds',
    name: 'Kaos Kaki Awan Biru',
    price: 37000,
    category: 'Socks',
    image: blueSocksImg,
    description: 'Kaos kaki rajut dengan warna biru langit cerah berhiaskan awan putih halus karya Candra. Menghadirkan kenyamanan melangkah bagai di atas awan, melengkapi koleksi fashion kasual musim panas yang ceria.',
    artistId: 'candra',
  }
];

export const FOUNDERS: Founder[] = [
  {
    id: 'naura',
    name: 'Naura',
    role: 'Co-Founder & Creative Director',
    avatar: '👩‍🎨',
    bio: 'Naura berdedikasi mendampingi anak-anak berkebutuhan khusus untuk memfasilitasi ekspresi seni mereka menjadi produk berkualitas tinggi.',
  },
  {
    id: 'nadia',
    name: 'Nadia',
    role: 'Co-Founder & Operations Lead',
    avatar: '👩‍💼',
    bio: 'Nadia memastikan kelancaran operasional platform dan distribusi hasil penjualan langsung kembali ke anak-anak desainer dan komunitas disabilitas.',
  },
  {
    id: 'samudra',
    name: 'Samudra',
    role: 'Co-Founder & Technology Lead',
    avatar: '🧑‍💻',
    bio: 'Samudra mengelola pengembangan platform digital Eclusion agar dapat diakses dengan mudah dan menyenangkan bagi semua orang.',
  }
];
