import React, { useState } from "react";
import { useGallowsState } from '../../hooks';
import { BasicField } from '../../components/fields';
import { BasicButton } from '../../components/buttons';
import { history } from "../../configureStore";
import routes from "../../consts/routes";

import './style.scss';

const randomArrWords = [
    'hello', 'desire', 'mynameillya', 'gallows',
    'name', 'agiotage', 'love', 'hush',
    'desire', 'reconciliation', 'rebellion',
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


    const handleSubmit = () => {
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

                        <BasicButton
                            isDisable={newUserWord === ''}
                            text='Загадать слово'
                        />
                    </div>
                    <div className='configureScreen__wrapper__title'>
                        Так же можете  воспользоваться нашим генератором слов
                    </div>
                    <div className='configureScreen__wrapper__randomWord'>
                        <BasicButton
                            text='Отгадать рандомное слово'
                            onClick={setRandomWord}
                            wrapperStyle={{ height: 30 }}
                        />
                    </div>
                </form>
        </div>
    )
};
export default ConfigScreen;