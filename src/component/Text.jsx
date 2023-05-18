import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypingAnimation = ({ text }) => {
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCurrentText((prevText) => prevText + text.charAt(i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {currentText}
    </motion.span>
  );
};

const TextReplacer = ({ texts, interval }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearTimeout(timeout);
  }, [currentTextIndex, interval, texts]);

  return <TypingAnimation text={texts[currentTextIndex]} />;
};

export default TextReplacer;
