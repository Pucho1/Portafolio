import { AnimatePresence, motion } from 'framer-motion';
import Hero from '../components/heroSection/Hero';

const Home = ({showIntro}: {showIntro: boolean}) => {

  return (
    <AnimatePresence>
      {!showIntro && (
        <motion.div
          className="absolute inset-0 bg-white text-black flex items-center justify-center z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="h-screen w-screen">
            {/* MEAN SECCTIONS */}
            
            <Hero />
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
