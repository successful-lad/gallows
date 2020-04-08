import React, { useState, useCallback, useEffect } from 'react';
import { useGallowsState } from '../../hooks';
import { BasicField } from '../../components/fields';
import { LetterButton } from  '../../components/buttons';
import { history } from "../../configureStore";
import routes from "../../consts/routes";


import mistake0 from '../../assets/img/mistake0.png';
import mistake1 from '../../assets/img/mistake1.png';
import mistake2 from '../../assets/img/mistake2.png';
import mistake3 from '../../assets/img/mistake3';
import mistake4 from '../../assets/img/mistake4.png';
import mistake5 from '../../assets/img/mistake5.png';
import mistake6 from '../../assets/img/mistake6.png';

import './style.scss';

const GameScreen = () => {
    const { state, setGameResult } = useGallowsState();

    const [currentValue, setCurrentValue] = useState('');
    const [mistakeAmount, setMistakeAmount] = useState(0);
    // const [hiddenWordStr, setHiddenWordStr] = useState('hidden');
    const [usesLetterArr, setUsesLetterArr] = useState([]);
    const [guessedWord, setGuessedWord] = useState(Array(state.word.length).fill(''));

    useEffect(()=>{
        if ( guessedWord.every(letter => letter)) {
            setGameResult(true);
            history.push(routes.getEndScreen());
        }
        if (mistakeAmount === 6) {
            setGameResult(false);
            history.push(routes.getEndScreen());
        }

    }, [guessedWord, mistakeAmount, setGameResult])

    const handleSubmit = (event) => {
        let allEntry = [];

        if (currentValue && state.word.indexOf(currentValue) !== -1) {
            let pos = 0;

            while (true) {
                let foundPos = state.word.indexOf(currentValue, pos);
                if (foundPos === -1){ break}

                pos = foundPos + 1;
                allEntry = [...allEntry, foundPos];
            }

            if ( currentValue && !usesLetterArr.includes(currentValue)) {
                setUsesLetterArr([...usesLetterArr, currentValue])
            }
        } else {
            setUsesLetterArr([...usesLetterArr, currentValue])
            setMistakeAmount( value => value + 1);
        }

        if (allEntry.length !== 0) {
            let wordArr = [...guessedWord];
            allEntry.forEach(num => {
                wordArr[num] = state.word[num];
            });

            setGuessedWord(wordArr);
        }

        setCurrentValue('');

        event.preventDefault();

    };

    const handleChange = (event) => {
        setCurrentValue(event.target.value);
    };

    const currentMistakeState = useCallback(() => {
        let currentImage;

        switch (mistakeAmount) {
            case (1):
                currentImage =  mistake1;
                break;
            case (2):
                currentImage =  mistake2;
                break;
            case (3):
                currentImage =  mistake3;
                break;
            case (4):
                currentImage =  mistake4;
                break;
            case (5):
                currentImage =  mistake5;
                break;
            case (6):
                currentImage =  mistake6;
                break;
            default:
                currentImage = mistake0;
        }

        return currentImage;
    }, [ mistakeAmount ]);

    return (
        <div className="gameScreen">
            <div className="gameScreen__gameWrapper">
                <form onSubmit={handleSubmit} className="gameScreen__gameWrapper__form">
                    <div className="gameScreen__gameWrapper__form__pictureAndWord">
                        <div className="gameScreen__gameWrapper__form__mistakeProgress">
                            <img src={currentMistakeState()} alt=""/>
                        </div>
                        <div>
                            <div>
                                Буквы которые вы уже использовали:
                                <div>
                                    {usesLetterArr.map((elem, index) => {
                                        if (index !== usesLetterArr.length -1) {
                                            return elem + ', '
                                        } else {
                                            return elem
                                        }
                                    })}
                                </div>
                            </div>
                            <div>
                                Слово которое мы угадываем:

                            </div>
                            <div className="gameScreen__gameWrapper__form__hiddenWord">
                                {guessedWord && guessedWord.map((elem, index) => (
                                    <LetterButton letter={elem} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="gameScreen__gameWrapper__form__inputRow">
                        <BasicField
                            handleChange={handleChange}
                            inpValue={currentValue}
                            maxLength={1}
                            placeholder='Введите букву'
                        />
                        <input type="submit" value='Проверить букву'/>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default GameScreen;