import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={"light"} />
      <RouterProvider router={router} />
    </ChakraProvider>
  </StrictMode>
);
