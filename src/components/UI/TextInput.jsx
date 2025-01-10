import React from 'react';

const TextInput = ({ type, id, placeholder, htmlFor, labelName, name, onChange, value}) => {
    return (
        <div className="flex gap-2 items-center justify-center">
            <label className={"whitespace-nowrap"}
                htmlFor={htmlFor}>
                {labelName}
            </label>
            <input className="w-full border-2 p-2 rounded-xl"
                   type={type}
                   id={id}
                   placeholder={placeholder}
                   name={name}
                   onChange={onChange}
                   value={value}
            />
        </div>
    );
};

export default TextInput;