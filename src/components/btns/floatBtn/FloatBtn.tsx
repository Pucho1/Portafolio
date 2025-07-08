import { Menu } from "lucide-react";
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';


import DawnAnimatedBtn from "../dawnAnimatedBtn/DawnAnimatedBtn";
import { usePositionStore } from "../../../context/PositionContext";
import { useShowModalOpnet } from "../../../context/ShowModalOpen";

const FloatBtn = () => {
  const { navIsVisible } = usePositionStore();
  const { visibleFloatBtn }   = useShowModalOpnet();

  return (
    createPortal(

    <AnimatePresence initial={false}>
      {(!navIsVisible || visibleFloatBtn) && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key="box"
          className={`fixed z-100 top-7 right-7 p-2 md:top-5 md:right-5 md:p-3`}>
            <DawnAnimatedBtn  content = { <Menu size={20} color="white"/>}/>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
    )
  );
};

export default FloatBtn;
