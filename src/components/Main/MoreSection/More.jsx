import React from 'react';
import MoreContainers from './MoreContainers';

const More = () => {
    return (
        <section
            className="relative max-h-screen overflow-y-auto" // Обмежує висоту секції і додає скрол
            style={{
                maxHeight: "calc(100vh - 5rem)", // Наприклад, мінус відступи чи хедер
            }}
        >
            <div className="container pb-6 pt-6">
                <div className="text-center font-black xl:text-4xl md:text-2xl sm:text-xl pt-4 pb-6">
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