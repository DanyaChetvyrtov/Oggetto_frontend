import React from 'react';
import classes from './OgButton.module.css';

const OgButton = ({ children, isActive, ...props }) => {
    return (
        <button
            {...props}
            className={`${classes.ogBtn} ${isActive ? classes.active : ''}`}
        >
            {children}
        </button>
    );
};

export default OgButton;

