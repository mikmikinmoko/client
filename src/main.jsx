import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#e5f5e0",
        },
      }}
    > */} 
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    {/* </ConfigProvider> */}
  </StrictMode>
);
