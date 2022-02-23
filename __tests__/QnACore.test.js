import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, getByText, waitFor, screen} from '@testing-library/react';
import QnACore from '../client/src/components/Q&A/QnACore.jsx';
import {handlers} from '../client/src/mocks/QnA/index.js'
const path = 'http://localhost/api/qa';

const server = setupServer(...handlers)


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Should render Core Component', async () => {
    render(<QnACore />);
   await waitFor( () => screen.getByText('Questions & Answers'))
})

test('checks if questions are rendered', async () => {
    console.log(handlers)
})
