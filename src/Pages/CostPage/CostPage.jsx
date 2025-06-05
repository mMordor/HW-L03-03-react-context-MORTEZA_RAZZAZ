import React from 'react'
import IncomeList from '../../Components/IncomeList/IncomeList'
import CostTab from '../../Components/CostTab/CostTab'
import TotalCostInMonth from '../../Components/TotalCostInMonth/TotalCostInMonth'
import CostChart from '../../Components/CostChart/CostChart'

function CostPage() {
  return (
    <>
      <TotalCostInMonth/>
      <CostTab/>
      <CostChart/>
    </>
  )
}

export default CostPage