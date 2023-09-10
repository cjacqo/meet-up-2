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

  return (
    <ResponsiveContainer width='99%' height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey='value'
          fill='#8884D8'
          labelLine={false}
          label
          outerRadius={130}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default EventGenresChart