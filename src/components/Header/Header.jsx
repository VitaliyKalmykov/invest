import React from 'react';
import sprite from '../assets/sprite.svg';

const Header = () => {
    return (
        <header className="bg-blue-950">
            <div className="container">
                <div className="flex justify-around text-center p-4 gap-2">
                    <div>
                        <svg className={"w-28 h-24"}>
                            <use xlinkHref={`${sprite}#money`}/>
                        </svg>
                    </div>
                    <nav className="flex-1 flex  justify-around items-center gap-2">
                        <a className="text-xl font-medium" href={"#"}>More about us</a>
                        <a className="text-xl font-medium" href={"#"}>Successful cases </a>
                        <a className="text-xl font-medium" href={"#"}>Order a consultation</a>
                        <a className="text-xl font-medium" href={"#"}>Contacts </a>
                    </nav>
                    <button className="pl-3 pr-3 pt-0 border-2 text-xl">Get started now</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
