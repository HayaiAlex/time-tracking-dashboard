import React from 'react';
import MainCardTimeButton from './MainCardTimeButton';

const MainCard = ({ img, name, active }) => {
    return (

        <div className="main-card">
            <div className="main-card-header">
                <img src={img} alt="" className='main-card-header-img' />
                <p>Report for</p>
                <p className='name'>{name}</p>
            </div>
            <div className="main-card-times">
                <MainCardTimeButton name="Daily" active={active} />
                <MainCardTimeButton name="Weekly" active={active} />
                <MainCardTimeButton name="Monthly" active={active} />
            </div>
        </div>

    );
};

export default MainCard;
