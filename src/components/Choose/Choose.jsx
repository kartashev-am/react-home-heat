import React from 'react'
import s from './Choose.module.scss'

export default function () {
  return (
    <div className={s.choose}>
      <div className={s.choose__inner} >
        <div className={s.choose__txt}>
            <h1>Присоединяйтесь к клубу и получайте бонусы!</h1>
            
            <p>Подпишитесь на нашу рассылку и получайте эксклюзивные предложения о новых распродажах и многом другом</p>

              <div className={s.choose__mail}>
                <input type="text" /> <button>Подписаться</button>
              </div>
        </div>
      </div>
    </div>
  )
}
