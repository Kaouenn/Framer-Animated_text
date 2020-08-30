import React from "react";
import { Frame } from "framer";
import "./styles.css";

export default function App() {
  const string = Array.from("First Line");
  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.06 } }
  };
  // Variants for animating each letter
  const letterVariants = {
    before: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200
      }
    },
    after: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 16,
        stiffness: 200
      }
    }
  };
  return (
    <div className="App">
      <Frame
        center={"y"}
        height={26}
        width={"100%"}
        background={""}
        style={{
          fontFamily: "Montserrat, Work Sans, sans-serif",
          fontWeight: "bold",
          letterSpacing: "-0.04em",
          fontSize: 60,
          color: "#FFF",
          display: "flex", // Set the display value to flex
          justifyContent: "center" // Center all children elements on the x axis
        }}
        variants={containerVariants}
        initial={"before"}
        animate={"after"}
      >
        {string.map((letter, index) => (
          <Frame
            key={index}
            width={90} // Set the width to the width of the letter
            height={56} // Set the height to the height of the text
            background={""}
            style={{ position: "relative", color: "#e91e63", fontWeight: 600 }} // Position elements
            variants={letterVariants}
          >
            {letter}
          </Frame>
        ))}
      </Frame>
    </div>
  );
}
