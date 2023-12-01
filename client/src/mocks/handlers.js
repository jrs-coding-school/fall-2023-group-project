// ** MSW
import { http, HttpResponse } from 'msw'

// ** Mock Data
import cardData from './data/cards.json'
// import usersData from './data/users.json'
import packsData from './data/packs.json'
//The base url of the API, can be changed in the .env file
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

export const handlers = [
  http.get(`${baseUrl}/cards`, (info) => {
    const {
      request,
      params,
      cookies
    } = info
    return HttpResponse.json({message: 'cards found!', data: cardData.splice(0, 5), total: '5'}) // respond using a mocked JSON body
  }),
  http.get(`${baseUrl}/packs`, (info) => {
    const {
        request,
        params,
        cookies
      } = info
    return HttpResponse.json({message: 'packs found!', data: packsData.splice(0, 9), total: '9'}) // respond using a mocked JSON body
  }),
]