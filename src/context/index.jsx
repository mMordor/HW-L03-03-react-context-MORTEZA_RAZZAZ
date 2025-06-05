import React from 'react'
import { useState } from 'react';
import { createContext } from "react";
import { Cost, Income } from '../Constant/Objects'
import { useEffect } from 'react';


export const IncomeContext = createContext();
export const CostContext = createContext();


function LayContextsProvider({children}) {

    const [incomes,setIncomes] = useState([])
    const [costs,setCosts] = useState([])


    const incomes_template = [
      new Income({id:0,name:"سربازی",salary:5900000,date:"1402/02/1"}),
      new Income({id:1,name:"گیمنت",salary:3000000,date:"1401/04/13"}),
    ]
    const costs_template = [
      new Cost({id:0,name:"گیمنت",cost:120000,date:"1402/02/1",desc:"بازی"}),
      new Cost({id:1,name:"غدا",cost:220000,date:"1401/04/13",desc:"پاستا"}),
    ]


    useEffect(()=>{
      setIncomes(incomes_template)
      setCosts(costs_template)
    },[])
    
  return (
    <IncomeContext.Provider value={{incomes,setIncomes}}>
        <CostContext.Provider value={{costs,setCosts}}>
            {children}
        </CostContext.Provider>
    </IncomeContext.Provider>
  )
}

export default LayContextsProvider