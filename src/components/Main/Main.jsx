import React from "react";
import {  Routes, Route, useLocation, Navigate  } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import More from './MoreSection/More';
import Contacts from './ContactsSection/Contacts';
import Consult from './ConsultSection/Consult';
import Cases from './CasesSection/Cases';

const Main = () => {
    const location = useLocation(); // Get current location

    return (
        <main>
            <AnimatePresence mode="wait">
                <motion.div
                    key={location.pathname} // Кожен маршрут повинен мати унікальний key
                    initial={{ x: "100%", opacity: 0 }} // Початковий стан анімації
                    animate={{ x: 0, opacity: 1 }}      // Кінцевий стан анімації
                    exit={{ x: "-100%", opacity: 0 }}   // Стан при виході
                    transition={{ type: "spring", stiffness: 400, damping: 42 }}
                >
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<More />} />
                        <Route path="/more" element={<More />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/consultation" element={<Consult />} />
                        <Route path="/cases" element={<Cases />} />
                        {/* Якщо шлях не існує, перенаправляємо на /more */}
                        <Route path="*" element={<Navigate to="/more" />} />
                    </Routes>
                </motion.div>
            </AnimatePresence>
        </main>
    );
};



export default Main;