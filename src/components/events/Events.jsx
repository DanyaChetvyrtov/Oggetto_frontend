import React, { useState, useContext } from 'react';
import cl from './Events.module.css';
import { Context } from "../../index";
import soloLogo from '../../static/imgs/user.svg';
import comandLogo from '../../static/imgs/users02.svg';
import MyCalendar from "../UI/myCalendar/MyCalendar";
// import Modal from "../modal/Modal"
import MyModal from '../UI/modal/MyModal'
import OgButton from "../UI/ogButton/OgButton";

export default function Events() {
    const { events } = useContext(Context);


    const [isActive, setIsActive] = useState(false) // ! Норм модалка 


    return (
        <div className={cl.profile__container}>
            <div className={cl.profile__content}>
                <div className={cl.user__info__container}>
                    <div className={cl.user__info__container__item1st}>
                        <h2 className={cl.user__info__container__item1st__header}>Все события</h2>
                        {events && events.map((event, index) => (
                            <div className={cl.event__card} key={index}>
                                <div
                                    className={cl.event__card__content}
                                    style={{
                                        '--background-image': `url(${event.type === 'командное' ? comandLogo : soloLogo})`
                                    }}
                                >
                                    <div>
                                        <h3>{event.description}</h3>
                                        <p style={{paddingBlock: 5}}>Правила: {event.rules}</p>
                                        <p>{event.date}</p>
                                        <a
                                            className={cl.links}
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setIsActive(true) // ! Норм модалка 
                                            }}
                                        >
                                            Подробнее
                                        </a>

                                    </div>
                                </div>

                                <button className={cl.event__reg__btn}>Записаться</button>
                            </div>
                        ))}
                    </div>
                    <div className={cl.user__info__container__item2sc}>
                        <MyCalendar/>
                    </div>
                </div>
                <div className={cl.user__achievements}></div>
            </div>

            {/* // ! Норм модалка  */}
            
            <MyModal isActive={isActive} setIsActive={setIsActive}> 
                Крутой текст для модалки
            </MyModal>
            

        </div>
    );
}
