import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/crescent-moon.png";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" onClick={handleClick} />
      <img src={Moon} alt="" className="t-icon" onClick={handleClick} />
      <div
        className="t-button"
        style={{ left: theme.state.darkMode ? 0 : 30 }}
      ></div>
    </div>
  );
};

export default Toggle;
