import React, { useState } from 'react';

import OfficeConsult1 from '../../../assets/carousel/OfficeConsult1.jpg';
import OfficeConsult2 from '../../../assets/carousel/OfficeConsult2.jpg';
import OfficeConsult3 from '../../../assets/carousel/OfficeConsult3.jpg';
import OfficeConsult4 from '../../../assets/carousel/OfficeConsult4.jpg';
import OfficeConsult5 from '../../../assets/carousel/OfficeConsult5.jpg';
import OfficeConsult6 from '../../../assets/carousel/OfficeConsult6.jpg';
import OfficeConsult7 from '../../../assets/carousel/OfficeConsult7.jpg';
import OfficeConsult8 from '../../../assets/carousel/OfficeConsult8.jpg';
import OfficeConsult9 from '../../../assets/carousel/OfficeConsult9.jpg';
import OfficeConsult10 from '../../../assets/carousel/OfficeConsult10.jpg';
import OfficeConsult11 from '../../../assets/carousel/OfficeConsult11.jpg';
import OfficeConsult12 from '../../../assets/carousel/OfficeConsult12.jpg';
import OfficeConsult13 from '../../../assets/carousel/OfficeConsult13.jpg';
import OfficeConsult14 from '../../../assets/carousel/OfficeConsult14.jpg';
import OfficeConsult15 from '../../../assets/carousel/OfficeConsult15.jpg';

const ConsultCarousel = () => {
    const images = [
        OfficeConsult1,
        OfficeConsult2,
        OfficeConsult3,
        OfficeConsult4,
        OfficeConsult5,
        OfficeConsult6,
        OfficeConsult7,
        OfficeConsult8,
        OfficeConsult9,
        OfficeConsult10,
        OfficeConsult11,
        OfficeConsult12,
        OfficeConsult13,
        OfficeConsult14,
        OfficeConsult15,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const gap = 16; // Відстань між зображеннями в пікселях

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="relative w-full overflow-hidden">
            <h2 className="text-center pt-6 pb-6 font-medium">Office Gallery</h2>
            <div className="flex items-center justify-between">
                {/* Кнопка Назад */}
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700 z-10"
                >
                    &#8249;
                </button>
                {/* Слайди */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(currentIndex * (100 / 3))}%)`,
                        gap: `${gap}px`, // Додаємо gap між зображеннями
                    }}
                >
                    {images.map((img, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0"
                            style={{
                                width: `calc(100% / 3)`, // 3 слайди на великих екранах
                                marginRight: index !== images.length - 1 ? `${gap}px` : '0', // Відстань між слайдами
                            }}
                        >
                            <img
                                src={img}
                                alt={`Slide ${index + 1}`}
                                className="h-64 object-cover w-full"
                            />
                        </div>
                    ))}
                </div>
                {/* Кнопка Вперед */}
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700 z-10"
                >
                    &#8250;
                </button>
            </div>

            {/* Точки навігації */}
            <div className="flex justify-center mt-4 space-x-2">
                {Array.from({ length: images.length }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ConsultCarousel;