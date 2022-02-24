// import { rest } from 'msw'
// // import mock data
// import exStyleData from './exStyleData.js';
// import reviewsData from './ratingsData.js';
// import productInfoData from './productInfoData.js';
// import exProductData from '../../components/exProductData.js';

// const path = 'http://localhost:3000/api';

// export const handlers = [
//   // getProducts
//   rest.get(`/api/products`, (req, res, ctx) => res(
//     ctx.status(200),
//     ctx.json(exProductData)
//   )),

//   // getProductInfo
//   rest.get(`/api/products/:productId`, (req, res, ctx) => res(
//     ctx.status(200),
//     ctx.json(productInfoData)
//   )),

//   // getStyles
//   rest.get(`${path}/products/:productId/styles`, (req, res, ctx) => res(
//     ctx.status(200),
//     ctx.json(exStyleData)
//   )),

//   // getReviewsMeta
//   rest.get(`${path}/reviews/meta/:productId`, (req, res, ctx) => res(
//     ctx.status(200),
//     ctx.json(reviewsData)
//   )),

//   // addToCart
//   rest.post(`${path}/cart/:skuId`, (req, res, ctx) => {
//     return (
//       ctx.status(201),
//       ctx.send('Created')
//     )
//   }),
// ]

// // export const handlers = [
// //   rest.post('/login', (req, res, ctx) => {
// //     const { username } = req.body

// //     return res(
// //       ctx.json({
// //         id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
// //         username,
// //         firstName: 'John',
// //         lastName: 'Maverick',
// //       })
// //     )
// //   }),
// // ]