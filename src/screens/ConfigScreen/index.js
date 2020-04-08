import React, { useState } from "react";
import { useGallowsState } from '../../hooks';
import { BasicField } from '../../components/fields';
import { history } from "../../configureStore";
import routes from "../../consts/routes";

import './style.scss';

const randomArrWords = [
    'Hello', 'fish', 'MyNameIllya', 'gallows',
    'name', 'agiotage', 'Love', 'Hush'
];

const ConfigScreen = () => {

    const [ newUserWord, setNewUserWord ] = useState('');

    const { addNewWord } = useGallowsState();


    const setRandomWord = () => {
        addNewWord(randomArrWords[Math.floor(Math.random() * randomArrWords.length)]);
        history.push(routes.getGameScreen());
    };

    const handleChange = (event) => {
        setNewUserWord(event.target.value);
    };


    const handleSubmit = (event) => {
        addNewWord(newUserWord);
        history.push(routes.getGameScreen());
    };
    return (
        <div className='configureScreen'>
                <form onSubmit={handleSubmit} className='configureScreen__wrapper'>
                    <div className='configureScreen__wrapper__title'>
                        Что бы сыграть в игру нужно загадать слово
                    </div>
                    <div className='configureScreen__wrapper__userWord'>
                        <BasicField
                            inpValue={newUserWord}
                            handleChange={handleChange}
                            placeholder='Загадайте слово'
                        />
                        <input type="submit" value='Загадать слово'/>
                    </div>
                    <div className='configureScreen__wrapper__title'>
                        Так же можете  воспользоваться нашим генератором слов
                    </div>
                    <div className='configureScreen__wrapper__randomWord'>
                        <button onClick={setRandomWord}> Отгадать рандомное слово</button>
                    </div>
                </form>
        </div>
    )
};
export default ConfigScreen;