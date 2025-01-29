import React from 'react';

const Footer = () => {
    return (
        <footer className={"absolute bottom-0 left-0 right-0 bg-blue-950"}>
        <div className={"container"}>
            <div className="flex xl:text-2xl md:text-xl sm:text-lg items-center justify-center text-blue-500">This website was created as my pet project for my portfolio. 2025 (с).</div>
        </div>
        </footer>
    );
};

export default Footer;