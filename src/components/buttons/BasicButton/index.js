import React from "react";
import PropTypes from 'prop-types';

import'./style.scss';

const BasicButton = ({
                          text,
                          isDisable,
                          wrapperStyle,
                          onClick
}) => {

    return (
        <div className='basicButton' style={wrapperStyle}>
            <button
                disabled={isDisable}
                className='basicButton__button'
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
};

BasicButton.propTypes = {
    text: PropTypes.string.isRequired,
    isDisable: PropTypes.bool,
    wrapperStyle: PropTypes.object,
    onClick: PropTypes.func,
};

BasicButton.defaultProps = {
    isDisable: false,
    wrapperStyle: null,
    onClick: Function.prototype,
};

export default BasicButton;