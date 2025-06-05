import React from 'react'
import style from './CostForm.module.scss'
import { useState } from 'react'
import { useContext } from 'react'
import { CostContext } from '../../context'

function CostForm() {
    const {costs,setCosts} = useContext(CostContext)
    const [newCost,setNewCoste] = useState({
        id : costs.length,
        name : "",
        cost : 0,
        desc:  "",
        date : ""
    })

    
    const nameHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,name:e.target.value}})
    }
    const salaryHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,cost:Number.parseInt(e.target.value) }})
    }
    const dateHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,date:e.target.value}})
    }
    const descHandle = (e)=>{
        setNewCoste(prev=>{return{...prev,desc:e.target.value}})
    }


    const formHandle = (e)=>{
        e.preventDefault();

        setCosts((prev)=>{
            return[...prev,newCost]
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
                    Cost:
                </label>
                <input type="number" name='name' onChange={e=>salaryHandle(e)}/>
            </div>
            <div className={style.date}>
                <label htmlFor="name" >
                    Description:
                </label>
                <input type="text" name='name'  onChange={e=>descHandle(e)}/>
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

export default CostForm