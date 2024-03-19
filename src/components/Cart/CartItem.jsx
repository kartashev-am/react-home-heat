import React  from 'react'
import s from './CartItem.module.scss'
import { useDispatch } from 'react-redux'
import {BsXCircle} from 'react-icons/bs'


export default function CartIem({el}) {

  const dispatch = useDispatch()

  const delProduct  = (id) => dispatch({type:'DELETE_PRODUCT', payload: id})
  const upProduct  = (id) => dispatch({type:'INCREASE_QUANTITY', payload: id})
  const downProduct  = (id) => dispatch({type:'DESCREASE_QUANTITY', payload: id})




  return (
    <>
        <div className={s.cart__item}>
            <img className={s.item__img} src={el.img} alt={el.title}/>

            <div className={s.item__info}>
                <h1>{el.title} </h1>
                <span>{el.price} ₽</span>
                
                <div className={s.item__quantity}>
                    <button onClick={()=> 
                    downProduct(el.id)}> - </button>
                    
                    <span>{el.quantity} </span>

                    <button onClick={()=> 
                    upProduct(el.id)}> + </button>
                </div>

            </div>

            <span className={s.item__pretotal}>{el.quantity*el.price} ₽</span>
            <button onClick={()=> delProduct(el.id)} className={s.btn__del}><BsXCircle/></button> 
                                          
        </div>
    </>
  )
}


