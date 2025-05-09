import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./index.css";

const greetings = [
  "Hello!",
  "¡Hola!",
  "Bonjour!",
  "Ciao!",
  "こんにちは!",
  "안녕하세요!",
  "你好!",
  "Здравствуйте!"
];

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showCursor, setShowCursor] = useState(true);

  // Efecto para el cursor parpadeante
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  // Efecto principal de máquina de escribir
  useEffect(() => {
    let timer;
    const current = currentGreeting % greetings.length;
    const fullText = greetings[current];

    if (isDeleting) {
      // Modo borrado
      setDisplayText(fullText.substring(0, displayText.length - 1));
      setTypingSpeed(75);
    } else {
      // Modo escritura
      setDisplayText(fullText.substring(0, displayText.length + 1));
      setTypingSpeed(150);
    }

    if (!isDeleting && displayText === fullText) {
      // Pausa al completar la palabra
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      // Cambiar a la siguiente palabra
      setIsDeleting(false);
      setCurrentGreeting(currentGreeting + 1);
      // Pausa antes de empezar la siguiente palabra
      timer = setTimeout(() => {}, 500);
    } else {
      // Continuar escribiendo/borrando
      timer = setTimeout(() => {}, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, currentGreeting, isDeleting, typingSpeed]);

  // Temporizador para ocultar el intro
  useEffect(() => {
    const totalTime = greetings.length * 3000; // 3 segundos por saludo
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, totalTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="absolute inset-0 bg-black text-white flex items-center justify-center z-20"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <div className="text-4xl sm:text-6xl font-bold flex">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {displayText}
                {showCursor && <span className="ml-1">|</span>}
              </motion.div>
            </div>

            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-black z-30"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ 
                delay: greetings.length * 3 - 1.5, 
                duration: 1, 
                ease: "easeInOut" 
              }}
              style={{ transformOrigin: "top" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showIntro && (
          <motion.div
            className="absolute inset-0 bg-white text-black flex items-center justify-center z-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="text-xl sm:text-3xl font-semibold px-4 text-center">
              Bienvenido a mi portafolio 🚀
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}