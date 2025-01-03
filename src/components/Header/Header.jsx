import React from 'react';
import sprite from '../../assets/sprite.svg';
import HeaderNav from "./HeaderNav";
import Button from "../UI/Button";

const Header = ({setActiveSection}) => {
    return (
        <header className="bg-blue-950">
            <div className="container">
                <div className="flex justify-around text-center p-4 gap-2">
                    <div>
                        <svg className={"w-28 h-24"}>
                            <use xlinkHref={`${sprite}#money`}/>
                        </svg>
                    </div>
                    <HeaderNav setActiveSection={setActiveSection} />
                    <Button
                        type="button"
                        className={
                            `px-6 py-3 
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
