import React from 'react'
import s from './Modal.module.scss'
import Btn from '../Btn/Btn'
import { useSelector, useDispatch } from 'react-redux'
import { BsHeart, BsHeartFill } from "react-icons/bs";

export default function Modal({active, setActive, product}) {

    const rootClases =[s.modal]

    const dispatch = useDispatch()

    const orders = useSelector(state => state.orders.orders) 
    const likes = useSelector(state => state.likes.likes)
    

    const addProduct  = (product) => {
        dispatch({type:'ADD_PRODUCT', payload: product})
    }

    const addLike = () => {
        dispatch({type:'ADD_LIKE', payload: product})
    }



    if (active){
        rootClases.push(s.active)
    }

    return (
        <div className={rootClases.join(' ')} onClick = {() => setActive(false)}>
            <div onClick = {e => e.stopPropagation()} className={s.modal__inner}>
                <div className={s.modal__close} onClick = {() => setActive(false)}>X</div>
                    <img src="" alt="" />
                    <h1>{product.title}</h1>

                        <p>{product.body}</p>
                                <button
                                onClick = {() => addProduct(product)}
                                disabled = {orders.find((item)=> item.id === product.id) ? true: false}>+
                                </button>

                                <button 
                                onClick = {() => addLike()} 
                                disabled = {likes.find((item)=> item.id === product.id) ? true: false}>
                                <BsHeart />
                                </button>

                    <span>{product.price}$</span>
            </div>

        </div>
    )
}
