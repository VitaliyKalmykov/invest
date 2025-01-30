import React from 'react';
import sprite from '../../../assets/symbol-defs.svg';

const icons = [
    { id: 'skype', color: 'fill-blue-500 hover:fill-blue-700', link: 'skype:live:.cid.81ae5d0b76522c84?chat', label: 'Skype' },
    { id: 'telegram', color: 'fill-blue-400 hover:fill-blue-600', link: 'https://t.me/Vitalii_Kalmykov_Work', label: 'Telegram' },
    { id: 'mail', color: 'fill-gray-600 hover:fill-gray-800', link: 'mailto:vitaliy.kalmykov.work@gmail.com', label: 'Email' },
    { id: 'phone', color: 'fill-green-500 hover:fill-green-700', link: 'tel:+380982074412', label: 'Phone' }
];

const Contacts = () => {
    return (
        <section className="scrollbar-none max-h-screen overflow-y-auto" style={{ maxHeight: "calc(100vh - 5rem)" }}>
            <div className="container py-6">
                <h1 className="text-center font-bold text-2xl text-primary">Contact us!</h1>
                <div className="flex flex-col items-center justify-center gap-6 mt-6 h-[60vh]">
                    {[icons.slice(0, 2), icons.slice(2)].map((group, index) => (
                        <div key={index} className="flex flex-col items-center gap-6 pb-7">
                            <div className="flex flex-row items-center gap-12">
                                {group.map(({ id, color, link, label }) => (
                                    <div key={id} className="flex flex-col items-center">
                                        <a href={link} target="_blank" rel="noopener noreferrer">
                                            <svg className={`xl:w-38 xl:h-38 sm:w-32 sm:h-32 ${color} hover:scale-110 transition duration-300 ease-in-out`}>
                                                <use xlinkHref={`${sprite}#icon-${id}`} />
                                            </svg>
                                        </a>
                                        <span className="mt-2 text-center text-lg font-medium text-gray-700">{label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contacts;