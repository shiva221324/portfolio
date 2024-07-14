import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";
import LoadingBar from "react-top-loading-bar";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { BrowserRouter } from "react-router-dom";
import { strict } from "assert";
const Main = React.memo(() => {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    console.log(isDarkMode);
  };
  useEffect(() => {
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      html, body {
        background-color: ${isDarkMode ? "" : "#fff"};
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [isDarkMode]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 10;
        if (nextProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoaded(true);
          }, 500); // Small delay to ensure loading bar completes visually
          return 100;
        }
        return nextProgress;
      });
    }, 80); // Adjust this interval for slower/faster loading bar

    return () => clearInterval(interval);
  }, []);

  const handleLoaderFinished = useCallback(() => setProgress(0), []);

  return (
    <div className=" scroll-smooth">
      <LoadingBar
        color="#42fcfc"
        progress={progress}
        onLoaderFinished={handleLoaderFinished}
      />
      {isLoaded ? <App setisDark={toggleDarkMode} isDark={isDarkMode} /> : null}
    </div>
  );
});

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found in document!");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
      <SpeedInsights />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
