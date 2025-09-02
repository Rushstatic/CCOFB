import React, { useState, useEffect } from "react";
import { useTypewriter } from "./useTypewriter";
import "./items.css";
import RotatingText from "./Parts/RotatingText";


export default function Items() {
  // 1. Define your rotating phrases
  const phrases = [
    "Hello Fake Buster"
  ];

  // 2. Rotation settings
  const rotationInterval = 3000; // ms before switching to next phrase
  const typingSpeed = 80;        // ms per character

  // 3. Track which phrase is active
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  // 4. Rotate phrases on an interval
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentPhraseIndex((i) => (i + 1) % phrases.length);
    }, rotationInterval);
    return () => clearInterval(id);
  }, [phrases.length, rotationInterval]);

  // 5. Run the typewriter on the active phrase
  const heading = useTypewriter(
    phrases[currentPhraseIndex],
    typingSpeed
  );

  return (
    <div className="heroText">
      <span className="badge">New
        </span>

      <div className="heading1">
        <h1 className="typewriter">{heading}</h1>
      </div>

      <p className="tagline">
        <span className="subtagline">
          Navigate the social media world with confidence by uncovering fake
          profiles and bots before you engage.
        </span>
      </p>

      <button
        className="cta"
        onClick={() => (window.location.href = "http://localhost:3000")}
      >
        Explore
      </button>
    </div>
  );
}
