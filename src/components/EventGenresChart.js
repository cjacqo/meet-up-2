import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip
} from 'recharts'

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([])
  const genres = [
    'React',
    'JavaScript',
    'Node',
    'jQuery',
    'Angular'
  ]
  const colors = [
    '#FFBE0B',
    '#FB5607',
    '#FF006E',
    '#8338EC',
    '#3A86FF'
  ]

  useEffect(() => {
    setData(getData())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [`${events}`])

  const getData = () => {
    const data = genres.map((g, i) => {
      const filteredEvents = events.filter(e => e.summary.includes(g))
      return {
        name: g,
        value: filteredEvents.length,
        fill: colors[i]
      }
    })
    return data
  }

  const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const RADIAN = Math.PI / 180
    const radius = outerRadius
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07
    return percent ? (
      <text
        x={x}
        y={y}
        fill={colors[index]}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null
  }

  
  return (
    <ResponsiveContainer width='99%' height={400}>
      <PieChart width={730} height={250}>
        <Pie
          data={data}
          cx='50%'
          cy='50%'
          dataKey='value'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
        />
        {
          data.map((e, i) => (
            <Cell
              key={`cell-${i}`}
              fill={e.fill} />
          ))
        }
        <Legend
          verticalAlign='bottom'
          layout='horizontal'
          formatter={(value, entry, index) => (
            <span style={{ color: entry.color }}>{entry.payload.name}</span>
          )} />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenresChart