import React from 'react';
import sprite from '../../../assets/symbol-defs.svg';

const Contacts = () => {
    return (
        <section
            className="scrollbar-none max-h-screen overflow-y-auto"
            style={{
                maxHeight: "calc(100vh - 5rem)", // Наприклад, мінус відступи чи хедер
            }}
        >
            <div className="container pb-6 pt-6">
                <h1 className="text-center font-bold text-2xl text-primary">Contact us!</h1>
                <div className="flex flex-col items-center justify-center gap-6 mt-6 h-[60vh]">
                    {/* Skype/Telegram Icon */}
                    <div className="flex flex-row items-center gap-12 pb-7">
                        <svg className="xl:w-38 xl:h-38 sm:w-32 sm:h-32 fill-blue-500 hover:fill-blue-700 hover:scale-110 transition duration-300 ease-in-out">
                            <use xlinkHref={`${sprite}#icon-skype`} />
                        </svg>
                        <svg className="xl:w-38 xl:h-38 sm:w-32 sm:h-32 fill-blue-400 hover:fill-blue-600 hover:scale-110 transition duration-300 ease-in-out">
                            <use xlinkHref={`${sprite}#icon-telegram`} />
                        </svg>
                    </div>

                    {/* Mail/Phone Icon */}
                    <div className="flex flex-row items-center gap-12">
                        <svg className="xl:w-38 xl:h-38 sm:w-32 sm:h-32 fill-gray-600 hover:fill-gray-800 hover:scale-110 transition duration-300 ease-in-out">
                            <use xlinkHref={`${sprite}#icon-mail`} />
                        </svg>
                        <svg className="xl:w-38 xl:h-38 sm:w-32 sm:h-32 fill-green-500 hover:fill-green-700 hover:scale-110 transition duration-300 ease-in-out">
                            <use xlinkHref={`${sprite}#icon-phone`} />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;