import { Routes, Route, Navigate } from "react-router";


import HomeLayout from "./layout/HomeLayout";
import AboutMe from "./pages/aboutMe/AboutMe";
import { Projects } from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import PageClientNTF from "./pages/errors/PageClientNTF";

import "./App.css";
import PagesLayout from "./layout/pagesLayout/PagesLayout";
import { AnimatePresence, motion } from "framer-motion";
import useApp from "./useApp";


export default function App() {
 
  const { location,  pageContentVariants, isVisited } = useApp();

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <AnimatePresence  mode="wait">
          <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={<HomeLayout isVisited={isVisited.current} />}
              />
              
              <Route 
                path="/about" 
                element={
                  <PagesLayout pageName={location.pathname}>
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
                  <PagesLayout pageName={location.pathname}>
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
                  <PagesLayout pageName={location.pathname}>
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
