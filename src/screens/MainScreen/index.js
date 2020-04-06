import React, { useState } from "react";
import { Link } from "react-router-dom";
import routes from "../../consts/routes";

import './style.scss';

const MainScreen = () => {
    const [visBlock, setVisBlock] = useState(false);
    console.log(visBlock);
    return(
        <div className='mainScreen'>
            {
                /*
                кста тут картинку вставить можно с висилицей для того что бы пространство занять как-то
                 */
            }
            <div className='mainScreen__menu'>
                <Link
                    className='mainScreen__menu__item'
                    to={routes.getGameScreen()}
                >
                    Играть
                </Link>
                <div
                    className='mainScreen__menu__item'
                    onClick={()=> setVisBlock(value => !value)}>
                    Правила
                </div>
                {visBlock && (
                    <div className='mainScreen__menu__rules'>
                        <span>
                            1. Вы загадываете слово или используете наш генератор рандомных слов.
                        </span>
                        <span>
                            2. Дальше по букве вы стараетесь отгадать слово. В случае верно отгаданой буквы вы приближаетесь к розгадке слова, в противном же случае вы обрекаете себя на гибель, только не переживайте, вы сразу не проиграете, это будет постепенно.
                        </span>
                        <span>
                            3. Максимум ошибиться вы сможете 5 раз, шестой раз уже будет последним, и на этом игра закончится.
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainScreen;