import React from "react";
import { useGallowsState } from '../../hooks';
import { history } from "../../configureStore";
import routes from "../../consts/routes";

import liveMan from '../../assets/img/liveMan.jpg';
import deadMan from '../../assets/img/deadMan.png';

import './style.scss';

const EndScreen = () => {
    const { state } = useGallowsState();
    /**todo
     * принять пропсы в меню а так же удалить стили которые я не использую,
     * а так же сделать общие стили для обоих вариантов развития событий
     */
    const rollBack = () => {
          history.push(routes.getMain(), {respawn: true})
    };
    return (
        <div className='endScreen'>
            <div className='endScreen__wrapper'>
                {true ? (
                <div className='endScreen__wrapper__lose'>
                    <img
                        src={liveMan}
                        alt="liveMan"
                        className='endScreen__wrapper__lose__img'
                    />
                    <span className='endScreen__wrapper__lose__text'>
                        Мое поздравление)) Вы эрудит)
                    </span>
                </div>
                ) :
                    (
                        <div className='endScreen__wrapper__lose'>
                            <img
                                src={deadMan}
                                alt="dead man"
                                className='endScreen__wrapper__lose__img'
                            />
                            <div className='endScreen__wrapper__lose__text'>
                                <span>
                                    Эм... Ну... Вы сами видите что произошло.
                                Он прожил красочную жизнь, много букв повидал, и много что успел.
                                Все мы там будем.
                                Земля  ему чернилом....
                                Хотя... у меня тут завалялась машина времени, и мы сможем спасти его, рискнешь еще раз ?
                                </span>
                                <button
                                    className='endScreen__wrapper__lose__respawn'
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