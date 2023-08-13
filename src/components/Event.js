import { useState } from "react"

const Event = ({ event }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)
  
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed)
  }
  
  return (
    <li className="event">
      <div className="event-wrapper">
        <h2 className="event-summary">{event.summary}</h2>
        <p className="event-start">{new Date(event.start.dateTime).toString()}</p>
        <p className="event-location">{event.location}</p>
        {!isCollapsed && (
          <>
            <div className="event-details">
              <h3 className="event-about">About Event:</h3>
              <a className="event-link" href={event.htmlLink}>See details on Google Calendar</a>
              <p className="event-description">{event.description}</p>
            </div>
          </>
        )}
        <button
          className="event-details-btn"
          onClick={() => handleToggle()}>
          {isCollapsed ? 'show' : 'hide'} details
        </button>
      </div>
    </li>
  )
}

export default Event