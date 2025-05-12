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






// import React, { useState, useEffect, useCallback } from 'react';

// import './typeWriter.css';

// interface TypeWriterProps {
//   texts: string[];
//   typingSpeed?: number;
//   deletingSpeed?: number;
//   delayBetweenTexts?: number;
//   className?: string;
//   cursorClassName?: string;
//   infinite?: boolean;
// }

// const TypeWriter: React.FC<TypeWriterProps> = ({
//   texts,
//   typingSpeed = 100,
//   deletingSpeed = 50,
//   delayBetweenTexts = 1500,
//   className = '',
//   cursorClassName = '',
//   infinite = true,
// }) => {
//   const [currentTextIndex, setCurrentTextIndex] = useState(0); //indice del texto el cual mostramos
//   const [displayText, setDisplayText]           = useState('');
//   const [isTyping, setIsTyping]                 = useState(true);
//   const [isDeleting, setIsDeleting]             = useState(false);
//   const [isVisible, setIsVisible]               = useState(true);

//   const typeText = useCallback(() => {

//     // obtengo el texto actual
//     const currentFullText = texts[currentTextIndex];
    
//     if (isTyping && (displayText.length < currentFullText.length)) {
//       setDisplayText(currentFullText.substring(0, displayText.length + 1));
//       return;
//     }
    
//     if (isTyping && displayText.length === currentFullText.length) {
//       setIsTyping(false);
//       setTimeout(() => setIsDeleting(true), delayBetweenTexts);
//       return;
//     }
    
//     if (isDeleting && displayText.length > 0) {
//       setDisplayText(displayText.substring(0, displayText.length - 1));
//       return;
//     }
    
//     if (isDeleting && displayText.length === 0) {
//       setIsDeleting(false);
//       setIsVisible(false);
      
//       setTimeout(() => {
//         const nextIndex = (currentTextIndex + 1) % texts.length;
//         if (!infinite && nextIndex === 0) {
//           return;
//         }
//         setCurrentTextIndex(nextIndex);
//         setIsVisible(true);
//         setIsTyping(true);
//       }, 500);
//     }
//   }, [currentTextIndex, delayBetweenTexts, displayText, infinite, isDeleting, isTyping, texts]);

//   useEffect(() => {
//     if (texts.length === 0) return;
    
//     const typingTimer = setTimeout(() => {
//       typeText();
//     }, isTyping ? typingSpeed : isDeleting ? deletingSpeed : 0);
    
//     return () => clearTimeout(typingTimer);
//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [displayText, isDeleting, isTyping, typeText, typingSpeed, deletingSpeed]);
  
//   // Initial start
//   useEffect(() => {
//     if (texts.length === 0) return;
    
//     setDisplayText('');
//     setIsTyping(true);
//     setIsDeleting(false);
//   }, [texts]);

//   console.log('Current Text Index:', currentTextIndex);
//   console.log('Display Text:', displayText);  
//   console.log('Is Typing:', isTyping);
//   console.log('Is Deleting:', isDeleting);
//   console.log('texts:', texts);

//   if (texts.length === 0) return null;

//   return (
//     <div className={`typewriter-container ${className}`}>
//       <span 
//         className={`typewriter-text ${isVisible ? 'visible' : 'hidden'}`} 
//         aria-live="polite"
//       >
//         {displayText}
//         <span className={`typewriter-cursor ${cursorClassName}`}>|</span>
//       </span>
//     </div>
//   );
// };

// export default TypeWriter;