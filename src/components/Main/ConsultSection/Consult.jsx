import React from 'react';
import ConsultOffline from "./ConsultOffline";

const Consult = () => {
    return (
        <section className="relative scrollbar-none max-h-screen overflow-y-auto" // Обмежує висоту секції і додає скрол
                 style={{
                     maxHeight: "calc(100vh - 5rem)", // Наприклад, мінус відступи чи хедер
                 }}>
            <div className="container pb-6 pt-6">
                <h1 className="text-center font-bold text-2xl">Become our guest today!</h1>
                <ConsultOffline/>
            </div>
        </section>
    );
};

export default Consult;