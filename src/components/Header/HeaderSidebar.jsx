import React,{useState} from 'react';
import sprite from "../../assets/symbol-defs.svg"
import HeaderNav from "./HeaderNav";

const HeaderSidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    function toggleSidebar() {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div className="xl:hidden">
            <svg onClick={toggleSidebar} className={`w-12 h-9 
            cursor-pointer 
            z-50 
            transition-all duration-300 
            relative ${isSidebarOpen ? '-rotate-90' : "rotate-90" }`}>
                <use className="z-50" xlinkHref={`${sprite}#arrow`}/>
            </svg>
            <div
                className={`fixed top-0 left-0 h-full w-full 
                bg-blue-900 text-white transform ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out`}
            >
                <HeaderNav setIsSidebarOpen={setIsSidebarOpen} />
            </div>
        </div>
    );
};

export default HeaderSidebar;