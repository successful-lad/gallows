import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGallowsState } from '../../hooks';
import routes from "../../consts/routes";

import './style.scss';

const MainScreen = () => {
    const [visBlock, setVisBlock] = useState(false);

    const { state } = useGallowsState();

    return(
        <div className='mainScreen'>
            {
                /*todo
                кста тут картинку вставить можно с висилицей для того что бы пространство занять как-то
                 */
            }
            <div className='mainScreen__menu'>
                {state.respawn  && (
                    <div className='mainScreen__menu__hiddenBlock'>
                        гкхм... Добрый день, надеюсь у вас получиться отгадать слово, а то предыдущий
                        чуть не устроил геноцид... всмысле был не такой достойным как вы, конечно же.
                    </div>
                )}
                <Link
                    className='mainScreen__menu__item'
                    to={routes.getConfigureScreen()}
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