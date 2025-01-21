import React from "react";

const casesData = [
    {
        title: "Personalized Approach",
        description: "We deeply analyze your needs, financial goals, and risks to create optimal investment strategies.",
        gradientClass: "from-blue-500 to-teal-500",
        hoverClass: "hover:from-green-500 hover:to-indigo-500",
    },
    {
        title: "Experience and Expertise",
        description: "Our team consists of leading financial analysts and professionals with years of experience in investment management.",
        gradientClass: "from-purple-500 to-pink-500",
        hoverClass: "hover:from-yellow-500 hover:to-red-500",
    },
    {
        title: "Innovative Solutions",
        description: "We leverage modern technologies and tools to achieve the best results for our clients.",
        gradientClass: "from-indigo-500 to-blue-700",
        hoverClass: "hover:from-teal-400 hover:to-blue-600",
    },
    {
        title: "Transparency",
        description: "All our processes are fully transparent, and our clients always know where their money is invested.",
        gradientClass: "from-green-500 to-lime-400",
        hoverClass: "hover:from-indigo-400 hover:to-yellow-500",
    },
];

const CasesItem = () => {
    return (
        <div className="flex flex-1 flex-wrap flex-col gap-4">
            <h2 className="text-center font-medium text-xl sm:text-sm text-gray-800">
                Why you should choose us and what makes us better than others?
            </h2>
            <div className="w-full xl:flex justify-center gap-4 md:grid md:grid-cols-2 sm:flex sm:flex-col">
                {casesData.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-gradient-to-r ${item.gradientClass} 
                        p-4 basis-1/4 rounded-lg shadow-lg 
                        transition-all duration-300 
                        transform hover:scale-105 
                        hover:shadow-2xl 
                        hover:bg-gradient-to-l ${item.hoverClass}`}
                    >
                        <h3 className="text-xl text-white font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-white text-lg font-medium text-start">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CasesItem;