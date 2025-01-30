import React, {useEffect, useRef, useState} from 'react';
import sprite from '../../assets/symbol-defs.svg';
import HeaderNav from "./HeaderNav";
import Button from "../UI/Button";
import HeaderSidebar from "./HeaderSidebar";

const Header = ({setIsModalOpen}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        if(headerRef.current){
            setHeaderHeight(headerRef.current.clientHeight)
        }
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    }

    return (
        <header ref={headerRef} className="bg-blue-950">
            <div className="container relative">
                <div className="flex justify-between items-center text-center p-4 gap-2">
                    <div className="z-30">
                        <a href="/">
                            <svg className={"w-12 h-12 block fill-green-600"}>
                                <use xlinkHref={`${sprite}#money`}/>
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-1 md:hidden sm:hidden">
                        <HeaderNav setIsSidebarOpen={setIsSidebarOpen} />
                    </div>
                    <HeaderSidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} headerHeight={headerHeight}/>
                    <Button
                        type="button"
                        className={
                            `px-6 py-3 
                            z-30
                            md:px-3
                            sm:px-2
                           bg-blue-500 
                           text-white font-semibold 
                             rounded-xl shadow-md 
                             transition-all duration-300 ease-in-out 
                            hover:bg-blue-700 hover:scale-110 
                            active:bg-blue-800 
                              focus:outline-none 
                              focus:ring-2 
                            focus:ring-blue-400`
                        }

                        onClick={openModal}

                    >
                        Get started
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
