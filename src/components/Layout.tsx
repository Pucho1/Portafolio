import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Welcome", "to", "my", "portfolio", "🚀"];

const Layout = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  // Rotación de palabras cada x segundos
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 1000);

    return () => clearInterval(wordInterval);
  }, []);

  // Ocultar intro despues de que todas las palabras se hayan mostrado
  useEffect(() => {
    const totalTimeTochange = words.length * 1000;

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, totalTimeTochange);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
      <AnimatePresence mode="wait">
        {showIntro && (
          <motion.div
            className="text-5xl font-bold"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                {words[currentWordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

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
    </div>
  );
};

export default Layout;