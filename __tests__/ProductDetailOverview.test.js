// import dependencies
import React from 'react';
// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';
// import react-testing methods
import {render, screen, act} from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// import component to test
import ProductDetailOverview from '../client/src/components/ProductDetailOverview/ProductDetailOverview.jsx';
// import mock data
import exStyleData from '../client/src/mocks/exStyleData.js';
import ratingsData from '../client/src/mocks/ratingsData.js';
import productInfoData from '../client/src/mocks/productInfoData.js';
import exProductData from '../client/src/components/exProductData.js';

const path = 'http://localhost:3000/api';
const skuId = "1471554";

const server = new setupServer(
  rest.get(`${path}/products`, (req, res, ctx) => {
    return res(ctx.json(exProductData));
  }),

  rest.get(`${path}/products/${exProductData[0].id}`, (req, res, ctx) => {
    return res(ctx.json(productInfoData));
  }),

  rest.get(`${path}/products/${exProductData[0].id}/styles`, (req, res, ctx) => {
    return res(ctx.json(exStyleData));
  })

  // rest.post(`${path}/cart/${skuID}`, (req, res, ctx) => {
    // return res(ctx.json(exProductData));
  // })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
// beforeAll(() => {
//   act(() => {
//     render(<ProductDetailOverview productId={exProductData[0].id} />)
//   });
// });

describe('Product Detail Overview Module', () => {
  test('should render style selector if fetch requests on mount are resolved', () => {
    render(<ProductDetailOverview productId={exProductData[0].id} />);
    const styleText = await screen.findByText('STYLE')
    expect(styleText).toBeInTheDocument();
  })

  test('handles client error resource not found', async () => {
    server.use(
      rest.get('/api/products', (req, res, ctx) => {
        return res(ctx.status(404))
      }))
    });

  test('fetches product info for product id and displays product title and category', async () => {
    // render(<ProductInfo product={productInfoData} style={exStyleData}/>);
    const productInfoContainer = await waitFor(() => screen.getByTestId('productInfo'));
    expect(productInfoContainer).toBeInTheDocument();
  })

  // test('Should fetch list of all styles and render style thumbnails', async () => {
  //   // Arange
  //   render(<ProductDetailOverview/>)
  //   // Act
  //   // Assert
  // })

})
