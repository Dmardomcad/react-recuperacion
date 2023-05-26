import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrollDistance = document.documentElement.scrollTop;
    if (scrollDistance > 300) {
      setVisible(true);
    } else if (scrollDistance <= 300) {
      setVisible(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto", //smooth bugs sometimes for some reason
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <button
        className="btn-scroll"
        onClick={scrollTop}
        style={{
          display: visible ? "inline" : "none",
          position: "fixed",
          bottom: "20px",
          right: "20px",
        }}
      >
        GO TO THE TOP
      </button>
    </>
  );
};

export default ScrollButton;
