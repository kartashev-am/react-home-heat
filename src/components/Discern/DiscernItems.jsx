import React from 'react'
import s from './DiscernItems.module.scss'

export default function DiscernItems({el}) {
  return (
    <div className={s.card}>

        <span>
          {el.icon}
        </span>

        <h1>
          {el.title}
        </h1>

        <p>
          {el.subtitle}
        </p>

    </div>
  )
}
