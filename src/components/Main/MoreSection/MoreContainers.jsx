import React from 'react';

const MoreContainers = () => {
    return (
        <div className="grid grid-cols-2 align-center justify-center text-center gap-8 h-96">
            <div className="
            group
            border-2
            flex items-center justify-center
            font-bold text-2xl
            shadow-xl rounded-2xl
            transition-all duration-300 ease-in
            hover:scale-110
            ">
    <span className="relative
    border-transparent
    transition-all duration-300 ease-in
    group-hover:border group-hover:border-blue-500
    group-hover:px-2">
      F.A.Q
    </span>
            </div>
            <div className="
            group
            border-2
            flex items-center justify-center
            font-bold text-2xl
            shadow-xl rounded-2xl
            transition-all duration-300 ease-in
            hover:scale-110
            ">
                    <span
                        className="relative
                        border-transparent transition-all
                        duration-300 ease-in
                        group-hover:border group-hover:border-blue-500 group-hover:px-2">
                        Our specialists
                        </span>
            </div>
            <div className="
            group
            border-2
            flex items-center justify-center
            font-bold text-2xl
            shadow-xl rounded-2xl
            transition-all duration-300 ease-in
            hover:scale-110
            ">
                 <span
                     className="relative
                        border-transparent transition-all
                        duration-300 ease-in
                        group-hover:border group-hover:border-blue-500 group-hover:px-2">
                 History of the company
                 </span>
            </div>
            <div className="
            group
            border-2
            flex items-center justify-center
            font-bold text-2xl
            shadow-xl rounded-2xl
            transition-all duration-300 ease-in
            hover:scale-110
            ">
                <span
                    className="relative
                        border-transparent transition-all
                        duration-300 ease-in
                        group-hover:border group-hover:border-blue-500 group-hover:px-2">
                    Pros and cons of working with us
                 </span>
            </div>
        </div>
    );
};

export default MoreContainers;