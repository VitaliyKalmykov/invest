import React, { useState, useEffect } from 'react';
import Button from '../../UI/Button'

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
import sprite from "../../../assets/symbol-defs.svg";


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
    const [visibleItems, setVisibleItems] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 481) {
                setVisibleItems(1); // Телефони
            } else if (window.innerWidth < 789) {
                setVisibleItems(2); // Планшети
            } else {
                setVisibleItems(3); // Десктопи
            }
        };

        // Викликати під час монтування та при зміні розміру
        handleResize();
        window.addEventListener("resize", handleResize);

        // Очистка слухача подій
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - visibleItems + images.length) % images.length
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + visibleItems) % images.length
        );
    };

    const handleDotClick = (index) => {
        setCurrentIndex(index * visibleItems);
    };

    const totalDots = Math.ceil(images.length / visibleItems);

    return (
        <div className="p-2">
            <h2 className="text-center font-medium">Office Gallery</h2>

            <div className="relative p-6 bg-white">
                {/* Кнопка для попереднього слайда */}
                <Button
                    onClick={handlePrev}
                    className="absolute -left-5 top-1/2 transform -translate-y-1/2"
                >
                    <svg className="w-12 h-9 z-50 rotate-[270deg]">
                        <use className="z-50" xlinkHref={`${sprite}#arrow`} />
                    </svg>
                </Button>

                {/* Кнопка для наступного слайда */}
                <Button
                    onClick={handleNext}
                    className="absolute -right-5 top-1/2 transform -translate-y-1/2"
                >
                    <svg className="w-12 h-9 cursor-pointer z-50 rotate-90">
                        <use className="z-50" xlinkHref={`${sprite}#arrow`} />
                    </svg>
                </Button>

                {/* Слайдер */}
                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-500"
                        style={{
                            transform: `translateX(-${(100 / visibleItems) * currentIndex}%)`,
                        }}
                    >
                        {images.map((image, index) => (
                            <div
                                className="flex-shrink-0 xl:w-1/3 md:w-1/2 sm:w-full h-44 pr-4 pl-4"
                                key={index}
                            >
                                <img
                                    className="h-full w-full object-cover"
                                    src={image}
                                    alt={`Office Image ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Точки для перемикання слайдів */}
                <div className="flex justify-center items-center mt-4">
                    {Array.from({ length: totalDots }).map((_, dotIndex) => (
                        <Button
                            key={dotIndex}
                            onClick={() => handleDotClick(dotIndex)}
                            className={`w-3 h-3 rounded-full mx-1 ${
                                dotIndex === Math.floor(currentIndex / visibleItems)
                                    ? "bg-blue-500"
                                    : "bg-gray-300"
                            }`}
                        ></Button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ConsultCarousel;