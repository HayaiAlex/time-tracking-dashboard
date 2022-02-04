import React from 'react';

const MainCardTimeButton = ({ name, active, clicked }) => {

    return (
        <p
            className={active === name ? 'active' : ''}
            onClick={clicked}
        >{name}</p>
    );
};

export default MainCardTimeButton;
