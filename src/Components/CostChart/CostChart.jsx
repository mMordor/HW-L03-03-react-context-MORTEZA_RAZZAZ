import React from 'react'
import style from './CostChart.module.scss'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useContext } from 'react';
import { CostContext } from '../../context';


function CostChart() {

  const {costs} = useContext(CostContext)
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#f2ff','#a23f','#ce14'];


  return (
    <div className={style.layout}>

      {
        costs.length < 1 ?
        
        "آماری وجود ندارد"

        :

        <PieChart width={300} height={300}>
          <Pie
            data={costs}
            innerRadius={50}
            cy={130}
            outerRadius={70}
            fill='#8884d8'
            paddingAngle={7}
            dataKey={"cost"}
            label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
          >
            {costs.map((entry,index)=>(
              <Cell key={`cell-${index}`} fill={COLORS[index ]} />
            ))}

          </Pie>
        </PieChart>
        
      }
    </div>
  )
}

export default CostChart