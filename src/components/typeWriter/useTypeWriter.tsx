import { useEffect, useState } from "react";
import type { TypeWriterProps } from "../../interfaces/typeWriterInterface";

const useTypeWriter = ({ texts, typingSpeed, deletingSpeed, delayBetweenTexts, infinite} : TypeWriterProps ) => {

	const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

	useEffect(() => {

    if (texts.length === 0) return;

    const currentFullText = texts[currentTextIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentFullText.length) {

      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length + 1));
      }, typingSpeed);

    } else if (!isDeleting && displayText.length === currentFullText.length) {

      timeout = setTimeout(() => setIsDeleting(true), delayBetweenTexts);

    } else if (isDeleting && displayText.length > 0) {

      timeout = setTimeout(() => {
        setDisplayText(currentFullText.slice(0, displayText.length - 1));
      }, deletingSpeed);

    } else if (isDeleting && displayText.length === 0) {

      timeout = setTimeout(() => {
        const nextIndex = (currentTextIndex + 1) % texts.length;
        if (!infinite && nextIndex === 0) return;
        setCurrentTextIndex(nextIndex);
        setIsDeleting(false);
      }, 500);

		}

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, texts, currentTextIndex, typingSpeed, deletingSpeed, delayBetweenTexts, infinite]);


  return {
		displayText,
  };
};

export default useTypeWriter;