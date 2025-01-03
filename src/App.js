import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Імпортуємо BrowserRouter
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {

    const [activeSection, setActiveSection] = useState('more');

  return (
    <>
        <Router> {/* Обгортаємо весь додаток в Router */}
            <Header setActiveSection={setActiveSection} />
            <Main activeSection={activeSection} />
        </Router>
    </>
  );
}

export default App;
