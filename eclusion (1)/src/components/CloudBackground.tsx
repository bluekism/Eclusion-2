import { motion } from 'motion/react';

export default function CloudBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cloud 1 */}
      <motion.div
        initial={{ x: -150, y: 40 }}
        animate={{ x: '100vw' }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute opacity-30 sm:opacity-40"
      >
        <div className="w-32 h-10 bg-white rounded-full relative before:content-[''] before:absolute before:w-16 before:h-16 before:bg-white before:rounded-full before:-top-8 before:left-6 after:content-[''] after:absolute after:w-20 after:h-20 after:bg-white after:rounded-full after:-top-10 after:left-16"></div>
      </motion.div>

      {/* Cloud 2 */}
      <motion.div
        initial={{ x: '100vw', y: 120 }}
        animate={{ x: -200 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute opacity-25 sm:opacity-35"
      >
        <div className="w-48 h-12 bg-white rounded-full relative before:content-[''] before:absolute before:w-24 before:h-24 before:bg-white before:rounded-full before:-top-12 before:left-10 after:content-[''] after:absolute after:w-24 after:h-24 after:bg-white after:rounded-full after:-top-14 after:left-24"></div>
      </motion.div>

      {/* Cloud 3 */}
      <motion.div
        initial={{ x: -200, y: 220 }}
        animate={{ x: '100vw' }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
          delay: 10,
        }}
        className="absolute opacity-20 sm:opacity-30"
      >
        <div className="w-40 h-11 bg-white rounded-full relative before:content-[''] before:absolute before:w-20 before:h-20 before:bg-white before:rounded-full before:-top-10 before:left-8 after:content-[''] after:absolute after:w-20 after:h-20 after:bg-white after:rounded-full after:-top-12 after:left-20"></div>
      </motion.div>

      {/* Cloud 4 */}
      <motion.div
        initial={{ x: '100vw', y: 320 }}
        animate={{ x: -180 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
          delay: 5,
        }}
        className="absolute opacity-15 sm:opacity-25"
      >
        <div className="w-28 h-8 bg-white rounded-full relative before:content-[''] before:absolute before:w-12 before:h-12 before:bg-white before:rounded-full before:-top-6 before:left-4 after:content-[''] after:absolute after:w-14 after:h-14 after:bg-white after:rounded-full after:-top-8 after:left-12"></div>
      </motion.div>

      {/* Floating Sparkles in the sky */}
      <div className="absolute top-10 left-[15%] w-4 h-4 bg-yellow-pastel rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-28 right-[20%] w-6 h-6 bg-white rounded-full opacity-30 animate-ping duration-1000"></div>
      <div className="absolute top-48 left-[40%] w-3 h-3 bg-yellow-pastel rounded-full opacity-50 animate-bounce"></div>
      <div className="absolute top-72 right-[10%] w-4 h-4 bg-white rounded-full opacity-40 animate-pulse"></div>
    </div>
  );
}
