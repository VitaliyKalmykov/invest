import React from 'react';

const TextInput = ({ type, id, placeholder, htmlFor, labelName, name}) => {
    return (
        <div className="flex gap-2 items-center justify-center">
            <label className={"whitespace-nowrap"}
                htmlFor={htmlFor}>
                {labelName}
            </label>
            <input className="w-full border-2"
                   type={type}
                   id={id}
                   placeholder={placeholder}
                   name={name}
            />
        </div>
    );
};

export default TextInput;