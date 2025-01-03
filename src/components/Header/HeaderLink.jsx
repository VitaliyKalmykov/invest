import React from 'react';

const HeaderLink = ({text, className, href, onClick }) => {
    return (
        <a className={className} href={href} onClick={onClick}>{text}</a>
    );
};

export default HeaderLink;