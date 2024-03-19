import React from 'react'
import s from './BtnDel.module.scss'

export default function BtnDel({children, ...props}) {
  return (
    <button {...props} className={s.btn}>
        {children}
    </button>
  )
}
