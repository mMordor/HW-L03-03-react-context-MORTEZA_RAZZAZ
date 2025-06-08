import React from 'react'
import { useState } from 'react';
import { createContext } from "react";
import { Cost, Income } from '../Constant/Objects'
import { useEffect } from 'react';


const IncomeContext = createContext();
const CostContext = createContext();


function LayContextsProvider({children}) {

    const [incomes,setIncomes] = useState([]);
    const [costs,setCosts] = useState([]);
    const [costcategories,setCostCategories] = useState(["test1","test2"]);
    const [incomecategories,setIncomeCategories] = useState(["test1","test2"]);
    
    const incomes_template = [
      new Income({id:0,name:"سربازی",category:"test2",value:5900000,date:"1402/02/1"}),
      new Income({id:1,name:"گیمنت",category:"test1",value:3000000,date:"1401/04/13"}),
    ]
    const costs_template = [
      new Cost({id:0,name:"گیمنت",category:"test1",value:120000,date:"1402/02/1",desc:"بازی"}),
      new Cost({id:1,name:"غدا",category:"test2",value:220000,date:"1401/04/13",desc:"پاستا"}),
    ]    


    useEffect(()=>{
      setIncomes(incomes_template)
      setCosts(costs_template)
    },[])


  return (
    <IncomeContext.Provider value={{incomes,setIncomes,incomecategories,setIncomeCategories}}>
        <CostContext.Provider value={{costs,setCosts,costcategories,setCostCategories}}>
            {children}
        </CostContext.Provider>
    </IncomeContext.Provider>
  )
}

export default LayContextsProvider

export {CostContext,IncomeContext}