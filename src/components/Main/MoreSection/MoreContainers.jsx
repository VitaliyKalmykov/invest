import React, {useState} from 'react';
import MoreItems from "./MoreItems";
import FAQContent from "./MoreContainersContent/FAQContent";
import SpecialistContent from "./MoreContainersContent/SpecialistContent";

const MoreContainers = () => {

    const [expandedId, setExpandedId] = useState(null);

    const items = [
        { id: 1, text: 'F.A.Q', component: <FAQContent/> },
        { id: 2, text: 'Our specialists', component: <SpecialistContent/> },
        { id: 3, text: 'History of the company', },
        { id: 4, text: 'Pros and cons of working with us', },
    ];

    const handleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id)
    };


    return (
        <div className="relative
        grid grid-cols-2 align-center justify-center
        text-center
        w-full
        xl:gap-8
        xl:h-[70vh]
        md:gap-6
        md:h-[55vh]
        sm:gap-4
        sm:h-[45vh]
        ">
            {items.map((item) => (
                <MoreItems key={item.id}  item={item} onExpand={handleExpand} expandedId={expandedId} />
            ))}
        </div>
    );
};

export default MoreContainers;
