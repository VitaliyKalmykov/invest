import React from 'react';

const RadioInput = ({id, name, htmlFor, labelName, onChange, checked, value}) => {
    return (
        <div>
            <input value={value} checked={checked} onChange={onChange} type="radio" id={id} name={name}/>
            <label htmlFor={htmlFor}>{labelName}</label>
        </div>
    );
};

export default RadioInput;