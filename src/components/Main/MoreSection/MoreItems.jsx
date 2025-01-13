import React from 'react';
import Button from "../../UI/Button";

const MoreItems = ({item, onExpand, expandedId}) => {
    return (
        <div
            className={`group
            border-2
            flex items-center justify-center flex-col
            font-bold text-2xl
            shadow-xl rounded-2xl
            transition-all duration-300 ease-in
            hover:scale-110 
                       ${expandedId === item.id ? 'absolute inset-0 z-50 bg-white' : 'h-full'}`} // Використовуємо h-auto для розширення
        >
                    <span
                        className="relative mt-8
                        border-transparent
                        transition-all duration-300 ease-in
                        group-hover:border group-hover:border-blue-500 group-hover:px-2"
                    >
                        {item.text}
                    </span>
            <Button type="button"
                    className="
                    border-2
                    mt-2 p-2
                    rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300"
                    onClick={() => onExpand(item.id)}
            >
                look more
            </Button>
        </div>
    );
};

export default MoreItems;