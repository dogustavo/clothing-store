import React from 'react';

const Button = ({ children, isGoogleSiginIn, ...props }) => (
    <button className={`custom-button ${isGoogleSiginIn ? 'google-sign-in' : ''}`} { ...props }>
        {children}
    </button>
)

export default Button;