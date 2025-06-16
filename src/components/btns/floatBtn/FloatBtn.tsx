import { Menu } from "lucide-react";

import DawnAnimatedBtn from "../dawnAnimatedBtn/DawnAnimatedBtn";
import { usePositionStore } from "../../../context/PositionContext";
import { AnimatePresence, motion } from 'framer-motion';

const FloatBtn = () => {
const { navIsVisible } = usePositionStore();

  return (
    <AnimatePresence initial={false}>
      {!navIsVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          key="box"
          className={`fixed z-50 top-15 right-10 p-2 md:top-20 md:right-15 md:p-3`}>
            <DawnAnimatedBtn  content = { <Menu size={24} />}/>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatBtn;
