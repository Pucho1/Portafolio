import { Routes, useLocation, Route, Navigate } from 'react-router';
import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import "./App.css";
import HomeLayout from "./layout/HomeLayout";
import AboutMe from './pages/aboutMe/AboutMe';

gsap.registerPlugin(ScrollSmoother, useGSAP, ScrollTrigger);

export default function App() {

  const location         = useLocation();
  const visitedRoutesRef = useRef(new Set()); // Track visited routes /* Set()--> help me to not repeat the same route
  const isVisited        = useRef(false); // Track if the current route has been visited

  useEffect(() => {
    visitedRoutesRef.current.add(location.pathname);
    isVisited.current = hasVisited(); // Check if the current route has been visited
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[location]);

  const hasVisited= () => visitedRoutesRef.current.has(location.pathname);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1, // how long it takes to smooth the scroll
      effects: true, // enable effects like pinning and parallax
    });

    return () => {
      ScrollSmoother.get()?.kill(); // Cleanup on unmount
    };
  }, [location]); // Recreate the ScrollSmoother on location change

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Routes>
          <Route>
            <Route
              path="/"
              element={ <HomeLayout  isVisited={isVisited.current}/> }
            />
            <Route
              path="/about"
              element={ <AboutMe /> }
            />
            <Route path='*' element ={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
