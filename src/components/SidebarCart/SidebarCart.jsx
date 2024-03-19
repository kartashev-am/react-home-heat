import React from 'react'
import s from './SidebarCart.module.scss'
import { useSelector} from 'react-redux'
import LikesItem from '../Likes/LikesItem'

export default function SidebarCart({zag, likes}) {



  return (
    <div className={s.sidebarCart}>
            <h1>{zag}</h1>
            
              {
                likes?.map((like)=>
                  <LikesItem
                  id = {like.id}
                  el ={like}
                  />
                )
              }
              
    </div>
  )
}
