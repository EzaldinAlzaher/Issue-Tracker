import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home";
// import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import theme from "../Theme.js";
// import { RouterProvider } from "react-router-dom";
// import router from "./Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <RouterProvider router={router} />
    </ChakraProvider> */}
    <Home />
  </StrictMode>
);
