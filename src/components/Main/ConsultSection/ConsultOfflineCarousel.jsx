import React, { useState } from 'react';
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

    const visibleItems = 3;

    const gap = 16;

    const totalWidth = 100 + (gap / visibleItems) * (visibleItems - 1);


    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - visibleItems : prevIndex - 1);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - visibleItems ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="p-2 border-2">
            <h2 className="text-center font-medium">Office Gallery</h2>

            {/* buttons */}

            <div className="relative border-2 p-6 bg-white">
                <Button onClick={handlePrev} type={"button"} className="absolute left-1 top-1/2 cursor-pointer">1</Button>
                <Button onClick={handleNext} type={"button"} className="absolute right-1 top-1/2 cursor-pointer">2</Button>

                {/* slider */}

                <div className="overflow-hidden w-full">
                    <div className="flex gap-2 transition-transform duration-500"
                         style={{
                             transform: `translateX(-${
                                 currentIndex * (totalWidth / visibleItems)
                             }%)`,

                         }}>
                        {images.map((image, index) => {
                            return (
                                <div className={"w-96 h-44 flex-shrink-0"} key={index}>
                                    <img className={"h-full w-full object-cover"} src={image}
                                         alt={`Office Image ${index + 1}`}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConsultCarousel;