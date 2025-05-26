import { Routes, useLocation, Route } from 'react-router';

import gsap from 'gsap';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import "./App.css";
import Layout from "./layout/Layout";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

export default function App() {

   const location = useLocation();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [location]);

  return ( 
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Routes>
          <Route>
            <Route path="/" element={<Layout />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};
