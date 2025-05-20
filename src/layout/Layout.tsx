import IntroAnimation from "../components/IntroAnimation";
import Home from "../pages/home/Home";
import useLayout from "./useLayout";

const Layout = () => {
 
  const { showIntro, currentWordIndex } = useLayout();

  return (
    <div className="flex bg-black">
     
      <IntroAnimation showIntro={ showIntro } currentWordIndex={ currentWordIndex } />

      <Home showIntro={ showIntro } />
     
    </div>
  );
};

export default Layout;
