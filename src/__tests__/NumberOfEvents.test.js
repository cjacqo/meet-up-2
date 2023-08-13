/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-render-in-setup */
import { render } from '@testing-library/react'
import NumberOfEvents from '../components/NumberOfEvents'

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
})