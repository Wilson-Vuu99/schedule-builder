import React from 'react';
import PropTypes from 'prop-types';



const Button = ({ onClick, children, type = 'button',  className = "btn btn-primary btn-block mb-4", disabled = false }) => {
    return (
        
        <button
            data-mdb-button-init 
            data-mdb-ripple-init 
            onClick={onClick}
            type={type}
            className={`btn ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

// Prop types validation
Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;