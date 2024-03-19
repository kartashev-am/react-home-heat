import React from 'react'
import { useState } from 'react'

import CardProducts from '../CardProducts/CardProducts'
import Select from '../UI/Select/Select';

import item from '../../data/item.json'
import categorys from './categorys'

import s from './Products.module.scss'

export default function Products() {
    
  const [selectedSort, setSelectedSort] = useState('')
  const [items, setItems] = useState(item)

  const sortProduct = (sort) =>{

    switch (sort) {
      case 'ascending':
        setSelectedSort(sort)
        setItems([...items].sort((a,b)=>a.price - b.price))
        break

      case 'descending':
        setSelectedSort(sort)
        setItems([...items].sort((a,b)=>b.price - a.price))
        break
      }
  } 

  const filterProduct = (filter) =>{
    if(filter === 'all'){
      setItems([...item])
    }
    else{
      setItems([...item].filter((item)=> item.category===filter)) 
    }
  }
  
  return (
    <div className={s.products}>
        <div className={s.products__header}>
            <Select
              value= {selectedSort}
              onChange= {sortProduct}
              options = {[
                {value: 'ascending', name: 'По возрастанию'}
                ,{value: 'descending', name: 'По убыванию'}
              ]}
            />

            {categorys.map((category)=> 
              <button
              onClick = {()=>filterProduct(category.filter)}
              className = {s.btn__category}
              >
                {category.title}
              </button>
            )}
        </div>
        
        <div className={s.products__inner}>
          
        {items.map((el) =>
          <CardProducts 
          product = {el}
          key = {item.id}
          />
        )}
        </div>
    </div>
  )
}
