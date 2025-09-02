import { useState, useEffect } from "react";

/**
 * Gradually reveals `text` one character at a time.
 * Resets whenever `text` changes.
 */
export function useTypewriter(text, speed = 100) {
  const [pos, setPos] = useState(0);

  // Reset on text change
  useEffect(() => {
    setPos(0);
  }, [text]);

  // Typewriter effect
  useEffect(() => {
    if (pos < text.length) {
      const timeout = setTimeout(() => {
        setPos((p) => p + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [pos, text, speed]);

  return text.slice(0, pos);
}
