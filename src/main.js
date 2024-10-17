import React, { useState, useEffect } from "react";
import DrawerLeft from "./App";
import Dashboard from "./nav";

function Screen() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1000);
  const [navStyle, setNavStyle] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isWideScreen) {
      setNavStyle({
        transform: "translateX(0)",
        transition: "transform 0.5s ease-in-out",
      });
    } else {
      setNavStyle({
        transform: "translateX(-100%)",
        transition: "transform 0.5s ease-in-out",
      });
    }
  }, [isWideScreen]);

  return (
    <>
      {isWideScreen ? (
        <DrawerLeft sx={{ display: "block", ...navStyle }} />
      ) : (
        <Dashboard sx={{ display: "block", ...navStyle }} />
      )}
    </>
  );
}

export default Screen;