import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MISSING_ROOT_ELEMENT_LABEL } from "./constants/constants.ts";

const queryClient = new QueryClient();

const rootNode = document.getElementById("root");

if (rootNode === null) {
  throw new Error(MISSING_ROOT_ELEMENT_LABEL);
}

ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
