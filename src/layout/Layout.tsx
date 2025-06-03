import IntroAnimation from "../components/IntroAnimation";
import SectionLayout from "../components/sectionLayout/sectionLayout";
import Home from "../pages/home/Home";
import useLayout from "./useLayout";

const Layout = ({isVisited} : { isVisited: boolean}) => {
 
  const { showIntro, currentWordIndex } = useLayout();

  return (
    <main className="flex bg-black font-(family-name:--san-serif) text-white">
     
     { !isVisited ? 
      <>
        <IntroAnimation showIntro={ showIntro } currentWordIndex={ currentWordIndex } />

          <Home showIntro={ showIntro } />
      </>
     : 
      <SectionLayout />
    }
     

    </main>
  );
};

export default Layout;
