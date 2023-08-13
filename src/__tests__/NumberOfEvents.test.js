/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from '@testing-library/react'
import NumberOfEvents from '../components/NumberOfEvents'
import userEvent from '@testing-library/user-event'

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent

  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents />)
  })
  
  test('has an element with role of "textbox"', () => {
    expect(NumberOfEventsComponent.queryByRole('textbox')).toBeInTheDocument()
  })

  test('determine if the default value of the textbox field is 32', () => {
    const textbox = NumberOfEventsComponent.queryByRole('textbox')
    expect(textbox).toHaveValue('32')
  })

  test('test if the user can change the number of events', async () => {
    const user = userEvent.setup()
    const textbox = NumberOfEventsComponent.queryByRole('textbox')
    await user.type(textbox, '{backspace}{backspace}10')
    expect(textbox).toHaveValue('10')
  })
})