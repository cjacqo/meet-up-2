Feature: Show and hide an events details
  Scenario: When user hasn't selected an event to learn more details
    Given user hasn't selected an event
    When the user clicks/selects an event that isn't expanded
    Then the user should be shown details about said event

  Scenario: When a user has selected an event to expand, but re-selects it
    Given user has re-selected an event
    When the user has selected an already expanded event
    Then the details of the event should be hidden