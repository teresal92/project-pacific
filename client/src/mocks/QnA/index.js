import { rest } from 'msw';
import fakeData from '../../components/Q&A/fakeData'
const path = 'http://localhost:3000/api/qa'

   const handlers = [
    rest.get(`${path}/questions/`, (req, res, ctx) => {
      const prodId = req.url.searchParams.get('product_id')
      const count = req.url.searchParams.get('count')
      data = fakeData
      return res(ctx.json(data))
    })
  ]
  export default handlers


