import React, {useState} from 'react'
import s from './Nav.module.scss'
import {NavLink} from 'react-router-dom'
import { useSelector} from 'react-redux'

import Likes from '../Likes/Likes'

import { BsHouse,  BsCart3, BsChatHeart} from "react-icons/bs";
import { LuBookMarked } from "react-icons/lu";


export default function Nav() {

    const [likes, setLikes] = useState(false)

    const quantityCart = useSelector(state => state.orders.orders.length)
    const quantityLikes = useSelector(state => state.likes.likes.length)

    const setActiveMenu = ({isActive})=>{
        return isActive ? s.menu__active : s.menu
    }
 
    return (
      <nav>
              <NavLink to = '/home' className={s.logo}>.home heat</NavLink>

          <div className={s.header__link}>
              <NavLink to = '/home' className={setActiveMenu}>Дом<div className={s.icon__bg}><BsHouse className={s.icon}/></div></NavLink>  
              <NavLink to = '/catalog' className={setActiveMenu}>Каталог<div className={s.icon__bg}><LuBookMarked className={s.icon}/></div></NavLink>
          </div>
          
          <div className={s.header__btn}>
              <NavLink to = '/cart' className={s.btn__header} data-count={quantityCart}><BsCart3/></NavLink>
              <button onClick = {() => setLikes(true)} className={s.btn__header} data-count={quantityLikes}><BsChatHeart/></button>
          </div>
              <Likes active = {likes} setActive = {setLikes} />
      </nav>
    )
}
