import React from "react";
import { createRoot } from "react-dom/client";
import { PortfolioPage } from "./PortfolioPage"

const container = document.getElementById("site-container");
const root = createRoot(container);
root.render(<PortfolioPage />);
