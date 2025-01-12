import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Імпортуємо BrowserRouter
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";

function App() {

 const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
        <Router> {/* Обгортаємо весь додаток в Router */}
            <Header setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
            <Main/>
            <Footer/>
            <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </Router>
    </>
  );
}

export default App;
