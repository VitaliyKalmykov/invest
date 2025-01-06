import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLink from "./HeaderLink";

const HeaderNav = ({setIsSidebarOpen}) => {

    const links = [{
        linkText: "More about us",
        linkAddress: "More"
    },
        {
            linkText: "Successful cases ",
            linkAddress: "Cases"
        },
        {
            linkText: "Order a consultation",
            linkAddress: "Consultation"
        },
        {
            linkText: "Contacts",
            linkAddress: "Contacts"
        }
    ]

    const navigate = useNavigate();

    const handleNavigation = (linkAddress) => {
        navigate(`/${linkAddress}`);     // Змінюємо маршрут
    };

    return (
        <nav className="
        flex flex-1 justify-around items-center
        xl:items-center
        md:flex-col h-full
        sm:flex-col"
        >
            {links.map((link, index) => (
                <HeaderLink
                    key={index}
                    onClick={(e) => {e.preventDefault(); handleNavigation(link.linkAddress); setIsSidebarOpen(false)}}
                    className="

                    text-lg

                    text-blue-500
                    hover:text-blue-700

                    relative transition-all duration-300 ease-in-out


                      after:content-['']
                      after:absolute
                      after:bottom-[-10px]
                      after:right-0
                      after:w-0
                      after:h-0
                      after:border-transparent
                      after:transition-all
                      after:duration-500

                      hover:after:w-full
                      hover:after:left-0
                      hover:after:border-b
                    hover:after:border-blue-500
                    "

                    text={link.linkText}

                    href={`/${link.linkAddress}`}/>
            ))}
        </nav>
    );
};

export default HeaderNav;

