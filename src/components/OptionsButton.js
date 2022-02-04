import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import OptionsItem from './OptionsItem';

const OptionsButton = () => {
    const [open, setOpenState] = useState(false);
    const [displayBlock, setDisplayBlock] = useState(false);

    function optionsButtonClicked() {
        animateOptionsButton();
    }

    const animateOptionsButton = () => {
        // if open then animate it hiding and then remove display:block;
        if (open) {
            setOpenState(!open);

            // if closed then give display block, force reflow, and then animate
        } else {
            setDisplayBlock(true);
            setOpenState(!open);
        }
    }

    useEffect(() => {
        if (open) return;

        let hideDelay = setTimeout(() => setDisplayBlock(false), 500);

        return () => {
            clearTimeout(hideDelay);
        }
    }, [open]);

    return (<div className='options-button'>
        <FontAwesomeIcon
            onClick={optionsButtonClicked}
            className='tracker-button'
            icon={open ? faTimes : faEllipsisH}
        />
        <div
            className={'options-button-window ' + (displayBlock ? 'block ' : '') + (open ? 'options-button-window-open' : 'options-button-window-closed')}
        >
            {/* hidden={open ? '' : true}> */}
            <ul>
                <OptionsItem name="Edit" />
            </ul>
        </div>
    </div >);
};

export default OptionsButton;
