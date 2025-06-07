import React from 'react'
import style from './CostTab.module.scss'
import { useContext } from 'react'
import { CostContext, IncomeContext } from '../../context'
import { useState } from 'react'
import CostForm from '../CostForm/CostForm'
import Cost from '../Cost/Cost'

function CostTab() {
  const {costs} = useContext(CostContext)

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
              <CostForm/> 
            : 

            costs.length < 1 ? "هنوز هزینه ای وحود ندارد" :
            costs.map((cost)=>(
              <Cost setisformclicked={setIsformcliked} id={cost.id} name={cost.name} desc={cost.desc} cost={cost.cost} date={cost.date} key={cost.id}/>
            ))
          
          }
          </div>
          <div className={style.btnTab}>
            {
            isformcliked? 
            <button onClick={addbtnhandl}>بازگشت به لیست هزینه ها</button>
            :
            <button onClick={addbtnhandl}>اضافه کردن هزینه</button>
            }
            
          </div>
        </div>
       
    </>
  )
}

export default CostTab