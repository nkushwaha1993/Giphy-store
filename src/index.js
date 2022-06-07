import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./context/theme-context";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
