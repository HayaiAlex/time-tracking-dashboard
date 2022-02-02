import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const OptionsButton = () => {
    const [open, setOpenState] = useState(false);

    const clicked = () => {
        console.log("clicked")
        setOpenState(!open);
    }



    return (<div className='options-button'>
        <FontAwesomeIcon
            onClick={clicked}
            className='tracker-button'
            icon={open ? faTimes : faEllipsisH}
        />
        <div
            className={'options-button-window ' + (open ? 'options-button-window-open' : 'options-button-window-closed')}
            hidden={open ? '' : true}>
            <ul>
                <li>Edit</li>
            </ul>
        </div>
    </div >);
};

export default OptionsButton;
