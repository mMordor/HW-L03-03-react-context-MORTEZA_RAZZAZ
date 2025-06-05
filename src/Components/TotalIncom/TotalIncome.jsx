import React from 'react'
import style from './TotalIncome.module.scss'
import { useContext } from 'react'
import { useState } from 'react'
import { IncomeContext } from '../../context';
import { useEffect } from 'react';


function TotalIncom() {
  const {incomes} = useContext(IncomeContext);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    let sum = 0;

    incomes.forEach((income)=>{
      sum += income.salary
    });

    setTotal(sum)
  },[incomes])

  return (
    <div className={style.layout}> 
      
        <h1>{total.toLocaleString()} T</h1>
      
      <h3>درآمد کل</h3>
    </div>
  )
}

export default TotalIncom