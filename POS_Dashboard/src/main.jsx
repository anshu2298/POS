import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TablesProvider } from "./context/TablesContext.jsx";

createRoot(document.getElementById("root")).render(
  <TablesProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </TablesProvider>
);
