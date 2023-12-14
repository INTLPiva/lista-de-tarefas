import React from "react";
import { Home } from "./pages/Home";
import GlobalStyle from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Home />
      <GlobalStyle />
      <ToastContainer />
    </>
  );
}

export default App;
