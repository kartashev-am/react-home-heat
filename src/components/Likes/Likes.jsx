import React, { useState, useEffect } from 'react'
import s from './Likes.module.scss'
import { useSelector, useDispatch } from 'react-redux'

import { FaRegSadCry } from "react-icons/fa"
import { BsXLg } from "react-icons/bs";

import LikesItem from './LikesItem';
import BtnDel from '../UI/Btn/BtnDel/BtnDel';

export default function Likes({active, setActive}) {

    const rootClases =[s.likes]

    if (active){
        rootClases.push(s.active)
    }

    const dispatch = useDispatch()
    const likes = useSelector(state => state.likes.likes)
    const delAllLike  = () => dispatch({type:'DELETE_ALL_LIKE', payload: 0})


    return (
        <div className={rootClases.join(' ')} onClick = {() => setActive(false)}>
            <div onClick = {e => e.stopPropagation()} className={s.likes__inner}>
                <div className={s.inner__header}>
                    <h1>Избранное</h1>
                    <div className={s.likes__close} onClick = {() => setActive(false)}><BsXLg/></div>
                </div>
                <div className={s.likes__btns__del}>{(likes.length < 1) ? <></> : <BtnDel onClick={()=> delAllLike()} children={'Очистеть все'}/>}</div>

                

                {(likes.length < 1) 
                ? <div className={s.likes__empty}><h1> Тут пока пусто! <FaRegSadCry/> </h1></div>

                :<div className={s.likes__items}>
                    {likes.map((el)=>
                    
                    <LikesItem
                    el = {el}
                    id = {el.id}
                    />   
                    )}

                </div>
                } 
            </div>

        </div>
    )
}
