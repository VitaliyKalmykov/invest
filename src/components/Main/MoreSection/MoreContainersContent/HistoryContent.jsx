import React from 'react';
import OfficeWorkers from '../../../../assets/OfficeWorkers.jpg';
import Office from '../../../../assets/Office.jpg';
import HandToHand from '../../../../assets/HandToHand.jpg';
import Success from '../../../../assets/Success.jpg';

const contentData = [
    {
        image: OfficeWorkers,
        alt: "Office worker",
        text: `The story of an investment company began in 2005 when a group of like-minded professionals
               with extensive experience in finance decided to create a platform to support small and medium-sized
               businesses. Their mission was to attract capital to foster economic development and innovation.`,
    },
    {
        image: Office,
        alt: "Office",
        text: `Starting with a modest portfolio, the company focused on identifying high-potential startups
               and emerging industries. They built their reputation by providing not only financial resources but
               also strategic guidance, enabling businesses to scale sustainably.`,
    },
    {
        image: HandToHand,
        alt: "Success",
        text: `Over the years, the company expanded its operations across borders, establishing partnerships
               with international investors. This global reach allowed it to channel foreign capital into local
               markets, bridging the gap between entrepreneurs and financial opportunities.`,
    },
    {
        image: Success,
        alt: "Success",
        text: `Today, the company stands as a beacon of innovation and resilience, continuously evolving to address
               the dynamic challenges of the financial world while empowering businesses to achieve their visions.`,
    },
];

const HistoryContent = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl font-bold mb-4">Our growth for 20 years</h2>
                <div className="text-start font-medium p-4 flex flex-col">
                    {contentData.map((item, index) => (
                        <div key={index} className="mb-6">
                            <img
                                src={item.image}
                                alt={item.alt}
                                className="float-left xl:mr-4 sm:mr-2 xl:mb-4 sm:mb-2 xl:w-48 md:w-36 md:mr-3 md:mb-2 sm:w-24 h-auto rounded"
                            />
                            <p className="pb-4">{item.text}</p>
                            {index !== contentData.length - 1 && <hr className="w-full pb-2" />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryContent;