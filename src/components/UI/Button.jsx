import React from 'react';

const Button = ({type, onClick, className, children}) => {
    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    );
};

export default Button;