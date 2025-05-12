import React, { useState, useEffect } from 'react';
import './typeWriter.css';
import type { TypeWriterProps } from '../../interfaces/typeWriterInterface';


const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = '',
  cursorClassName = '',
  infinite = true,
}) => {
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

  return (
    <div className={`typewriter-container ${className}`}>
      <span className="typewriter-text" aria-live="polite">
        {displayText}
        <span className={`typewriter-cursor ${cursorClassName}`}>|</span>
      </span>
    </div>
  );
};

export default TypeWriter;
