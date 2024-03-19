import React from 'react'
import s from './Header.module.scss'
import pic from '../../img/header.jpg'


export default function Header() {

  return (
    <header className={s.header}>

        <div className={s.txt__main}>
              <h1 className={s.header__text}>Откройте для себя неподвластную времени мебель, в которой 
              <span className={s.text__green}>комфорт</span> сочетается со стилем</h1>
        </div>     

        <div className={s.header__img}>
            <img src={pic} alt="Карсивый диван" />
        </div>

    </header>
  )
}
