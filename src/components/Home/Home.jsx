import React from 'react'

import Header from '../Header/Header'
import Discern from '../Discern/Discern'
import NewArrivals from '../NewArrivals/NewArrivals'
import Choose from '../Choose/Choose'

import s from './Home.module.scss'

export default function Home() {
   
  return (
    <div className={s.home}>
      <Header/>
      <Discern/>
      <NewArrivals/>
      <Choose/> 
    </div>
  )
}
