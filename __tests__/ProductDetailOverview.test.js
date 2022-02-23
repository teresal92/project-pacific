import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, getByText, waitFor, screen} from '@testing-library/react';
import ProductDetailOverview from '../client/src/components/ProductDetailOverview/ProductDetailOverview.jsx';

const path = 'http://localhost/api';

const server = new setupServer(
  rest.get(`${path}/products`, (req, res, ctx) => {

  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// test('Should render Core Component', async () => {
//     render(<QnACore />);
//     const item = await screen.getByText('Questions & Answers');
//     expect(item).toBeVisable()
// })