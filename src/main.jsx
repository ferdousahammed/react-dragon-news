import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./components/AuthProvider/AuthProvider";
import router from "./routes/Routes";
import NewsProvider from "./components/NewsProvider/NewsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <NewsProvider>
        <RouterProvider router={router} />
      </NewsProvider>
    </AuthProvider>
  </React.StrictMode>
);
