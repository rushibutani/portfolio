import React, { useEffect, useState } from "react";
import "./Loader.scss";

export const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible && progress === 100) return null;

  return (
    <div className={`loader-container ${!isVisible ? "fade-out" : ""}`}>
      <div className="loader-content">
        <div className="loader-animation">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="loader-circle"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        <div className="loader-text">
          {"HiThere!".split("").map((char, i) => (
            <span
              key={i}
              className="loader-text-char"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {char}
            </span>
          ))}
        </div>

        <div className="loader-progress">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
