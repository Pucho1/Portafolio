import { AnimatePresence, motion } from 'framer-motion';

import FloatBtn from '../../components/btns/floatBtn/FloatBtn';
import Hero from './heroSection/Hero';
import Works from './workSection/Works';

const Home = ({showIntro}: {showIntro: boolean}) => {

  return (
    // animo todo el contenedor de la pagina para que se vea el efecto de entrada de todo el home
    // sino lo pongo dentro de los div lo puedo condiconar pero no se veria la entrada animada, puedo poner solo la primera seccion
    // pero no se veria la animacion de entrada de todo el home
    <AnimatePresence>
      {!showIntro && (
        <motion.div
          className="absolute inset-0 bg-white text-black flex items-center justify-center z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="h-screen w-screen">
            {/* MEAN SECCTIONS */}
            <FloatBtn />
            
            <Hero />

            <Works />
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
