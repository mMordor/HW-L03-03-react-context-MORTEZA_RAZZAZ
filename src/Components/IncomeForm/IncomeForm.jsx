import React from 'react'
import style from './IncomeForm.module.scss'
import { useState } from 'react'
import { useContext } from 'react'
import { IncomeContext } from '../../context'

function IncomeForm() {
    const {incomes,setIncomes} = useContext(IncomeContext)
    const [newincom,setNewincome] = useState({
        id : incomes.length,
        name : "",
        salary : 0,
        date : ""
    })

    
    const nameHandle = (e)=>{
        setNewincome(prev=>{return{...prev,name:e.target.value}})
    }

    const salaryHandle = (e)=>{
        setNewincome(prev=>{return{...prev,salary:Number.parseInt(e.target.value) }})
    }

    const dateHandle = (e)=>{
        setNewincome(prev=>{return{...prev,date:e.target.value}})
    }

    const formHandle = (e)=>{
        e.preventDefault();

        setIncomes((prev)=>{
            return[...prev,newincom]
        }) 
        
    }

  return (
    
        <form action="" className={style.form} >
            <div >
                <label htmlFor="name" >
                    Name of Source:
                </label>
                <input type="text" name='name' onChange={(e)=>nameHandle(e)}/>
            </div>
            <div>
                <label htmlFor="name" >
                    Salary:
                </label>
                <input type="number" name='name' onChange={e=>salaryHandle(e)}/>
            </div>
            <div className={style.date}>
                <label htmlFor="name" >
                    Date:
                </label>
                <input type="date" name='name'  onChange={e=>dateHandle(e)}/>
            </div>
            <button onClick={e=>formHandle(e)}> Confirm </button>
        </form>
    
  )
}

export default IncomeForm