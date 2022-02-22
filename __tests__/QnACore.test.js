import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, getByText, waitFor, screen} from '@testing-library/react';
import QnACore from '../client/src/components/Q&A/QnACore.jsx';

const path = 'http://localhost/api/qa';

const server = new setupServer(
  rest.get(`${path}/questions`, (req, res, ctx) => {

  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Should render Core Component', async () => {
    render(<QnACore />);
    const item = await screen.getByText('Questions & Answers');
    expect(item).toBeVisable()
})