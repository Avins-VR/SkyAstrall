"use client";
import { useState, useEffect } from "react";

export function TextGenerateEffect({ words, speed = 30 }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(words.slice(0, i + 1)); // instead of appending
      i++;
      if (i >= words.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [words, speed]);

  return <p>{displayedText}</p>;
}
