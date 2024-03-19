import React, { Children } from 'react'
import s from './Btn.module.scss'

export default function Btn({children, ...props}) {
  return (
    <button {...props} className={s.btn}>
        {children}
    </button>
  )
}
