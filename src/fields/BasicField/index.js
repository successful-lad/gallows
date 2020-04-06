import React from "react";
import PropTypes from 'prop-types';

import './style.scss';

const BasicField = ({ handleChange, inpValue }) => {
    return (
        <div className='basicField'>
            <input type="text"
                   value={inpValue}
                   onChange={handleChange}
                   className='basicField__field'
                   maxLength={1}
            />
        </div>
    )
};

BasicField.propTypes = {
    handleChange: PropTypes.func.isRequired,
    inpValue: PropTypes.string.isRequired,
};

export default BasicField;