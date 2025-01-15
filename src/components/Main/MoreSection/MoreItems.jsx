import React from 'react';
import Button from "../../UI/Button";

const MoreItems = ({item, onExpand, expandedId, component}) => {
    return (
        <div
            className={`group
            border-2
            flex items-center flex-col
            font-bold text-2xl
            shadow-xl rounded-2xl
            transition-all duration-300 ease-in
                       ${expandedId === item.id ? 'absolute inset-0 z-50 bg-white justify-start' : 'hover:scale-110 h-full justify-center'}`}
        >
                    <span
                        className={`relative 
                        border-transparent
                        transition-all duration-300 ease-in
                        ${expandedId !== item.id ? 'group-hover:border group-hover:border-blue-500 group-hover:px-2' 
                            : 
                            'border p-2 border-blue-500'
                        }
                        `}
                    >
                        {item.text}
                    </span>

            <Button type="button"
                    className={`
                    border-2
                    mt-2 p-2
                    rounded-2xl
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    ${expandedId === item.id ? 'hidden' : ''}
                    `}
                    onClick={() => onExpand(item.id)}
            >
                look more
            </Button>

            <Button type="button"
                    className={`
                     border-2
                     w-8 h-8
                     flex items-center justify-center
                     rounded-full
                    ${expandedId === item.id ? 'absolute top-2 right-2' : 'hidden'}
                    `}
                    onClick={() => onExpand(item.id)}
            >

                <div className="relative w-full">
                    <div
                        className="absolute inset-0 w-full h-[2px] bg-black rotate-45 origin-center"
                    ></div>
                    <div
                        className="absolute inset-0 w-full h-[2px]  bg-black -rotate-45 origin-center"
                    ></div>
                </div>

            </Button>
            <div className={`${expandedId === item.id ? 'block overflow-y-auto' : 'hidden'}`}>
                {item.component}
            </div>
        </div>
    );
};

export default MoreItems;