Feature: Specify number of events
  Scenario: When a user hasn't set a number of events to display, show all events
    Given user hasn't filtered events by a city
    When the user is on the home page of events
    Then a total number of events should be shown

  Scenario: When a user has set number of events to display
    Given the user is on the home page of events
    When the user sets a number in the number of events text box
    Then the user should see a that number of events in the list