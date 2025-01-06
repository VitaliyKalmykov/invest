import React, { useEffect } from 'react';
import Button from "../UI/Button";

const Modal = ({ isModalOpen, setIsModalOpen }) => {

    useEffect(() => {
        if(!isModalOpen){
            console.log('Modal open');
        }
    }, [isModalOpen]);

    // Якщо модалка не відкрита, не рендеримо її
    if (!isModalOpen) return null;


    return (
        //фон модалки
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)} // Закриття модалки при натисканні поза її межами
        >
            {/*модалка*/}
            <div
                className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
                onClick={(e) => e.stopPropagation()} // Зупинка "всплиття", щоб не закривати модалку
            >

                <Button
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    onClick={() => setIsModalOpen(false)} // Закриття при натисканні на іконку
                >
                    &times; {/* Іконка закриття */}
                </Button>

            </div>

        </div>
    );
};

export default Modal;