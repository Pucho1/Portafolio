import { useEffect, useState } from "react";

import { AnimatePresence, motion } from 'framer-motion';

const ImgChanging = ({imgUrls, changeTimer = 1, className=''}: {imgUrls?: string[], changeTimer?: number, className?:string}) => {

  const [currentImg, setCurrentImg] = useState(0);

  /*
    Tome el índice de la imagen que se está mostrando actualmente (prevIndex). Le sume uno para ir a la siguiente imagen.
    Use el operador módulo para asegurar que, si llega al final del array de imágenes,
    vuelva al índice 0 y así el carrusel se repita infinitamente.
  */ 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg( ( prevIndex ) =>  ( prevIndex + 1 ) % imgUrls!.length)
    }, 1000 * changeTimer);

    return () => clearInterval(interval);
  }, [imgUrls, changeTimer])


  const imageVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
      <AnimatePresence mode="wait">
       <motion.img
          key={currentImg}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1 }}
          className={`${className}`}
          src={imgUrls![currentImg]}
        />
      </AnimatePresence>
  );
};

export default ImgChanging;
