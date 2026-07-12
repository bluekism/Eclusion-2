import { motion } from 'motion/react';
import { Product } from '../types';
import { ARTISTS } from '../data/products';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  // Find the artist corresponding to the product
  const artist = ARTISTS.find((a) => a.id === product.artistId);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      onClick={() => onSelect(product)}
      className="bg-white rounded-[32px] p-5 border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] hover:shadow-[12px_12px_0px_0px_rgba(17,24,39,1)] hover:-translate-y-1 transition-all cursor-pointer flex flex-col justify-between h-full select-none"
    >
      {/* Product Image Frame */}
      <div className="bg-sky-light rounded-[24px] overflow-hidden aspect-square flex items-center justify-center border-3 border-gray-900 relative group p-3">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-contain rounded-[18px] group-hover:scale-110 transition-transform duration-300"
        />
        {/* Floating Artist Tag */}
        {artist && (
          <div className="absolute bottom-2.5 left-2.5 bg-yellow-pastel text-gray-900 font-display font-black text-xs px-3 py-1 rounded-full border-2 border-gray-900 shadow-sm flex items-center gap-1">
            <span>{artist.avatar}</span>
            <span>By {artist.name}</span>
          </div>
        )}
      </div>

      {/* Info & Price */}
      <div className="mt-4 flex flex-col gap-1.5 flex-grow">
        <span className="text-xs font-bold text-sky-700 tracking-wider uppercase font-mono">
          {product.category}
        </span>
        <h3 className="font-display font-bold text-xl text-gray-900 line-clamp-1">
          {product.name}
        </h3>
        
        <div className="mt-auto pt-3 flex items-center justify-between border-t-2 border-dashed border-gray-100">
          <span className="font-display font-extrabold text-lg text-gray-900">
            Rp. {product.price.toLocaleString('id-ID')}
          </span>
          <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
            Detail 🔎
          </span>
        </div>
      </div>
    </motion.div>
  );
}
