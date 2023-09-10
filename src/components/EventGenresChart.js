import { useState, useEffect } from 'react'
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
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

  useEffect(() => {
    setData(getData())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [`${events}`])

  const getData = () => {
    const data = genres.map(g => {
      const filteredEvents = events.filter(e => e.summary.includes(g))
      return {
        name: g,
        value: filteredEvents.length
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
        fill='#8884D8'
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline='central'
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null
  }

  
  return (
    <ResponsiveContainer width='99%' height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey='value'
          fill='#8884D8'
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenresChart