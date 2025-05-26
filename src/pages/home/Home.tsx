import { AnimatePresence, motion } from 'framer-motion';

import FloatBtn from '../../components/btns/floatBtn/FloatBtn';
import Hero from './heroSection/Hero';
import Description from './aboutMeHome/Description';
import Projects from './Projects';

const Home = ({showIntro}: {showIntro: boolean}) => {


  return (
    // animo todo el contenedor de la pagina para que se vea el efecto de entrada de todo el home
    // sino lo pongo dentro de los div lo puedo condiconar pero no se veria la entrada animada, puedo poner solo la primera seccion
    // pero no se veria la animacion de entrada de todo el home
    <AnimatePresence>
      {!showIntro && (
        <motion.div
          className="bg-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
         >
          <div className="">
            {/* MEAN SECCTIONS */}
            <FloatBtn />
            
            <Hero />
            <Description />
            <Projects />

            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
