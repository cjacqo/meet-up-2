/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber'
import { render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import { getEvents } from '../api'

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature')

defineFeature(feature, test => {
  test('When a user hasn\'t set a number of events to display, show all events', ({ given, when, then }) => {
    let AppComponent, AppDOM, EventListDOM, EventListItems
    given('user hasn\'t filtered events by a city', () => {
      AppComponent = render(<App />)
    })

    when('the user is on the home page of events', () => {
      AppDOM = AppComponent.container.firstChild
      EventListDOM = AppDOM.querySelector('#event-list')
    })

    then('a total number of events should be shown', async () => {
      EventListItems = await within(EventListDOM).findAllByRole('listitem')
      expect(EventListItems.length).toBe(32)
    })
  })

  test('When a user has set number of events to display', ({ given, when, then }) => {
    let AppComponent, AppDOM
    given('the user is on the home page of events', () => {
      AppComponent = render(<App />)
    })

    when('the user sets a number in the number of events text box', async () => {
      const user = userEvent.setup()
      AppDOM = AppComponent.container.firstChild
      const NumberOfEventsDOM = AppDOM.querySelector('#number-of-events')
      const numberTextBox = within(NumberOfEventsDOM).queryByRole('textbox')
      await user.type(numberTextBox, '{backspace}{backspace}10')
    })

    then('the user should see a that number of events in the list', async () => {
      const EventsListDOM = AppDOM.querySelector('#event-list')
      const EventListItems = await within(EventsListDOM).findAllByRole('listitem')
      expect(EventListItems.length).toBe(10)
    })
  })
})