import { Menu } from "lucide-react";
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';


import FloatedBtn from "../FloatedBtn/FloatedBtn";
import { usePositionStore } from "../../../context/PositionContext";
import { useFloatBtnStore } from "../../../context/FloatBtnContext";

const FloatBtnWraper = () => {
  const { navIsVisible }    = usePositionStore();
  const { visibleFloatBtn } = useFloatBtnStore();

  return (
    createPortal(

    <AnimatePresence initial={false}>
      {(!navIsVisible || visibleFloatBtn) && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key="box"
          className={`fixed z-100 top-2 right-2 p-2 md:p-3`}>
            <FloatedBtn  content = { <Menu size={20} color="white"/>}/>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
    )
  );
};

export default FloatBtnWraper;
