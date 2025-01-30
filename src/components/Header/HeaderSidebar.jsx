import React from 'react';
import sprite from "../../assets/symbol-defs.svg"
import HeaderNav from "./HeaderNav";

const HeaderSidebar = ({isSidebarOpen, setIsSidebarOpen, headerHeight}) => {

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="xl:hidden">
            <svg onClick={toggleSidebar} className={`w-12 h-9 
            cursor-pointer 
            z-30 
            transition-all duration-300 
            relative ${isSidebarOpen ? '-rotate-90' : "rotate-90" }`}>
                <use className="z-30" xlinkHref={`${sprite}#arrow`}/>
            </svg>
            <div
                className={`fixed
                z-50
                top-0 left-0 h-full
                w-full 
                bg-blue-900 text-white transform 
                
                overflow-y-auto overflow-x-auto
                
                 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } 
                transition-transform duration-300 ease-in-out`
            }

                style={{
                    top: `${headerHeight}px`,
                    height: `calc(100% - ${headerHeight}px)`,
                }}
            >
                <HeaderNav setIsSidebarOpen={setIsSidebarOpen} />
            </div>
        </div>
    );
};

export default HeaderSidebar;