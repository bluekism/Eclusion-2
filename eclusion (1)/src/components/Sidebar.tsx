import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sparkles, Heart, Home, ShoppingBag, Info, Phone, ArrowLeft } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  onBackToLanding: () => void;
}

export default function Sidebar({ activeTab, onTabChange, onBackToLanding }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: Home, type: 'category' },
    { name: 'Tote Bag', type: 'category' },
    { name: 'Key Chain', type: 'category' },
    { name: 'Hat', type: 'category' },
    { name: 'Socks', type: 'category' },
    { name: 'Others', type: 'category' },
    { name: 'About Us', icon: Info, type: 'page' },
    { name: 'Contact Us', icon: Phone, type: 'page' },
  ];

  const handleItemClick = (name: string) => {
    onTabChange(name);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Sticky Header */}
      <div className="lg:hidden w-full bg-yellow-pastel border-b-4 border-gray-900 px-4 py-3 flex items-center justify-between sticky top-0 z-40">
        <button
          onClick={onBackToLanding}
          className="flex items-center gap-1.5 text-gray-900 font-display font-bold text-lg select-none"
        >
          <ArrowLeft className="w-5 h-5 text-gray-900" />
          <span>Eclusion</span>
        </button>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white rounded-xl border-2 border-gray-900 text-gray-900 hover:bg-yellow-100 cursor-pointer"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-4/5 max-w-sm h-full bg-yellow-pastel border-r-4 border-gray-900 p-6 flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="font-display text-4xl font-bold text-gray-900 tracking-tight leading-none">
                      Eclusion
                    </h2>
                    <p className="font-display text-xs text-gray-800 mt-1">
                      Empowering Creavity through Inclusion
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 bg-white rounded-lg border-2 border-gray-900 text-gray-900"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleItemClick(item.name)}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl font-display font-bold text-lg border-2 transition-all cursor-pointer text-left ${
                        activeTab === item.name
                          ? 'bg-white text-gray-900 border-gray-900 shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] translate-x-1'
                          : 'bg-transparent text-gray-800 border-transparent hover:bg-yellow-200/50 hover:border-gray-900/30'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon && <item.icon className="w-5 h-5" />}
                        {item.name}
                      </span>
                      {activeTab === item.name && <Sparkles className="w-4 h-4 text-amber-500 animate-spin" />}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Back to Splash Button */}
              <button
                onClick={onBackToLanding}
                className="mt-auto py-3 bg-white hover:bg-red-50 text-red-600 font-display font-bold rounded-xl border-2 border-gray-900 flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                Kembali ke Beranda
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Persistent Sidebar */}
      <div className="hidden lg:flex flex-col w-80 bg-yellow-pastel border-r-4 border-gray-900 p-8 h-screen sticky top-0 overflow-y-auto select-none justify-between shrink-0">
        <div>
          {/* Logo Brand */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            onClick={onBackToLanding}
            className="cursor-pointer mb-8 group"
          >
            <h2 className="font-display text-5xl font-black text-gray-900 tracking-tight leading-none">
              Eclusion
            </h2>
            <p className="font-display text-sm text-gray-800 mt-2 leading-tight max-w-[200px] group-hover:text-amber-700 transition-colors">
              Empowering Creavity through Inclusion
            </p>
          </motion.div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2.5 mt-10">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleItemClick(item.name)}
                className={`flex items-center justify-between px-5 py-3.5 rounded-[20px] font-display font-bold text-lg border-3 transition-all cursor-pointer text-left ${
                  activeTab === item.name
                    ? 'bg-white text-gray-900 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] -translate-y-0.5 translate-x-0.5'
                    : 'bg-transparent text-gray-800 border-transparent hover:bg-yellow-200/60 hover:border-gray-900/40 hover:text-gray-900'
                }`}
              >
                <span className="flex items-center gap-3">
                  {item.icon ? (
                    <item.icon className="w-5 h-5 text-gray-700" />
                  ) : (
                    <ShoppingBag className="w-4 h-4 text-gray-500 opacity-60" />
                  )}
                  {item.name}
                </span>
                {activeTab === item.name && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
                  >
                    <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" />
                  </motion.div>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Back Button to Landing Screen */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBackToLanding}
          className="mt-12 py-3 bg-white hover:bg-red-50 text-red-600 font-display font-bold rounded-2xl border-3 border-gray-900 flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] active:shadow-none active:translate-y-1 active:translate-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          Landing Page
        </motion.button>
      </div>
    </>
  );
}
