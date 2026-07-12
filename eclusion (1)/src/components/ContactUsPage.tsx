import { motion } from 'motion/react';
import { ArrowLeft, Instagram, Globe, PhoneCall, Send, HelpCircle } from 'lucide-react';

interface ContactUsPageProps {
  onBack: () => void;
}

export default function ContactUsPage({ onBack }: ContactUsPageProps) {
  const instagramUrl = 'https://www.instagram.com/eclusion.id?igsh=MW1sOGd6bXp3cW84ZA==';
  // Standard wa.me link for Whatsapp
  const whatsappUrl = 'https://wa.me/628123456789?text=Halo%20Eclusion%21%20Saya%20tertarik%20dengan%20produk%20karya%20anak-anak%20disabilitas.';

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 md:py-10 z-10 select-none flex flex-col min-h-[80vh]">
      
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

      <div className="my-auto flex flex-col items-center justify-center">
        
        {/* Contact grid matching mockup circular representations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full max-w-4xl justify-center items-center mb-16">
          
          {/* Instagram */}
          <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-32 h-32 rounded-full border-4 border-gray-900 bg-white shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(17,24,39,1)] transition-all flex items-center justify-center text-rose-500 hover:text-rose-600">
              <Instagram className="w-16 h-16" />
            </div>
            <span className="font-display font-black text-2xl text-gray-900 group-hover:text-rose-600 transition-colors">
              Instagram
            </span>
          </motion.a>

          {/* Website */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-32 h-32 rounded-full border-4 border-gray-900 bg-white shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(17,24,39,1)] transition-all flex items-center justify-center text-sky-500 hover:text-sky-600">
              <Globe className="w-16 h-16" />
            </div>
            <span className="font-display font-black text-2xl text-gray-900 group-hover:text-sky-600 transition-colors">
              Website
            </span>
          </motion.a>

          {/* Whatsapp */}
          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-32 h-32 rounded-full border-4 border-gray-900 bg-white shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(17,24,39,1)] transition-all flex items-center justify-center text-emerald-500 hover:text-emerald-600">
              <PhoneCall className="w-16 h-16" />
            </div>
            <span className="font-display font-black text-2xl text-gray-900 group-hover:text-emerald-600 transition-colors">
              Whatsapp
            </span>
          </motion.a>

        </div>

        {/* Contact Us Sub-Header */}
        <div className="text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-black text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 text-sm max-w-sm mx-auto mt-2 leading-relaxed">
            Punya pertanyaan mengenai produk atau ingin mendukung program kolaborasi kami? Silakan hubungi kami kapan saja!
          </p>
        </div>

      </div>

      {/* Decorative Summer footer message */}
      <div className="mt-auto pt-8 border-t border-dashed border-gray-300 text-center text-xs font-bold text-sky-800">
        🌞 Let's make inclusion the new normal, one colorful design at a time 🌴
      </div>

    </div>
  );
}
