import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  "Hello!",
  "¡Hola!",
  "Bonjour!",
  "Ciao!",
  "こんにちは!",
  "Здравствуйте!"
];

const IntroAnimation = ({showIntro, currentWordIndex }: {showIntro: boolean, currentWordIndex: number}) => {

  return (
    <AnimatePresence mode="wait">
      {showIntro && (
        <motion.div
          className="text-5xl font-bold text-center text-white  flex items-center justify-center bg-black h-screen w-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3 } }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={currentWordIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {greetings[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 

export default IntroAnimation;
