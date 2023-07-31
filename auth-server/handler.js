'use strict';

const { google } = require('googleapis')
const calendar = google.calendar('v3')
const SCOPES = ['https://www.googleapis.com/auth/calendar.events.public.readonly']
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env
const redirect_uris = [
  'https://cjacqo.github.io/meet-up-2/'
]

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  redirect_uris[0]
)

module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      authUrl
    })
  }
}

module.exports.getAccessToken = async (event) => {
  const code = decodeURIComponent(`${event.pathParameters.code}`)

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, response) => {
      if (err) return reject(err)
      else return resolve(response)
    })
  })
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify(results)
      }
    })
    .catch((err) => {
      return {
        statusCode: 500,
        body: JSON.stringify(err)
      }
    })
}

module.exports.getCalendarEvents = async (event) => {
  const access_token = decodeURIComponent(`${event.pathParameters.access_token}`)
  oAuth2Client.setCredentials({ access_token })

  return new Promise((resolve, reject) => {
    calendar.events.list(
      {
        calendarId: 'fullstackwebdev@careerfoundry.com',
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: 'startTime'
      },
      (error, response) => {
        if (error) reject(error)
        else resolve(response)
      }
    )
  })
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true
        },
        body: JSON.stringify({ events: results.data.items })
      }
    })
    .catch((err) => {
      return {
        statusCode: 500,
        body: JSON.stringify(err)
      }
    })
} 