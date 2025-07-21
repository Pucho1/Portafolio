import { Routes, Route, Navigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";

import HomeLayout from "./layout/HomeLayout";
import AboutMe from "./pages/aboutMe/AboutMe";
import { Projects } from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import PageClientNTF from "./pages/errors/PageClientNTF";

import "./App.css";
import PagesLayout from "./layout/pagesLayout/PagesLayout";
import useApp from "./useApp";
import SectionLayout from "./pages/home/sectionLayout/SectionLayout";


export default function App() {
 
  const { location,  pageContentVariants, isVisited, clearPath } = useApp();

  console.log('isvisited from aPPP ====>', isVisited)

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <AnimatePresence  mode="wait">
          <Routes location={location} key={clearPath}>
              <Route
                path="/"
                element={

                  isVisited.current ?
                    <PagesLayout pageName={clearPath}>
                      <motion.div
                        variants={pageContentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="w-full h-full" // Asegura que la div ocupe el espacio para la animación
                      >
                        <SectionLayout />
                      </motion.div>
                    </PagesLayout>
                  :
                    <HomeLayout />
                  }
              />
              
              <Route 
                path="/about"
                element={
                  <PagesLayout pageName={clearPath}>
                    <motion.div
                      variants={pageContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="w-full h-full" // Asegura que la div ocupe el espacio para la animación
                    >
                      <AboutMe />
                    </motion.div>
                  </PagesLayout>
                }
              />

              <Route
                path="/projects"
                element={
                  <PagesLayout pageName={clearPath}>
                    <motion.div
                      variants={pageContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="w-full h-full" // Asegura que la div ocupe el espacio para la animación
                    >
                      <Projects />
                    </motion.div>
                  </PagesLayout>
                } 
              />

              <Route
                path="/contact" 
                element={
                  <PagesLayout pageName={clearPath}>
                    <motion.div
                      variants={pageContentVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="w-full h-full" // Asegura que la div ocupe el espacio para la animación
                    >
                      <Contact />
                    </motion.div>
                  </PagesLayout>
                } 
              />

              <Route
                path="/error/clietnPage_Not_Found"
                element={<PageClientNTF />}
              />

              <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
