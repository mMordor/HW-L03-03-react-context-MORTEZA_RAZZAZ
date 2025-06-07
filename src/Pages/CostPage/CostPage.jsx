import React from 'react'
import CostTab from '../../Components/CostTab/CostTab'
import Chart from '../../Components/Chart/Chart'
import TotalCounter from '../../Components/TotalCounter/TotalCounter'
import { useContext } from 'react'
import { CostContext } from '../../context'

function CostPage() {
  const {costs} = useContext(CostContext);
  return (
    <>
      <TotalCounter transaction={costs}/>
      <CostTab/>
      <Chart transaction={costs}/>
    </>
  )
}

export default CostPage