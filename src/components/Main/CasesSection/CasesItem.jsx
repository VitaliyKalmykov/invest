import React from 'react';

const casesData = [
    {
        title: "Personalized Approach",
        description: "We deeply analyze your needs, financial goals, and risks to create optimal investment strategies.",
        gradientFrom: "blue-500",
        gradientTo: "teal-500",
        hoverFrom: "green-500",
        hoverTo: "indigo-500",
    },
    {
        title: "Experience and Expertise",
        description: "Our team consists of leading financial analysts and professionals with years of experience in investment management.",
        gradientFrom: "purple-500",
        gradientTo: "pink-500",
        hoverFrom: "yellow-500",
        hoverTo: "red-500",
    },
    {
        title: "Innovative Solutions",
        description: "We leverage modern technologies and tools to achieve the best results for our clients.",
        gradientFrom: "indigo-500",
        gradientTo: "blue-700",
        hoverFrom: "teal-400",
        hoverTo: "blue-600",
    },
    {
        title: "Transparency",
        description: "All our processes are fully transparent, and our clients always know where their money is invested.",
        gradientFrom: "green-500",
        gradientTo: "lime-400",
        hoverFrom: "indigo-400",
        hoverTo: "yellow-500",
    }
];

const CasesItem = () => {
    return (
        <div className="
        flex flex-1 flex-wrap flex-col gap-4
        ">
            <h2 className="text-center font-medium text-xl sm:text-sm text-gray-800">
                Why you should choose us and what makes us better than others?
            </h2>
            <div className="
            w-full
            xl:flex justify-center gap-4
            md:grid
            md:grid-cols-2
            sm:flex
            sm:flex-col">
                {casesData.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-r from-${item.gradientFrom} to-${item.gradientTo} 
                        p-4
                        basis-1/4
                        rounded-lg shadow-lg 
                        transition-all duration-300 
                        transform hover:scale-105 
                        hover:shadow-2xl 
                        hover:bg-gradient-to-l 
                        hover:from-${item.hoverFrom} 
                        hover:to-${item.hoverTo}`}
                    >
                        <h3 className="
                        text-xl
                        text-white
                         font-semibold
                         mb-2
                         ">{item.title}</h3>
                        <p className="
                        text-white
                        text-lg
                        font-medium
                        text-start
                        ">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CasesItem;