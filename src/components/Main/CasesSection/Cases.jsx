import React from 'react';
import CasesItem from "./CasesItem";
import CasesFeedBack from "./CasesFeedBack";

const Cases = () => {
    return (
        <section
            className="relative max-h-screen overflow-y-auto" // Обмежує висоту секції і додає скрол
            style={{
                maxHeight: "calc(100vh - 4rem)", // Наприклад, мінус відступи чи хедер
                padding: "1rem", // Внутрішні відступи для гарного вигляду
            }}
        >
            <div className="container pb-6 pt-6">
                <div className="text-center font-black text-2xl sm:text-xl">
                    <h1 className="mb-6">
                        Our breakthrough in the world of investment
                    </h1>
                    <CasesItem/>
                    <CasesFeedBack/>
                </div>
            </div>
        </section>
    );
};

export default Cases;