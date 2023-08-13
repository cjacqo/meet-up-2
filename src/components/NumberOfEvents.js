import React, { useState } from 'react'

const NumberOfEvents = () => {
  const [totalNumberOfEvents, setTotalNumberOfEvents] = useState(32)

  const handleChange = e => {
    setTotalNumberOfEvents(e.target.value)
  }

  return (
    <div id='numberOfEvents'>
      <input
        type='text'
        value={totalNumberOfEvents}
        onChange={handleChange} />
    </div>
  )
}

export default NumberOfEvents