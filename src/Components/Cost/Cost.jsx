import React from 'react'
import style from './Cost.module.scss'
import { FaTrashAlt ,FaPencilAlt} from "react-icons/fa";
import { useContext } from 'react';
import { CostContext, IncomeContext } from '../../context';

function Cost({id,cost,name,date,desc}) {
  
    const {costs,setCosts} = useContext(CostContext);


  
    const removeHandel = ()=>{
      const newcosts = costs.filter((cost)=> cost.id !== id);
  
      setCosts(newcosts)
  
    }
  
    return (
      <div className={style.card}>
          <div>
                {date}
          </div>
          <div>
                {cost}
          </div>  
          <div>
                {desc}
          </div>  
          <div>
                {name}
          </div>
  
          <div className={style.optionsbtn}>
  
              <FaTrashAlt size={20} className={style.btn} onClick={removeHandel}/>
  
          </div>
  
      </div>
    )
}

export default Cost