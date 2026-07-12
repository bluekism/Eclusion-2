import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Users, Heart, Sparkles, Smile } from 'lucide-react';
import { FOUNDERS, ARTISTS } from '../data/products';

interface AboutUsPageProps {
  onBack: () => void;
  scrollTarget?: string | null;
  onClearScrollTarget?: () => void;
}

export default function AboutUsPage({ onBack, scrollTarget, onClearScrollTarget }: AboutUsPageProps) {
  const collaboratorsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollTarget === 'collaborators' && collaboratorsRef.current) {
      const timer = setTimeout(() => {
        collaboratorsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        onClearScrollTarget?.();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [scrollTarget, onClearScrollTarget]);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-10 z-10 select-none">
      
      {/* Back Button matching mockup */}
      <div className="mb-8 flex">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="px-6 py-2.5 bg-accent-green hover:bg-lime-700 text-white font-display font-bold text-lg rounded-full border-3 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] cursor-pointer flex items-center gap-2 active:shadow-none active:translate-y-1 active:translate-x-1"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </motion.button>
      </div>

      {/* Header Title */}
      <div className="text-center mb-12">
        <h1 className="font-display text-5xl sm:text-6xl font-black text-gray-900">
          About Us
        </h1>
        <p className="font-display text-xl text-gray-700 mt-2">
          Eclusion • Empowering Creavity through Inclusion
        </p>
        <div className="w-24 h-2.5 bg-yellow-pastel mx-auto rounded-full mt-4 border-2 border-gray-900 shadow-sm"></div>
      </div>

      {/* Grid of About Us Story & Decorative Scenic Landscapes (Page 4 references) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
        {/* Left Side: Text Story */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-[32px] border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]">
            <h3 className="font-display text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-pulse" />
              Misi & Cerita Kami
            </h3>
            <p className="text-gray-700 text-base leading-relaxed mt-4">
              <strong>Eclusion</strong> lahir dari sebuah keyakinan mendalam bahwa setiap anak, terlepas dari keterbatasan fisik maupun kognitifnya, memiliki potensi kreativitas yang tak ternilai harganya.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-3">
              Kami bekerja sama erat dengan sekolah luar biasa dan komunitas disabilitas lokal untuk menyelenggarakan workshop melukis bebas. Hasil coretan polos, jujur, dan ceria dari anak-anak disabilitas kemudian diolah menjadi merchandise bernilai guna yang fungsional dan estetis.
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-3 font-medium text-sky-800">
              Dengan membeli karya di Eclusion, Anda tidak hanya mendapatkan merchandise unik bergaya ceria khas musim panas, tetapi juga menyumbangkan senyuman dan harapan hidup mandiri bagi anak-anak desainer kami.
            </p>
          </div>
        </div>

        {/* Right Side: Decorative Scenic Landscaping Card (Page 4 style) */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          <div className="bg-sky-base p-4 rounded-[32px] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] h-52 relative overflow-hidden flex items-end">
            <div className="absolute inset-0 bg-gradient-to-t from-sky-400 to-transparent opacity-40"></div>
            {/* Scenic Hills (SVG representation for Page 4 style) */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-lime-600 to-lime-500 rounded-t-full origin-bottom scale-x-150 translate-y-6"></div>
            <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-lime-700 to-lime-600 rounded-t-full origin-bottom scale-x-125 translate-x-12 translate-y-2"></div>
            {/* Cute sun and clouds */}
            <div className="absolute top-6 left-8 text-4xl animate-bounce">☀️</div>
            <div className="absolute top-10 right-10 w-24 h-8 bg-white/80 backdrop-blur-xs rounded-full"></div>
            
            <span className="relative z-10 font-display font-black text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] ml-4 mb-2">
              Our Vision
            </span>
          </div>

          <div className="bg-yellow-pastel p-4 rounded-[32px] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] h-44 flex items-center justify-center text-center">
            <div className="flex flex-col items-center">
              <Smile className="w-10 h-10 text-amber-700 mb-2 animate-bounce" />
              <p className="font-display font-bold text-lg text-gray-900 max-w-xs">
                "Kreativitas Adalah Jembatan Menuju Keberagaman dan Kesetaraan"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Founders Section (Page 3 Mockup) */}
      <div className="mb-16">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 text-center mb-8 flex items-center justify-center gap-2">
          <Users className="w-7 h-7 text-sky-700" />
          Our Founders
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOUNDERS.map((founder) => (
            <motion.div
              key={founder.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[28px] p-6 border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-sky-light border-2 border-gray-900 rounded-full flex items-center justify-center text-4xl mb-4 shadow-sm">
                {founder.avatar}
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900">{founder.name}</h3>
              <p className="text-xs font-bold text-sky-700 uppercase tracking-wider mt-1">{founder.role}</p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed border-t border-dashed border-gray-100 pt-3">
                {founder.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Collaborators / Special Artists Section (Page 3 Mockup) */}
      <div ref={collaboratorsRef} className="scroll-mt-12">
        <h2 className="font-display text-3xl sm:text-4xl font-black text-gray-900 text-center mb-8 flex items-center justify-center gap-2">
          <Sparkles className="w-7 h-7 text-amber-500 fill-amber-500 animate-pulse" />
          Our Collaborators
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTISTS.map((artist) => (
            <motion.div
              key={artist.id}
              whileHover={{ y: -5 }}
              className="bg-white rounded-[28px] p-6 border-3 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] text-center flex flex-col items-center"
            >
              <div className="w-20 h-20 bg-yellow-100 border-2 border-gray-900 rounded-full flex items-center justify-center text-4xl mb-4 shadow-sm">
                {artist.avatar}
              </div>
              <h3 className="font-display font-bold text-xl text-gray-900">{artist.name}</h3>
              <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-1">
                {artist.specialNeeds}
              </p>
              <p className="text-xs text-gray-600 mt-3 leading-relaxed line-clamp-3 border-t border-dashed border-gray-100 pt-3">
                {artist.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
