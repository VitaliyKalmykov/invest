import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Імпортуємо BrowserRouter
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {



  return (
    <>
        <Router> {/* Обгортаємо весь додаток в Router */}
            <Header />
            <Main/>
        </Router>
    </>
  );
}

export default App;
