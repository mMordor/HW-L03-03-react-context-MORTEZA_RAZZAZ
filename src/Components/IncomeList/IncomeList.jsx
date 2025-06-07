import React from 'react'
import style from './IncomList.module.scss'
import { useContext } from 'react'
import { IncomeContext } from '../../context'
import IncomeCard  from '../../Components/IncomeCard/IncomeCard'
import { useState } from 'react'
import IncomeForm from '../IncomeForm/IncomeForm'


function IncomeList() {
  const {incomes} = useContext(IncomeContext)

  const [isformcliked , setIsformcliked] = useState(false)


  const addbtnhandl = ()=>{
    setIsformcliked(prev=>!prev)
  }

  
  return (
    <>
        
        <div className={style.layout}>


          <div className={style.list}>
          {
            isformcliked ? 
              <IncomeForm/> 
            : 
            incomes.map((income)=>(
              <IncomeCard setisformclicked={setIsformcliked} id={income.id} name={income.name} salary={income.salary} date={income.date} key={income.id}/>
            ))
          
          }
          </div>
          <div className={style.btnTab}>
            {
            isformcliked? 
            <button onClick={addbtnhandl}>بازگشت به لیست منبع درآمد</button>
            :
            <button onClick={addbtnhandl}>اضافه کردن منبع درآمد</button>
            }
            
          </div>
        </div>
       
    </>
  )
}

export default IncomeList 