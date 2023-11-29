// // ** MSW
// import { http, HttpResponse } from 'msw'

// // ** Mock Data
// // import usersData from './data/users.json'
// import packs from './data/packs.json'
// //The base url of the API, can be changed in the .env file
// const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:9000'

// export const handlers = [
// // This configures a Service Worker with the given request handlers.
//   http.get('http://localhost:9000/', ({ request }) => {
//     // Construct a URL instance out of the intercepted request.
//     const url = new URL(request.url)

//     // Note that query parameters are potentially undefined. If no query is given
//     // In that cause return everything
//     return HttpResponse.json(packs)
//   }),
// ]