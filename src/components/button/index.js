import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, children }) => (
    <button onClick={onClick}>
        {children}
    </button>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.string
    ]).isRequired
}
