import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, HelpCircle, Heart, Grid, Search } from 'lucide-react';
import { PRODUCTS } from './data/products';
import { Product } from './types';
import LandingPage from './components/LandingPage';
import Sidebar from './components/Sidebar';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';
import CloudBackground from './components/CloudBackground';

export default function App() {
  const [view, setView] = useState<'landing' | 'store'>('landing');
  const [activeTab, setActiveTab] = useState<string>('Home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrollTarget, setScrollTarget] = useState<string | null>(null);

  // Handle Tab changes from Sidebar
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Reset product selection when category changes
    setSelectedProduct(null);
  };

  // Filter products by search query and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category Filter
      const matchCategory =
        activeTab === 'Home' || product.category === activeTab;
      
      // 2. Search query filter
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <div className="relative min-h-screen bg-sky-light text-gray-800 flex flex-col font-sans select-none overflow-x-hidden">
      <AnimatePresence mode="wait">
        {view === 'landing' ? (
          <motion.div
            key="landing-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <LandingPage onStartShopping={(initialTab, target) => {
              setView('store');
              if (initialTab) {
                setActiveTab(initialTab);
              }
              if (target) {
                setScrollTarget(target);
              }
              setSelectedProduct(null);
            }} />
          </motion.div>
        ) : (
          <motion.div
            key="store-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row w-full lg:h-screen lg:overflow-hidden"
          >
            {/* Sidebar Left Panel (Yellow, Playful) */}
            <Sidebar
              activeTab={activeTab}
              onTabChange={handleTabChange}
              onBackToLanding={() => setView('landing')}
            />

            {/* Main Content Area Right Panel (Sky Blue, Whimsical) */}
            <div className="flex-grow p-4 sm:p-6 lg:p-10 relative flex flex-col lg:h-screen z-10 overflow-y-auto">
              {/* Cute Floating Clouds in Store View */}
              <CloudBackground />

              {/* Dynamic Views inside Right Panel */}
              <AnimatePresence mode="wait">
                {selectedProduct ? (
                  /* Detail Page View (Page 2) */
                  <motion.div
                    key="detail-view"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full relative z-10"
                  >
                    <ProductDetail
                      product={selectedProduct}
                      onBack={() => setSelectedProduct(null)}
                    />
                  </motion.div>
                ) : activeTab === 'About Us' ? (
                  /* About Us Page View (Page 3 & 4) */
                  <motion.div
                    key="about-view"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="w-full relative z-10"
                  >
                    <AboutUsPage 
                      onBack={() => handleTabChange('Home')} 
                      scrollTarget={scrollTarget}
                      onClearScrollTarget={() => setScrollTarget(null)}
                    />
                  </motion.div>
                ) : activeTab === 'Contact Us' ? (
                  /* Contact Us Page View (Page 5) */
                  <motion.div
                    key="contact-view"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="w-full relative z-10"
                  >
                    <ContactUsPage onBack={() => handleTabChange('Home')} />
                  </motion.div>
                ) : (
                  /* Standard Category Product Grid (Page 1) */
                  <motion.div
                    key="grid-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col flex-grow relative z-10"
                  >
                    {/* Header Controls */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
                      <div>
                        <h1 className="font-display text-4xl sm:text-5xl font-black text-gray-900 tracking-tight flex items-center gap-2">
                          <Grid className="w-8 h-8 text-sky-800" />
                          {activeTab === 'Home' ? 'Semua Karya' : activeTab}
                        </h1>
                        <p className="text-gray-600 text-sm mt-1 flex items-center gap-1.5">
                          <span>Menampilkan {filteredProducts.length} produk pilihan desain istimewa</span>
                          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                        </p>
                      </div>

                      {/* Cute Search Input */}
                      <div className="relative w-full sm:w-72">
                        <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Cari desain favoritmu..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-11 pr-4 py-2.5 bg-white border-3 border-gray-900 rounded-[20px] font-medium text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-pastel shadow-sm"
                        />
                      </div>
                    </div>

                    {/* Products Grid */}
                    {filteredProducts.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
                        {filteredProducts.map((product) => (
                          <ProductCard
                            key={product.id}
                            product={product}
                            onSelect={(p) => setSelectedProduct(p)}
                          />
                        ))}
                      </div>
                    ) : (
                      /* Empty State matching whimsical design */
                      <div className="flex flex-col items-center justify-center p-12 text-center bg-white rounded-[32px] border-4 border-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] my-auto max-w-md mx-auto">
                        <span className="text-5xl animate-bounce">🎈</span>
                        <h3 className="font-display font-bold text-2xl text-gray-900 mt-4">
                          Karya Tidak Ditemukan
                        </h3>
                        <p className="text-gray-600 text-sm mt-2 max-w-xs">
                          Maaf, produk atau nama desainer dengan kata kunci "{searchQuery}" tidak dapat kami temukan di kategori {activeTab}.
                        </p>
                        <button
                          onClick={() => {
                            setSearchQuery('');
                            setActiveTab('Home');
                          }}
                          className="mt-6 px-5 py-2.5 bg-yellow-pastel text-gray-900 font-display font-bold rounded-xl border-2 border-gray-900 hover:bg-yellow-300 transition-colors cursor-pointer"
                        >
                          Lihat Semua Produk
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
