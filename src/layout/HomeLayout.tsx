import { useState } from "react";

import IntroAnimation from "../components/introAnimation/IntroAnimation";
import Home from "../pages/home/Home";

import SectionLayout from "../pages/home/sectionLayout/SectionLayout";

const HomeLayout = ({isVisited} : { isVisited: boolean}) => {

  const [isIntroFinished, setIsIntroFinished] = useState(false);

  const handleisIntroFinished = () => {
    setIsIntroFinished(true);
  };
 
  return (
    <main className="flex bg-black font-(family-name:--san-serif) text-white">
     
     { !isVisited ? 
      <>
        { !isIntroFinished ? 
            <IntroAnimation  handleisIntroFinished={ handleisIntroFinished }/>
          :
            <Home />
        }
      </>
     : 
      <SectionLayout />
    }
    </main>
  );
};

export default HomeLayout;
