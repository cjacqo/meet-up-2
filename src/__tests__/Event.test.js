/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from '@testing-library/react'
import Event from '../components/Event'
import mockData from '../mock-data'
import { userEvent } from '@testing-library/user-event'
import { extractLocations, getEvents } from '../api'

describe('<Event />', () => {
  let EventComponent
  const allEvents = mockData

  beforeEach(() => {
    EventComponent = render(<Event event={mockData[0]} />)
  })

  test('renders the event component', () => {
    expect(EventComponent).toBeDefined()
  })

  test('has an element that represents an event', () => {
    expect(EventComponent.queryByRole('listitem')).toBeInTheDocument()
  })

  test('renders event location', () => {
    expect(EventComponent.queryByText(allEvents[0].location)).toBeInTheDocument()
  })

  test('renders event details button with the title (show details)', () => {
    expect(EventComponent.queryByText('show details')).toBeInTheDocument()
  })
})