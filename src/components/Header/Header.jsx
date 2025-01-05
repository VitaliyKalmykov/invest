import React from 'react';
import sprite from '../../assets/symbol-defs.svg';
import HeaderNav from "./HeaderNav";
import Button from "../UI/Button";
import HeaderSidebar from "./HeaderSidebar";

const Header = () => {
    return (
        <header className="bg-blue-950">
            <div className="container">
                <div className="flex justify-between items-center text-center p-4 gap-2">
                    <div className="z-50">
                        <svg className={"w-12 h-12 block fill-green-600"}>
                            <use xlinkHref={`${sprite}#money`}/>
                        </svg>
                    </div>
                    <div className="flex flex-1 md:hidden sm:hidden">
                        <HeaderNav />
                    </div>
                    <HeaderSidebar/>
                    <Button
                        type="button"
                        className={
                            `px-6 py-3 
                            z-50
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
                    >
                        Get started
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
