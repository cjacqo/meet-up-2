# Meet-Up

An application that lists events and event details within a users city. Uses the Google Calendar API and OAuth2 authentication flow.

# Features

    1. Filter Events by City
    2. Show/Hide Event Details
    3. Specify Number of Events
    4. Use the App When Offline
    5. Add an App Shortcut to the Home Screen
    6. Display Charts Visualizing Event Details

**Feature 1:** Filter Events by City

- As a **user**
- I should be able to **view events for a specific city**
- So that **I can see a list of events taking place in that city**

  -- Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

  - **Given** user hasn’t searched for any city
  - **When** the user opens the app
  - **Then** the user should see a list of upcoming events

  -- Scenario 2: User should see a list of suggestions when they search for a city

  - **Given** the main page is open
  - **When** user starts typeing in the city text box
  - **Then** the user should receive a list of cities (suggestions) that match what they've typed

  -- Scenario 3: User can select a city from the suggested list

  - **Given** user was typing ‘Berlin’ in the city text box AND the list of suggested cities is showing
  - **When** the user selects a city (e.g., “Berlin, Germany”) from the list
  - **Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city

**Feature 2:** Show/Hide Event Details

- As a **user**
- I should be able to **expand and hide details about a specific event**
- So that **I can learn more about said specific event**

  -- Scenario 1: When a user hasn’t selected an event to learn more details

  - **Given** user hasn't selected an event
  - **When** the user clicks/selects and event that isn't expanded
  - **Then** the user should be shown details about said event

  -- Scenario 2: When a user has selected an event to expand, but re-selects it

  - **Given** user has re-selected an event
  - **When** the user has selected an already expanded event
  - **Then** the details of the event should be hidden

**Feature 3:** Specify Number of Events

- As a **user**
- I should be able to **view total number of events**
- So that **I can know all events in a given city or all events available**

  -- Scenario 1: When a user hasn't set a number of events to display, show all events

  - **Given** user hasn't filtered events by a city
  - **When** the user is on the home page of events
  - **Then** a total number of events should be shown

  -- Scenario 2: When a user has set number of events to display

  - **Given** the user is on the home page of events
  - **When** the user sets a number in the number of events text box
  - **Then** the user should see a that number of events in the list

**Feature 4:** Use the App When Offline

- As a **user**
- I should be able to **view the events without an internet connection**
- So that **I can know all events in a given city or all events available**

  -- Scenario 1: When a user does not have an internet connection

  - **Given** user does not have an internet connection
  - **When** the user is on the home page of events that are filtered
  - **Then** a total number of events should be shown

**Feature 5:** Add an App Shortcut to the Home Screen

- As a **user**
- I should be able to **add the app shorcut to my home screen**
- So that **I can open the app faster**

** Feature 6:** Display Charts Visualizing Event Details

- As a **user**
- I should be able to **see a chart showing thi upcoming events in each city**
- So that **I know what events are organized in each city**

  -- Scenario 1: When a user wants to see upcoming events in each city

  - **Given** user wants to view upcoming events in each city
  - **When** the user is logged into the app
  - **Then** a chart will display events that are organized in each city

# Serverless Features

Instead of making direct calls from the client-side, I will utilize serverless functions to act as intermediaries. When a user requests to view events, the client-side code can trigger the serverless function, when then makes the appropriate API call to the Google Calendar API. The serverless function can process the response and return the relevant event data back to the client, ensuring better security, reduced API key exposure, and efficient handling of multiple requests without managing dedicated servers.
