/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from 'jest-cucumber'
import { render, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature')

defineFeature(feature, test => {
  test('When user hasn\'t selected an event to learn more details', async ({ given, when, then }) => {
    let AppComponent, AppDOM, EventListDOM, eventListItems, showDetailsButton
    given('user hasn\'t selected an event', async () => {
      AppComponent = render(<App />)
      AppDOM = AppComponent.container.firstChild
      EventListDOM = AppDOM.querySelector('#event-list')
      eventListItems = await within(EventListDOM).findAllByRole('listitem')
    })

    when('the user clicks/selects an event that isn\'t expanded', async () => {
      const user = userEvent.setup()
      showDetailsButton = await within(eventListItems[0]).findByText('show details')
      await user.click(showDetailsButton)
    })

    then('the user should be shown details about said event', async () => {
      const showDetails = await EventListDOM.querySelector('.event-details')
      expect(showDetails).toBeInTheDocument()
    })
  })

  test('When a user has selected an event to expand, but re-selects it', ({ given, when, then }) => {
    let AppComponent, AppDOM, EventListDOM, eventListItems, showDetails, showDetailsButton, hideDetailsButton, expandedEvent
    given('user has re-selected an event', async () => {
      AppComponent = render(<App />)
      AppDOM = AppComponent.container.firstChild
      EventListDOM = AppDOM.querySelector('#event-list')
      eventListItems = await within(EventListDOM).findAllByRole('listitem')

      const user = userEvent.setup()
      showDetailsButton = await within(eventListItems[0]).findByText('show details')
      await user.click(showDetailsButton)
      showDetails = await EventListDOM.querySelector('.event')
      expect(showDetails).toBeInTheDocument()
    })

    when('the user has selected an already expanded event', async () => {
      const user = userEvent.setup()
      expandedEvent = EventListDOM.querySelector('.event')
      hideDetailsButton = await within(expandedEvent).findByText('hide details')
      await user.click(hideDetailsButton)
    })

    then('the details of the event should be hidden', () => {
      const details = within(expandedEvent).queryByTestId('description')
      expect(details).not.toBeInTheDocument()
    })
  })
})