import React from "react";

const Input = ({name, placeholder, type, value, onChange, onClick, disabled, error}) => (
    <div className="form-group">
        <label htmlFor={name}>{placeholder}</label>
        <input
            className={type === "submit" ? "btn btn-primary" : "form-control"}
            type={type}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
            onClick={onClick}
            disabled={disabled}
        />
        <span className='alert-warning'>{error}</span>
    </div>
);

export default Input;
