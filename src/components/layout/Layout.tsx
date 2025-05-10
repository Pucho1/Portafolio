import Home from "../../pages/Home";
import IntroAnimation from "../IntroAnimation";
import useLayout from "./useLayout";

const Layout = () => {
 
  const { showIntro, currentWordIndex } = useLayout();

  return (
    <div className="h-screen w-screen bg-black text-white flex items-center justify-center">
     
      <IntroAnimation showIntro= { showIntro } currentWordIndex={ currentWordIndex } />

      <Home showIntro={ showIntro } />
     
    </div>
  );
};

export default Layout;