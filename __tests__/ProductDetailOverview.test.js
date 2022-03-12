import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom'

import ProductDetailOverview from '../client/src/components/ProductDetailOverview/ProductDetailOverview.jsx';
import ProductInfo from '../client/src/components/ProductDetailOverview/ProductInfo.jsx';
import ImageGallery from '../client/src/components/ProductDetailOverview/ImageGallery.jsx';
import StyleSelector from '../client/src/components/ProductDetailOverview/StyleSelector.jsx';
import Ratings from '../client/src/components/ProductDetailOverview/Ratings.jsx';
import AddToCart from '../client/src/components/ProductDetailOverview/AddToCart.jsx';

import exStyleData from '../client/src/mocks/ProductDetail/exStyleData';
import productInfoData from '../client/src/mocks/ProductDetail/productInfoData';
import reviewsData from '../client/src/mocks/ProductDetail/ratingsData';
import exProductData from '../client/src/components/exProductData'

describe('Product Detail Overview Module', () => {
  test('should render loading error div when no props are passed in', () => {
      render(<ProductDetailOverview />);
    expect(screen.getByText('Loading...')).toBeDefined();
  })

  test('should render product info for specific product to the DOM', () => {
    render(<ProductInfo product={productInfoData} style={exStyleData} />);
    expect(screen.getByText('Camo Onesie')).toBeDefined();
  })

  test('should render default view for image gallery to the DOM when isExpanded state is false', () => {
    render(<ImageGallery style={exStyleData[0]} isExpanded={false} handleExpandedView={()=> {}}/>);
    expect(screen.getByTestId('defaultImageView')).toBeDefined();
  })

  test('should render thumbnail carousel overlay to DOM in default view', () => {
    render(<ImageGallery style={exStyleData[0]} isExpanded={false} handleExpandedView={()=> {}}/>);
    expect(screen.getByTestId('defaultImageOverlay'));
  })

  test('should render expanded view for image gallery to the DOM when isExpanded state is true', () => {
    render(<ImageGallery style={exStyleData[0]} isExpanded={true} handleExpandedView={()=> {}}/>);
    expect(screen.getByTestId('expandedImageView')).toBeDefined();
  })

  test('should render carousel dots for image gallery to the DOM when isExpanded state is true', () => {
    render(<ImageGallery style={exStyleData[0]} isExpanded={true} handleExpandedView={()=> {}}/>);
    expect(screen.getByTestId('expandedImageDots')).toBeDefined();
  })

  test('should render style select thumbnails to the DOM', () => {
    render(<StyleSelector styles={exStyleData} selectedStyle={exStyleData[0]} handleStyleSelector={() => {}}/>);
    expect(screen.getByTestId('styleSelector')).toBeDefined();
  })

  test('should render star ratings to DOM', () => {
    render(<Ratings ratings={reviewsData.ratings} />)
    expect(screen.getByTestId('ratings')).toBeDefined();
  })

  test('should render addToCart component to DOM', () => {
    render(<AddToCart style={exStyleData[0]} />)
    expect(screen.getByTestId('addToCart')).toBeDefined();
  })

  test('should render select size dropdown to DOM', () => {
    render(<AddToCart style={exStyleData[0]} />)
    expect(screen.getByText(/Select Size/)).toBeDefined();
  })

})
