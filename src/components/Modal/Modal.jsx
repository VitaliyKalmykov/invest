import React, { useEffect } from 'react';
import Button from "../UI/Button";
import ModalForm from "./ModalForm";

const Modal = ({ isModalOpen, setIsModalOpen }) => {

    useEffect(() => {
        if(!isModalOpen){
            console.log('Modal open');
        }
    }, [isModalOpen]);

    if (!isModalOpen) return null; // Якщо модалка не відкрита, не рендеримо її



    return (
        //фон модалки
        <div
            className="fixed inset-0 p-4 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)} // Закриття модалки при натисканні поза її межами
        >
            {/*модалка*/}
            <div
                className="bg-white rounded-lg shadow-lg max-w-lg w-full p-2 relative"
                onClick={(e) => e.stopPropagation()} // Зупинка "всплиття", щоб не закривати модалку
            >
                {/*кнопка закриття*/}
                <Button
                    className="absolute text-2xl text-red-900 top-3 right-3 hover:text-gray-600"
                    onClick={() => setIsModalOpen(false)} // Закриття при натисканні на іконку
                >
                    &times; {/* Іконка закриття */}
                </Button>
               <div>
                   <h2 className="text-center font-bold xl:text-xl md:text-lg sm:text-lg">Start earning with us! </h2>
                   <h3 className="text-center xl:text-xl md:text-lg sm: text-lg">Request a call here</h3>
                   <ModalForm/>
               </div>
            </div>

        </div>
    );
};

export default Modal;