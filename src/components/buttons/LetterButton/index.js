import React from "react";
import PropTypes from 'prop-types';
import lock from '../../../assets/img/lock.svg';

import './style.scss';

const LetterButton = ({letter}) => {

    return (
        <div className='letterButton'>
            <button
                className='letterButton__buttonWrapper'
                disabled={true}
            >{letter ? letter : <img src={lock} alt="asasd"/>}</button>
        </div>
    )
};

LetterButton.propTypes = {
  letter: PropTypes.string,
};

LetterButton.defaultProps = {
    letter: '',
};

export default LetterButton