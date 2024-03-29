import React from "react";

const Aboutus = () => {
  const centerStyle = {
    background: "linear-gradient(135deg, #2d75ff, #a8bfff)", // Blue gradient background
    height: "100vh", // Set height to cover the entire viewport
    display: "flex", // Align content in the center
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
    textAlign: "center", // Center text
  };

  const h1Style = {
    color: "#004438", // Deep peacock blue color
    background: "linear-gradient(45deg, #004438, #028090)", // Gradient effect for text
    WebkitBackgroundClip: "text", // Clip text to apply gradient effect
    WebkitTextFillColor: "transparent", // Make text transparent
    fontWeight: "bold", // Make text bold
  };

  return (
    <div style={centerStyle}>
      <div>
        <h1 style={h1Style}>Adarsh Raveendran</h1>
        <h3> "This project is dedicated to helping people who are visually impaired" </h3>
      </div>
    </div>
  );
};

export default Aboutus;
