import React from 'react'
import s from './LikesItem.module.scss'
import { BsHeartbreakFill } from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux'
import { BsCart3, BsCheckLg} from "react-icons/bs";

export default function LikesItem({el}) {

    const dispatch = useDispatch()
    
    const orders = useSelector(state => state.orders.orders)
    
    const addProduct = (el) => {
        dispatch({type:'ADD_PRODUCT', payload: el})
        delLike(el.id)
    }

    const delLike  = (id) => dispatch({type:'DELETE_LIKE', payload: id})

    return (
        <div className={s.likesItem}>

            <div className={s.item__info}>
                
                <div className={s.item__img}>
                    <img src={el.img} alt={el.title}/>
                </div>

                <h1>{el.title}</h1>
                <span>{el.price} ₽</span>
            </div>

            <div className={s.likes__btn}>
            <button onClick={()=> delLike(el.id)}><BsHeartbreakFill/></button>
            <button 
            onClick = {() => addProduct(el)}
            disabled = {orders.find((item)=> item.id === el.id) ? true: false}
            children = {orders.find((item)=> item.id === el.id) ?<BsCheckLg/>: <BsCart3/>}
            />
            </div>
                        
        </div>
    )
}
