import React from 'react';
import {render, screen, cleanup} from '@testing-library/react'
import QnACore from '../client/src/components/QnA/QnACore';

test('Should render Core Component', () => {
  render(<QnACore />)
  const coreElement = screen.getByTestId('core-1');
  expect(coreElement).toBeInTheDocument()
})