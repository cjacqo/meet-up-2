import React, { useState } from 'react'

const NumberOfEvents = () => {
  const [totalNumberOfEvents, setTotalNumberOfEvents] = useState(32)

  return (
    <div id='numberOfEvents'>
      <input type='text' value={totalNumberOfEvents} />
    </div>
  )
}

export default NumberOfEvents