import { AnimatePresence, motion } from 'framer-motion';

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
          <div className="text-xl sm:text-3xl font-semibold px-4 text-center">
            Bienvenido a mi portafolio 🚀
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
