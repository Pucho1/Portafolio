import { useEffect, useRef, useState } from "react"

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

const useLayout = () => {

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const firstAnimate = 500; // 700ms

  const introIsShowed = useRef(false);

  // Rotación de palabras cada x segundos
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % greetings.length);
    }, firstAnimate);

    return () => clearInterval(wordInterval);
  }, []);

  // Ocultar intro despues de que todas las palabras se hayan mostrado
  useEffect(() => {
    const totalTimeTochange = greetings.length * firstAnimate;

    if (introIsShowed.current) return; // Evita que se ejecute más de una vez

    const timer = setTimeout(() => {
      setShowIntro(false);
      introIsShowed.current = true;
    }, totalTimeTochange);

    return () => clearTimeout(timer);
  }, []);

  return { 
		setShowIntro,
		showIntro,
		currentWordIndex,
		setCurrentWordIndex,
		firstAnimate,
		greetings,
    introIsShowed,
  };
};

export default useLayout;