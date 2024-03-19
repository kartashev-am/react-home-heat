import React from 'react'
import s from './Discern.module.scss'
import DiscernItems from './DiscernItems'
import data from './data'

export default function Discern() {


  return (
    <div className={s.discern}>

          <h1 className={s.discern__txt}>
            Что отличает наш бренд от других
          </h1>

      
      <div className={s.discern__cards}>

            {data.map((el)=>
                <DiscernItems
                el = {el}
                key = {el.id}
                />)
            }

      </div>
    </div>
  )
}
