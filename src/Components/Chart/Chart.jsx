import React from 'react'
import style from './Chart.module.scss'
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


function Chart({transaction}) {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042','#f2ff','#a23f','#ce14'];

  console.log(transaction)
  return (
    <div className={style.layout}>
      {
        transaction.length < 1 ?
        
        "آماری وجود ندارد"

        :

        <PieChart width={300} height={300}>
          <Pie
            data={transaction}
            innerRadius={50}
            cy={130}
            outerRadius={70}
            fill='#8884d8'
            paddingAngle={7}
            dataKey={"value"}
            label={({name,percent})=>`${name} ${(percent * 100).toFixed(0)}%`}
          >
            {transaction.map((entry,index)=>(
              <Cell key={`cell-${index}`} fill={COLORS[index ]} />
            ))}

          </Pie>
        </PieChart>
        
      }
    </div>
  )
}

export default Chart