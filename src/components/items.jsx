import { useEffect, useState } from "react";
import './items.css';

export default function Items() {
  const fullText = "Hello Rushikesh";
  const speed = 100;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <div className="heading1">
      <h1 id="typewriter">{fullText.slice(0, index)}</h1>
    </div>
  );
}


