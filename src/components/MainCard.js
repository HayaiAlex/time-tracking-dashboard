import React from 'react';
import MainCardTimeButton from './MainCardTimeButton';

const MainCard = ({ img, name, activeTime, clicked }) => {
    return (

        <div className="main-card">
            <div className="main-card-header">
                <img src={img} alt="" className='main-card-header-img' />
                <div className="main-card-name-area">
                    <p>Report for</p>
                    <p className='name'>{name}</p>
                </div>
            </div>
            <div className="main-card-times">
                <MainCardTimeButton name="Daily" active={activeTime} clicked={clicked} />
                <MainCardTimeButton name="Weekly" active={activeTime} clicked={clicked} />
                <MainCardTimeButton name="Monthly" active={activeTime} clicked={clicked} />
            </div>
        </div>

    );
};

export default MainCard;
