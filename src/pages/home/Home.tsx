import { AnimatePresence, motion } from 'framer-motion';
import SectionLayout from '../../components/sectionLayout/sectionLayout';

const Home = () => {

  return (
    // animo todo el contenedor de la pagina para que se vea el efecto de entrada de todo el home
    // sino lo pongo dentro de los div lo puedo condiconar pero no se veria la entrada animada, puedo poner solo la primera seccion
    // pero no se veria la animacion de entrada de todo el home
    <AnimatePresence>
        <motion.div
          className="bg-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
         >
          <SectionLayout />
        </motion.div>
    </AnimatePresence>
  );
};

export default Home;
