import React from "react";

const commentsData = [
    {
        id: 1,
        name: "John Doe",
        stars: 5,
        comment: "Amazing service! The team is highly professional and helped me maximize my investments."
    },
    {
        id: 2,
        name: "Emily Smith",
        stars: 4,
        comment: "Great experience overall. Some minor delays, but the results were worth it."
    },
    {
        id: 3,
        name: "Michael Brown",
        stars: 5,
        comment: "I was skeptical at first, but their strategies are truly innovative and effective."
    },
    {
        id: 4,
        name: "Sarah Johnson",
        stars: 3,
        comment: "Decent service, but I expected a bit more transparency in reporting."
    },
    {
        id: 5,
        name: "David Wilson",
        stars: 4,
        comment: "Solid company. They know what they’re doing and keep you updated regularly."
    },
    {
        id: 6,
        name: "Sophia Martinez",
        stars: 5,
        comment: "Highly recommend! They helped me achieve my financial goals in just a few months."
    },
    {
        id: 7,
        name: "James Anderson",
        stars: 4,
        comment: "Good support and clear explanations. A great choice for beginners in investment."
    },
    {
        id: 8,
        name: "Olivia Taylor",
        stars: 5,
        comment: "The personalized approach is what sets them apart. Very satisfied!"
    },
    {
        id: 9,
        name: "Liam Thomas",
        stars: 3,
        comment: "Average experience. The returns were okay but nothing extraordinary."
    },
    {
        id: 10,
        name: "Emma Moore",
        stars: 5,
        comment: "I’ve tried several companies, but this one stands out for its professionalism."
    },
    {
        id: 11,
        name: "Benjamin Harris",
        stars: 4,
        comment: "Responsive team and great advice. Highly appreciated!"
    },
    {
        id: 12,
        name: "Charlotte Davis",
        stars: 5,
        comment: "Absolutely brilliant! My portfolio has grown significantly thanks to their expertise."
    },
    {
        id: 13,
        name: "Henry Walker",
        stars: 3,
        comment: "The service is okay, but the fees are a bit high for what they offer."
    },
    {
        id: 14,
        name: "Amelia Hall",
        stars: 5,
        comment: "Couldn’t be happier! Their innovative solutions are top-notch."
    },
    {
        id: 15,
        name: "Lucas Young",
        stars: 4,
        comment: "Great results and friendly staff. Would recommend to others."
    },
    {
        id: 16,
        name: "Mia Allen",
        stars: 5,
        comment: "Excellent! Their strategies are tailored to individual needs."
    },
    {
        id: 17,
        name: "Elijah King",
        stars: 3,
        comment: "Mixed feelings. While the returns were decent, I had issues with communication."
    },
    {
        id: 18,
        name: "Isabella Wright",
        stars: 5,
        comment: "A trustworthy company. I feel confident entrusting my finances to them."
    },
    {
        id: 19,
        name: "Noah Scott",
        stars: 4,
        comment: "Professional and knowledgeable team. They helped me understand the process better."
    },
    {
        id: 20,
        name: "Ava Green",
        stars: 5,
        comment: "I’ve already recommended them to my friends. Great job!"
    }
];

const CasesFeedBack = () => {
    return (
        <div className="mx-auto py-6">
            <h2 className="text-center font-bold text-xl mb-2">Customer Feedback</h2>
            <div className="
            grid gap-4
            xl:grid-cols-4
            md:grid-cols-2
            sm:grid-cols-1">
                {commentsData.map(({ id, name, stars, comment }) => (
                    <div
                        key={id}
                        className="
                        p-2
                        border rounded-lg shadow-lg bg-white
                        hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="font-bold text-lg mb-2">{name}</h3>
                        <p className="text-yellow-500 mb-2">
                            {"★".repeat(stars) + "☆".repeat(5 - stars)} {/* Відображення зірок */}
                        </p>
                        <p className="text-gray-700 text-start text-lg">{comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CasesFeedBack;