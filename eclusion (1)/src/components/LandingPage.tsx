import { motion } from 'motion/react';
import { ShoppingBag, ArrowUpRight, Sparkles, Heart, Star, MoreHorizontal } from 'lucide-react';
import CloudBackground from './CloudBackground';
import artistBoyImg from '../assets/images/artist_boy_red_hoodie_1783843283353.jpg';
import greenToteImg from '../assets/images/real_green_tote_1783842923126.jpg';

interface LandingPageProps {
  onStartShopping: (initialTab?: string, scrollTarget?: string) => void;
}

export default function LandingPage({ onStartShopping }: LandingPageProps) {
  return (
    <div className="relative min-h-screen bg-[#d0e9ff] flex flex-col justify-between overflow-hidden select-none pb-0">
      
      {/* Decorative Cloud Background */}
      <CloudBackground />

      {/* Header Navigation matching reference style */}
      <nav className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-sky-900 tracking-tight flex items-center gap-1">
            <span className="text-amber-500 text-3xl animate-spin" style={{ animationDuration: '6s' }}>❈</span>
            eclusion
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sky-950 font-bold font-display tracking-wide text-sm items-center">
          <button onClick={() => onStartShopping('Home')} className="hover:text-sky-600 transition-colors cursor-pointer bg-transparent border-none">Galeri Produk</button>
          <button onClick={() => onStartShopping('About Us')} className="hover:text-sky-600 transition-colors cursor-pointer bg-transparent border-none">Tentang Kami</button>
          <button onClick={() => onStartShopping('About Us', 'collaborators')} className="hover:text-sky-600 transition-colors cursor-pointer bg-transparent border-none">Kisah Seniman</button>
        </div>
        <div className="flex items-center gap-2">
          {/* Dual Pill toggle style from reference */}
          <div className="bg-white/80 backdrop-blur-xs p-1 rounded-full border border-sky-200 flex gap-1 shadow-xs text-xs font-bold">
            <span className="px-3 py-1.5 rounded-full text-sky-900 bg-sky-100">Umum</span>
            <span className="px-3 py-1.5 rounded-full text-gray-400">Komunitas</span>
          </div>
          <button 
            onClick={() => onStartShopping('About Us')}
            className="hidden sm:inline-flex bg-amber-300 hover:bg-amber-400 text-amber-950 font-black text-xs px-5 py-2.5 rounded-full border border-amber-400 shadow-sm cursor-pointer transition-all active:scale-95"
          >
            Dukung Seniman
          </button>
        </div>
      </nav>

      {/* Main Content Body */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-grow mt-4 mb-16">
        
        {/* Left Side: Elegant Typography & Large Solid Button */}
        <div className="lg:col-span-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-800 rounded-full text-xs font-extrabold tracking-widest uppercase border border-yellow-200">
            ✨ Summer Collection 2026
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-sky-950 leading-[1.1] tracking-tight">
            Empowering <br/>
            <span className="text-sky-600 relative inline-block">
              Creativity
              <span className="absolute -right-10 -top-4 text-3xl animate-bounce">🌿</span>
            </span> <br/>
            <span className="italic font-serif text-amber-500 font-normal">through Inclusion</span>
          </h1>

          <p className="text-base sm:text-lg text-sky-900/80 max-w-md leading-relaxed font-medium">
            Setiap goresan kuas adalah suara. Setiap warna adalah harapan. Temukan keindahan produk dari perspektif unik anak-anak luar biasa kami.
          </p>

          {/* CTA Button matching the reference image's black/yellow pill */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStartShopping}
              className="bg-gray-950 hover:bg-gray-900 text-white pl-8 pr-3 py-3 rounded-full font-bold text-lg flex items-center justify-between gap-6 shadow-lg shadow-sky-900/20 cursor-pointer transition-all"
            >
              <span>Mulai Belanja</span>
              <div className="w-10 h-10 bg-amber-400 rounded-full flex items-center justify-center text-gray-900 shadow-inner">
                <ArrowUpRight className="w-5 h-5 stroke-[3]" />
              </div>
            </motion.button>
            <button 
              onClick={onStartShopping}
              className="text-sky-950 font-black text-sm underline hover:text-sky-700 transition-all cursor-pointer"
            >
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>

        {/* Right Side: Bento / Floating Layout precisely matching the Reference Image components */}
        <div className="lg:col-span-6 w-full relative flex flex-col sm:grid sm:grid-cols-12 gap-6 items-center">
          
          {/* Card 1: Today's Agenda (Top-Left floating widget) */}
          <div className="col-span-7 bg-white p-5 rounded-[2.5rem] border border-sky-100 shadow-xl flex flex-col justify-between h-72 w-full">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5">
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Karya Unggulan</span>
              <span className="text-[10px] bg-sky-100 text-sky-800 font-extrabold px-2.5 py-0.5 rounded-full">Baru</span>
            </div>
            
            {/* Visual product presentation inside container */}
            <div className="my-3 bg-[#fdfaf2] p-3 rounded-3xl border border-amber-100 flex gap-3 items-center relative overflow-hidden group">
              <div className="w-16 h-16 bg-white rounded-2xl border border-gray-100 flex items-center justify-center shrink-0">
                <img src={greenToteImg} alt="Tote Bag" className="w-12 h-12 object-contain" />
              </div>
              <div>
                <p className="font-display font-black text-sm text-gray-900 leading-tight">Green Checkered</p>
                <p className="text-xs text-amber-600 font-bold mt-0.5">Oleh Bimo (12 Tahun)</p>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-300 rounded-full flex items-center justify-center text-gray-900 font-bold text-xs">
                Rp
              </div>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed font-medium">
              Sebuah tas kanvas premium dengan pola goresan tulus anak-anak luar biasa.
            </p>

            <button 
              onClick={onStartShopping}
              className="w-full mt-2.5 py-2 bg-[#0ea5e9] hover:bg-sky-600 text-white font-extrabold text-xs rounded-full cursor-pointer transition-colors"
            >
              Detail Produk
            </button>
          </div>

          {/* Card 2: Bottom-Left Artist Showcase with Portrait matching "+35% Productivity" */}
          <div className="col-span-5 bg-white p-4 rounded-[2.5rem] border border-sky-100 shadow-xl flex flex-col justify-between h-72 w-full relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full">Kreativitas</span>
              <div className="w-6 h-6 bg-amber-300 rounded-full flex items-center justify-center text-gray-900">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              </div>
            </div>

            <div className="my-auto text-left pl-1">
              <span className="text-3xl font-black text-gray-900">+100%</span>
              <p className="text-[10px] text-gray-400 font-extrabold uppercase tracking-wider mt-0.5">Inspirasi Harian</p>
            </div>

            {/* Profile image with black bar footer */}
            <div className="relative rounded-3xl overflow-hidden h-32 border border-gray-150">
              <img 
                src={artistBoyImg} 
                alt="Artist Bimo" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 inset-x-2 bg-gray-950/90 text-white py-1.5 px-3 rounded-full text-center text-[10px] font-bold backdrop-blur-xs">
                🎨 Bimo, Autisme
              </div>
            </div>
          </div>

          {/* Card 3: Bottom Right "My Tasks for Today" list representation */}
          <div className="col-span-12 bg-white/90 backdrop-blur-md p-5 rounded-[2.5rem] border border-sky-100 shadow-xl flex flex-col justify-between w-full">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2.5 mb-2.5">
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-wider">Seniman Kami Hari Ini</span>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {/* Item 1 */}
              <div className="flex items-center justify-between p-2 rounded-2xl hover:bg-sky-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-pink-100 rounded-xl border border-pink-200 flex items-center justify-center text-lg">
                    🌸
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900">Ayu (Down Syndrome)</p>
                    <p className="text-[10px] text-gray-400">Sedang mendesain Socks Knit Pinky</p>
                  </div>
                </div>
                <span className="text-[10px] text-gray-500 bg-gray-100 px-2 py-1 rounded-md font-bold">14:00</span>
              </div>

              {/* Item 2 */}
              <div className="flex items-center justify-between p-2 rounded-2xl hover:bg-sky-50/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-blue-100 rounded-xl border border-blue-200 flex items-center justify-center text-lg">
                    🐬
                  </div>
                  <div>
                    <p className="text-xs font-black text-gray-900">Candra (Tunarungu)</p>
                    <p className="text-[10px] text-gray-400">Melukis awan biru untuk aksesoris</p>
                  </div>
                </div>
                <button 
                  onClick={onStartShopping}
                  className="text-[10px] bg-[#0ea5e9] text-white px-3 py-1 rounded-md font-bold cursor-pointer hover:bg-sky-600 transition-colors"
                >
                  Lihat
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Rolling Hills Scenic landscape vector at the bottom mimicking reference image's footer landscape */}
      <div className="relative w-full h-32 md:h-40 overflow-hidden shrink-0 pointer-events-none mt-auto">
        <svg 
          viewBox="0 0 1440 240" 
          className="absolute bottom-0 w-full h-full scale-105 translate-y-4" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Back layer hill */}
          <path 
            d="M0 140C120 120 280 180 440 160C600 140 720 80 880 110C1040 140 1200 200 1440 180V240H0V140Z" 
            fill="#84cc16" 
            className="opacity-70"
          />
          {/* Mid layer hill */}
          <path 
            d="M0 180C160 160 320 220 480 200C640 180 800 120 960 140C1120 160 1280 220 1440 190V240H0V180Z" 
            fill="#65a30d" 
            className="opacity-90"
          />
          {/* Front layer hill with subtle landscape gradient */}
          <path 
            d="M0 210C200 190 400 230 600 210C800 190 1000 170 1200 190C1300 200 1380 215 1440 210V240H0V210Z" 
            fill="#4d7c0f" 
          />
        </svg>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/90 text-[10px] font-bold font-display tracking-widest uppercase">
          Eclusion • 100% Original Child Art
        </div>
      </div>

    </div>
  );
}
