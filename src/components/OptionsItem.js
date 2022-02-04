import React from 'react';
import PropTypes from 'prop-types';
import EditForm from './EditForm';

const OptionsItem = ({ name }) => {

    const openEditForm = () => {
        console.log('open edit form');
    }

    const clicked = () => {
        console.log(`clicked ${name}`)
        if (name === 'Edit') {
            openEditForm()
        }
    }

    return (<li onClick={clicked}>
        {name}
    </li>);
};

OptionsItem.propTypes = {
    name: PropTypes.string.isRequired
}

// OptionsItem.defaultProps = {
//     clicked: defaultClicked
// }

export default OptionsItem;
