import React, { useState } from 'react'

const NumberOfEvents = ({ currentNOE, setCurrentNOE }) => {
  // const [totalNumberOfEvents, setTotalNumberOfEvents] = useState(32)

  const handleChange = e => {
    setCurrentNOE(e.target.value)
  }

  return (
    <div id='number-of-events'>
      <input
        type='text'
        value={currentNOE}
        onChange={handleChange} />
    </div>
  )
}

export default NumberOfEvents