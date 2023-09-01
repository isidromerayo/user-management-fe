import {rest} from 'msw'

export const handlers = [
  rest.post('/login', (req, res, ctx) => res(ctx.delay(1), ctx.status(200))),
  // Handles a GET /user request
  // rest.get('/user', null),
]