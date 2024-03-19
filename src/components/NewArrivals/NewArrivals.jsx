import React from 'react'
import s from './NewArrivals.module.scss'
import { NavLink } from 'react-router-dom'

import img from '../../img/new__arrivals.jpg'

export default function NewArrivals() {
  return (
    <div className={s.NewArrivals}>
        <div className={s.NewArrivals__txt}>
          <h1>Все началось с маленькой идеи</h1>

          <p>Являясь глобальным брендом с местными корнями, наша история началась в небольшой студии в начале 2014 года</p>

           <NavLink to = '/catalog'>Открыть каталог</NavLink>
        </div>
     
        <img className={s.card} src={img} alt='красивая картинка'/>
      
    </div>
  )
}
