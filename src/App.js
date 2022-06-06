import React, { useContext } from "react";
import GifSearchApp from "./components/GifSearchApp";
import { ThemeContext } from "./context/theme-context";

import "./styles.css";

export default function App() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      <button
        type="button"
        onClick={toggle}
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
          outline: "none",
          margin: "1em"
        }}
      >
        Toggle to {!dark ? "Dark" : "Light"} theme
      </button>
      <GifSearchApp />
    </div>
  );
}
