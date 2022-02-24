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
import ProductInfo from '../client/src/components/ProductDetailOverview/ProductInfo.jsx';
import ImageGallery from '../client/src/components/ProductDetailOverview/ImageGallery.jsx'

// import { handlers } from '../client/src/mocks/ProductDetail/handlers.js';
import exStyleData from '../client/src/mocks/ProductDetail/exStyleData';
import productInfoData from '../client/src/mocks/ProductDetail/productInfoData';


describe('Product Detail Overview Module', () => {
  test('should render main content on load', () => {
    render(<ProductDetailOverview />);
    expect(screen.getByText('Loading...')).toBeDefined();
  }),

  test('fetches product info module for given productid', () => {
    render(<ProductInfo product={productInfoData} style={exStyleData} />);
    expect(screen.getByText('Camo Onesie')).toBeDefined();
  })

  test('should render default view for image gallery when isExpanded state is false', () => {
    render(<ImageGallery style={exStyleData[0]} isExpanded={false} handleExpandedView={()=> {}}/>)
    expect(screen.getByTestId('defaultImageView')).tobeInTheDocument();
  })
})
