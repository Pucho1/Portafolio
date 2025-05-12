import './typeWriter.css';
import type { TypeWriterProps } from '../../interfaces/typeWriterInterface';
import useTypeWriter from './useTypeWriter';


const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = '',
  cursorClassName = '',
  infinite = true,
}) => {
  const { displayText } = useTypeWriter({ texts, typingSpeed, deletingSpeed, delayBetweenTexts, infinite });

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
