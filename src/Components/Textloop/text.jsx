import React, { useState, useEffect } from "react";
import "./text.css";

const TextLoop = () => {
  const text1 = "Drive.com";
  const text2 = "where your dream ride come True";
  
  const [displayedText1, setDisplayedText1] = useState("");
  const [displayedText2, setDisplayedText2] = useState("");
  
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setDisplayedText1(text1.substring(0, index1 + 1));
      setIndex1((prevIndex) => (prevIndex + 1) % (text1.length + 1)); // Loop back to start
    }, 400); // Update every 300ms

    const interval2 = setInterval(() => {
      setDisplayedText2(text2.substring(0, index2 + 1));
      setIndex2((prevIndex) => (prevIndex + 1) % (text2.length + 1)); // Loop back to start
    }, 400); // Update every 300ms

    return () => {
      clearInterval(interval1); // Cleanup on component unmount
      clearInterval(interval2); // Cleanup on component unmount
    };
  }, [index1, index2, text1, text2]);

  return (
    <div className="text-loop-container">
      <span className="text-loop uppercase">{displayedText1} </span>
      <br />
      <span className="text-loop lowercase">{displayedText2}</span>
    </div>
  );
};

export default TextLoop;
