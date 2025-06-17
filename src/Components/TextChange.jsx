import React, { useState, useEffect } from "react";

const TextChange = () => {
  const texts = [
    "Hi, I'm <span class='text-blue-700'>Alok Ranjan</span>",
    "I don’t just build websites — I bring visions to life with relentless dedication.",
  ];

  const [currentText, setCurrentText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    if (typingDone) return;

    const interval = setInterval(() => {
      const currentLine = texts[lineIndex];

      if (charIndex < currentLine.length) {
        setCurrentText((prev) => prev + currentLine[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        if (lineIndex < texts.length - 1) {
          setLineIndex((prev) => prev + 1);
          setCharIndex(0);
          setCurrentText((prev) => prev + "<br/>");
        } else {
          clearInterval(interval);
          setTypingDone(true);
        }
      }
    }, 40);

    return () => clearInterval(interval);
  }, [charIndex, lineIndex, typingDone, texts]);

  return (
    <div
      className="text-xl md:text-4xl font-bold text-black min-h-[12rem] leading-relaxed tracking-tight whitespace-pre-line"
      dangerouslySetInnerHTML={{ __html: currentText }}
    />
  );
};

export default TextChange;

