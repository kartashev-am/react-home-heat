import React, {useState} from 'react'
import s from './CardProducts.module.scss'
import Modal from '../UI/Modal/Modal'
import {useDispatch, useSelector} from 'react-redux'
import { BsHeart, BsHeartFill, BsCart3, BsCheckLg} from "react-icons/bs";


export default function CardProducts({product}) {

    const [modal, setModal] = useState(false)
    const [repiteLike, setRepiteLike] = useState(false)

    const dispatch = useDispatch()

    const orders = useSelector(state => state.orders.orders)
    const likes = useSelector(state => state.likes.likes)

    const addProduct = () => {
        dispatch({type:'ADD_PRODUCT', payload: product})
    }

    const addLike = () => {
        dispatch({type:'ADD_LIKE', payload: product})
        setRepiteLike(true)
    }

    const delLike = (id) => {
        dispatch({type:'DELETE_LIKE', payload: id})
        setRepiteLike(false)
    }

    return (
      <article>
          <Modal active={modal} setActive={setModal} product={product}/>
          
          <div className={s.cardProducts}>

            <div className={s.cardProducts__img}
                /* onClick = { () => {setModal(true)} } */ >
                <img src={product.img} alt="Красивое фото" />

                <button
                className = {s.btn__like}
                onClick = {repiteLike ? ()=> delLike(product.id) : () => addLike()} 
                children = {likes.find((item)=> item.id === product.id) ?  <BsHeartFill color='red'/> :  <BsHeart />}
                />
                </div>

                    <div className={s.cardProducts__body}>
                        <div className={s.cardProducts__info}>
                            <h1>{product.title}</h1>
                            <p> {product.price} <span>₽</span></p>
                        </div>
              
                    <button 
                    onClick = {() => addProduct()}
                    disabled = {orders.find((item)=> item.id === product.id) ? true: false}
                    children = {orders.find((item)=> item.id === product.id) ? <BsCheckLg/> : <BsCart3 />}
                    />
                </div>
          </div>
      </article>
    )
}
