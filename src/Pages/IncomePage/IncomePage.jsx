import React from 'react'
import IncomeList from '../../Components/IncomeList/IncomeList'
import Chart from '../../Components/Chart/Chart'
import TotalCounter from '../../Components/TotalCounter/TotalCounter'
import { useContext } from 'react'
import { IncomeContext } from '../../context'





function IncomePage() {
 const {incomes} = useContext(IncomeContext);
 

  return (
    <>
      <TotalCounter transaction={incomes}/>
      <IncomeList/>
      <Chart transaction={incomes}/>
    </>
  )
}

export default IncomePage