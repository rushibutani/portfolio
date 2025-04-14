import React, { useEffect, useState, Suspense, useRef } from "react";
import "./style.scss";
import NavBar from "../src/components/NavBar";
import ScrollToTopButton from "./CommoonComponents/ScrollToTopButton";
import { DarkLightTheme } from "./CommoonComponents/DarkLightTheme";
import { Loader } from "./CommoonComponents/Loader/Loader";
const Home = React.lazy(() => import("../src/components/Home"));
const About = React.lazy(() => import("../src/components/About/About"));
const Projects = React.lazy(() => import("../src/components/Projects"));
const Contact = React.lazy(() => import("../src/components/Contact"));

function App() {
  const [loading, setLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;

    const loadResources = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        if (isMounted.current) {
          setResourcesLoaded(true);
        }
      } catch (error) {
        console.error("Error loading resources:", error);
        if (isMounted.current) {
          setResourcesLoaded(true);
        }
      }
    };

    loadResources();

    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (resourcesLoaded) {
      const timeout = setTimeout(() => {
        if (isMounted.current) {
          setLoading(false);
        }
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [resourcesLoaded]);

  return (
    <>
      <Suspense fallback={<Loader />}>
        {loading ? (
          <Loader />
        ) : (
          <div>
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <ScrollToTopButton />
            <DarkLightTheme />
          </div>
        )}
      </Suspense>
    </>
  );
}

export default App;
