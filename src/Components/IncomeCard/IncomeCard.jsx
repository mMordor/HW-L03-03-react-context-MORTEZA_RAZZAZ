import React from 'react'
import style from './IncomeCard.module.scss'
import { FaTrashAlt ,FaPencilAlt} from "react-icons/fa";
import { useContext } from 'react';
import { IncomeContext } from '../../context';


function IncomeCard({name,salary,date,id}) {

  const {incomes,setIncomes} = useContext(IncomeContext);


  
  const removeHandel = ()=>{
    const newIncomes = incomes.filter((income)=> income.id !== id);

    setIncomes(newIncomes)

  }

  return (
    <div className={style.card}>
        <div>
             {date}
        </div>
        <div>
            {salary}
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

export default IncomeCard