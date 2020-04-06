import React, {useState} from 'react';
import { BasicField } from '../../fields';

import './style.scss';

const GameScreen = () => {
    const [currentValue, setCurrentValue] = useState();

    const handleSubmit = (event) =>{
        console.log(`value : ${currentValue}`);
        event.preventDefault();

    };

    const handleChange = (event) => {
        setCurrentValue(event.target.value);
    };

    return (
        <div className="gameScreen">
            <div className="gameScreen__gameWrapper">
                <form onSubmit={handleSubmit} className="gameScreen__gameWrapper__form">
                    <div className="gameScreen__gameWrapper__form__pictureAndWord">

                    </div>
                    <div className="gameScreen__gameWrapper__form__inputRow">
                        <BasicField handleChange={handleChange} inpValue={currentValue}/>
                        <input type="submit" value='Проверить букву'/>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default GameScreen;