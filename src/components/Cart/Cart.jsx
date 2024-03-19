import React, { useState, useEffect } from 'react'

import s from './Cart.module.scss'

import { useSelector, useDispatch } from 'react-redux'
import { FaRegSadCry } from "react-icons/fa";

import CartItem from './CartItem';
import SidebarCart from '../SidebarCart/SidebarCart';
import BtnDel from '../UI/Btn/BtnDel/BtnDel'


export default function Cart() {

    const dispatch = useDispatch()
    
    const orders = useSelector(state => state.orders.orders)
    const likes = useSelector(state => state.likes.likes)
    

    const [total, setTotal] = useState({
        p: 0
    })

    let preTotal =  0

    const delAllProduct  = () => dispatch({type:'DELETE_ALL_PRODUCT', payload: 0})
    
    useEffect(()=>
    {
        if (orders.length === 1) {setTotal({p: (orders.map((order)=> order.quantity * order.price))})}

        else if (orders.length >= 1) {
            preTotal = orders.map((order)=> order.quantity * order.price)
            setTotal({p : (preTotal.reduce((a,b) => a+b)), preTotal})
        }
        
    }, [orders])

    return (
        <div className={s.cart} >
            {/* <div>
                <SidebarCart
                zag = 'Избранное'
                likes = {likes}
                />
                <SidebarCart
                zag = 'Реклама' 
                />
            </div>  */}
            <div className={s.cart__inner}>
                <h2 className={s.cart__title}>КОРЗИНА</h2>
                
                {(orders.length < 1) 
                ?   <div className={s.cart__empty}>
                        <h1 > Тут пока пусто! <FaRegSadCry/> </h1>
                    </div>

                :<div className={s.cart__order}>
            
                    <div className={s.cart__btns}>
                        <BtnDel
                            onClick={()=> delAllProduct()}
                            children={'Очистеть все'}
                        />
                    </div>

                    <div className={s.cart__items}>
                            {orders.map((el)=>
                                <CartItem
                                el = {el}
                                key = {el.id}
                                />)
                            }
                    </div>
                    
                        <div className={s.cart__total}>Итого: {total.p}₽</div>

                </div>
                }
                    
            </div>

        </div>
    )
}
