import React, { useContext } from 'react'
import {Context} from "../../index";
import cl from './Profile.module.css'
import profileImg from '../../static/imgs/man.png'

export default function Profile() {
  const {store} = useContext(Context);

  return (
    <div className={cl.profile__container}>
      <div className={cl.profile__content}>
        <div className={cl.user__info__container}>
          <img className={cl.profile__img} src={profileImg} alt="icon" />
          <div className={cl.user__info}>
            <h2>{localStorage.getItem('username')}</h2>
            <div>Возраст: 0</div>
            <div>О себе: мб очень много текста с бд о чуваке</div>
          </div>
        </div>
        <div className={cl.user__achievements}></div>
      </div>
    </div>
  )
}
