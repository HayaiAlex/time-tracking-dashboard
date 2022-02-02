import React from 'react';

const MainCardTimeButton = ({ name, active }) => {
    return (
        <p className={active === name ? 'active' : ''}>{name}</p>
    );
};

export default MainCardTimeButton;
