import React, { useState } from 'react'

const NumberOfEvents = ({ currentNOE, setCurrentNOE, setErrorAlert }) => {
  // const [totalNumberOfEvents, setTotalNumberOfEvents] = useState(32)

  const handleChange = e => {
    setCurrentNOE(e.target.value)

    let errorText
    if (e.target.value === 0 || isNaN(e.target.value)) {
      errorText = 'Please enter a number'
    } else if (e.target.value > 32 || e.target.value <= 0) {
      errorText = 'Please enter a number that is greater than 0 and less than 32'
    } else {
      errorText = ''
    }
    setErrorAlert(errorText)
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