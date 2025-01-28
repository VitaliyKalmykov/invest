import React from 'react';
import Button from "../../UI/Button";
import ModalForm from "../../Modal/ModalForm";

const ConsultOnline = () => {
    return (
        <div
                className="bg-white rounded-lg shadow-lg w-full p-2 relative"
                onClick={(e) => e.stopPropagation()} // Зупинка "всплиття", щоб не закривати модалку
            >
                <div>
                    <h2 className="text-center font-bold xl:text-xl md:text-lg sm:text-lg">Start earning with us! </h2>
                    <h3 className="text-center xl:text-xl md:text-lg sm: text-lg">Request a call here</h3>
                    <ModalForm/>
                </div>
            </div>
    );
};

export default ConsultOnline;