import React from 'react'
import style from './TotalCostInMonth.module.scss'
import { useContext } from 'react'
import { useState } from 'react'
import { CostContext } from '../../context';
import { useEffect } from 'react';

function TotalCostInMonth() {
  const {costs} = useContext(CostContext);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    let sum = 0;

    costs.forEach((cost)=>{
      sum += cost.cost
    });

    setTotal(sum)
  },[costs])

  return (
    <div className={style.layout}> 
      
        <h1>{total.toLocaleString()} T</h1>
      
      <h3>هزینه کل</h3>
    </div>
  )
}

export default TotalCostInMonth