import React, { useState } from 'react';
import Button from "../../UI/Button";
import ConsultOffline from "./ConsultOffline";
import ConsultOnline from "./ConsultOnline";

const Consult = ({ setIsModalOpen }) => {
    const [selectedFormat, setSelectedFormat] = useState(null); // Стан для вибору формату

    const handleClose = () => {
        setSelectedFormat(null); // Скинути вибраний формат
    };

    const getHeading = () => {
        if (selectedFormat === "offline") {
            return "Offline Consultation";
        }
        if (selectedFormat === "online") {
            return "Online Consultation";
        }
        return "Choose the desired consultation format:";
    };

    return (
        <section
            className="relative scrollbar-none max-h-screen overflow-y-auto"
            style={{
                maxHeight: "calc(100vh - 5rem)", // Наприклад, мінус відступи чи хедер
            }}
        >
            <div className="container pb-6 pt-6">
                <h1 className="text-center font-bold text-2xl">
                    {getHeading()}
                </h1>

                {/* Кнопки вибору формату, якщо жоден формат не обраний */}
                {!selectedFormat && (
                    <div className="flex flex-col items-center space-y-4 mt-6">
                        <Button
                            onClick={() => setSelectedFormat("offline")}
                            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-200"
                        >
                            Offline Consultation
                        </Button>
                        <Button
                            onClick={() => setSelectedFormat("online")}
                            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition duration-200"
                        >
                            Online Consultation
                        </Button>
                    </div>
                )}

                {/* Відображення вибраного формату консультації */}
                {selectedFormat && (
                    <div className="relative bg-white">
                        {/* Кнопка для закриття */}
                        <Button
                            onClick={handleClose}
                            className="z-50 absolute top-2 right-2 w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300"
                        >
                            ✕
                        </Button>

                        {/* Вибраний формат консультації */}
                        {selectedFormat === "offline" && <ConsultOffline />}
                        {selectedFormat === "online" && <ConsultOnline />}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Consult;