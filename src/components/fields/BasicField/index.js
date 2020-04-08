import React from "react";
import PropTypes from 'prop-types';

import './style.scss';

const BasicField = ({
        handleChange,
        inpValue,
        maxLength,
        placeholder
    }) => {
    return (
        <div className='basicField'>
            <input type="text"
                   value={inpValue}
                   onChange={handleChange}
                   className='basicField__field'
                   maxLength={maxLength}
                   placeholder={placeholder}
            />
        </div>
    )
};

BasicField.propTypes = {
    handleChange: PropTypes.func.isRequired,
    inpValue: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    placeholder: PropTypes.string.isRequired,
};

BasicField.defaultProps = {
    maxLength: 100
}

export default BasicField;