import { motion } from 'motion/react';
import { ArrowLeft, ShoppingCart, Award, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { ARTISTS } from '../data/products';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

export default function ProductDetail({ product, onBack }: ProductDetailProps) {
  // Find the artist corresponding to the product
  const artist = ARTISTS.find((a) => a.id === product.artistId);

  const buyLink = 'https://www.instagram.com/eclusion.id?igsh=MW1sOGd6bXp3cW84ZA==';

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-10 z-10 select-none">
      
      {/* Back Button matching mockup */}
      <div className="mb-6 flex">
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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Image on Dark Background & Artist Info Card */}
        <div className="lg:col-span-6 flex flex-col gap-6">
          
          {/* Main Product Image Frame (Dark background matching mockup) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-800 rounded-[36px] p-6 sm:p-10 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] flex items-center justify-center relative aspect-square group"
          >
            <span className="absolute top-4 right-4 bg-yellow-pastel text-gray-900 font-display font-black text-xs px-3.5 py-1.5 rounded-full border-2 border-gray-900 shadow-sm animate-pulse">
              Summer Vibe 🌊
            </span>
            <img
              src={product.image}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          {/* Artist Bio Card matching mockup's rounded card */}
          {artist && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-[32px] p-6 border-4 border-gray-900 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] flex flex-col sm:flex-row gap-5 relative overflow-hidden"
            >
              {/* Vertical label matching screenshot page 2 */}
              <div className="hidden sm:flex flex-col items-center justify-center border-r-2 border-gray-100 pr-4 shrink-0">
                <span className="font-display font-black text-2xl text-sky-800 uppercase tracking-widest [writing-mode:vertical-lr] rotate-180">
                  Artist
                </span>
              </div>

              {/* Artist Content */}
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-3">
                  {/* Avatar Frame with summer hills color look */}
                  <div className="w-16 h-16 rounded-[22px] border-3 border-gray-900 bg-sky-light flex items-center justify-center text-4xl shadow-sm shrink-0">
                    {artist.avatar}
                  </div>
                  <div>
                    <h4 className="font-display font-black text-2xl text-gray-900">
                      {artist.name}
                    </h4>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2.5 py-0.5 rounded-full inline-block mt-0.5">
                      {artist.specialNeeds} • {artist.age} Tahun
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed italic bg-yellow-light/40 p-3 rounded-2xl border border-dashed border-yellow-200">
                  "{artist.bio}"
                </p>
              </div>
            </motion.div>
          )}

        </div>

        {/* Right Column: Title, Price, Description, Buy Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          {/* Header metadata */}
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-yellow-pastel text-gray-800 font-display font-bold text-sm rounded-full border-2 border-gray-900 shadow-sm">
              {product.category}
            </span>
            <span className="px-3.5 py-1.5 bg-sky-light text-sky-800 font-display font-bold text-sm rounded-full border-2 border-gray-900/30">
              Limited Edition ✨
            </span>
          </div>

          {/* Product Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
            {product.name}
          </h1>

          {/* Price */}
          <div className="bg-yellow-pastel px-6 py-4 rounded-[24px] border-3 border-gray-900 self-start shadow-sm flex items-center gap-2">
            <span className="text-xs font-bold text-gray-800 uppercase tracking-widest">Harga</span>
            <span className="font-display font-black text-2xl sm:text-3xl text-gray-900">
              Rp. {product.price.toLocaleString('id-ID')}
            </span>
          </div>

          {/* Divider line */}
          <div className="h-1 bg-gray-900 rounded-full"></div>

          {/* Detailed Product Description */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-xl text-gray-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-500" />
              Kisah Produk Ini
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {product.description}
            </p>
          </div>

          <div className="bg-sky-light/60 p-4 rounded-3xl border-2 border-dashed border-sky-300 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
            <p className="text-xs text-sky-800 leading-relaxed">
              <strong>Mendukung Karya Disabilitas:</strong> Setiap keuntungan dari pembelian produk ini disalurkan langsung untuk membiayai program kreativitas, pelatihan, dan perlengkapan menggambar anak-anak berkebutuhan khusus.
            </p>
          </div>

          {/* Big Green Buy Button (Buy Now!!!!) linking to Instagram */}
          <motion.a
            href={buyLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 py-4 bg-accent-green hover:bg-lime-700 text-white font-display font-extrabold text-2xl rounded-3xl border-4 border-gray-900 flex items-center justify-center gap-3 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] hover:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] transition-all text-center select-none active:shadow-none active:translate-y-2 active:translate-x-2"
          >
            <ShoppingCart className="w-6 h-6 animate-bounce" />
            Buy Now!!!!
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
}
