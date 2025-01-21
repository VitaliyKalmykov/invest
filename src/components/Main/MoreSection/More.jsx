import React from 'react';
import MoreContainers from './MoreContainers';

const More = () => {
    return (
        <section
            className="relative max-h-screen overflow-y-auto" // Обмежує висоту секції і додає скрол
            style={{
                maxHeight: "calc(100vh - 4rem)", // Наприклад, мінус відступи чи хедер
                padding: "1rem", // Внутрішні відступи для гарного вигляду
            }}
        >
            <div className="container pb-6 pt-6">
                <div className="text-center font-black text-4xl pt-4 pb-6">
                    <h1>
                        Invest company
                    </h1>
                </div>
                <MoreContainers/>
            </div>
        </section>
    );
};

export default More;