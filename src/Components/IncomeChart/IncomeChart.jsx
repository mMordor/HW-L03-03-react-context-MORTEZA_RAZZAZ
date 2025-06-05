import React from 'react'
import style from './IncomeChart.module.scss'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useContext } from 'react';
import { IncomeContext } from '../../context';


function IncomeChart() {
  const {incomes} = useContext(IncomeContext)
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#f2ff','#a23f','#ce14'];

  console.log(incomes)


  return (
    <div className={style.layout}>
      {
        incomes.length < 1 ?
        
        "آماری وجود ندارد"

        :

        <PieChart width={300} height={300}>
          <Pie
            data={incomes}
            innerRadius={50}
            cy={130}
            outerRadius={70}
            fill='#8884d8'
            paddingAngle={7}
            dataKey={"salary"}
            label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
          >
            {incomes.map((entry,index)=>(
              <Cell key={`cell-${index}`} fill={COLORS[index ]} />
            ))}

          </Pie>
        </PieChart>
        
      }
    </div>
  )
}

export default IncomeChart