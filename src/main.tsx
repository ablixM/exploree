import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";

import { RouterProvider } from "react-router-dom";
import router from "./routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.ts";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
