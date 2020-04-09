import React from "react";
import { useGallowsState } from '../../hooks';
import { history } from "../../configureStore";
import routes from "../../consts/routes";

import liveMan from '../../assets/img/liveMan.jpg';
import deadMan from '../../assets/img/deadMan.png';

import './style.scss';

const EndScreen = () => {
    const { state, setNewRespawn } = useGallowsState();

    const rollBack = () => {
        setNewRespawn();
        history.push(routes.getMain())
    };

    return (
        <div className='endScreen'>
            <div className='endScreen__wrapper'>
                {state.result ? (
                <div className='endScreen__wrapper__container'>
                    <img
                        src={liveMan}
                        alt="liveMan"
                        className='endScreen__wrapper__container__img'
                    />
                    <span className='endScreen__wrapper__container__text'>
                        Фух, я выжил, так то это нормально, ведь... обратная перспектива была
                        не особо желательной для меня, ты то молодец, но знаешь, тут многие слова
                        отгадывали, и что-то , мягко говоря, не у всех получалось, рад что ты не из таких, спасибо)
                    </span>
                </div>
                ) :
                    (
                        <div className='endScreen__wrapper__container'>
                            <img
                                src={deadMan}
                                alt="dead man"
                                className='endScreen__wrapper__container__img'
                            />
                            <div className='endScreen__wrapper__container__text'>
                                <span>
                                    Эм... Ну... Вы сами видите что произошло.
                                Он прожил красочную жизнь, много букв повидал, и много что успел.
                                Все мы там будем.
                                Земля  ему чернилом....
                                Хотя... у меня тут завалялась машина времени, и мы сможем спасти его, рискнешь еще раз ?
                                </span>
                                <button
                                    className='endScreen__wrapper__container__respawn'
                                    onClick={rollBack}
                                >
                                    Откатить время назад
                                </button>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
};

export default EndScreen;