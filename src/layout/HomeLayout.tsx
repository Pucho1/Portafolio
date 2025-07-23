import { useState } from "react";

import IntroAnimation from "../components/introAnimation/IntroAnimation";
import Home from "../pages/home/Home";
// import { AnimatePresence } from "framer-motion";


const HomeLayout = () => {

  const [isIntroFinished, setIsIntroFinished] = useState(false);

  const handleisIntroFinished = () => {
    setIsIntroFinished(true);
  };
 
  return (
    <main className="flex bg-black font-(family-name:--san-serif) text-white">
      <>
        { !isIntroFinished ? 
            <IntroAnimation  handleisIntroFinished={ handleisIntroFinished }/>
          :
            <Home />
        }
      </>
    </main>
  );
};

export default HomeLayout;
