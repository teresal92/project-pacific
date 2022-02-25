// import dependencies
import React from 'react';
// import API mocking utilities from Mock Service Worker
import { rest } from 'msw';
import { setupServer } from 'msw/node';
// import react-testing methods
import { render, screen, act } from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom'
// import components to test
import OutfitList from '../client/src/components/OutfitnRelated/YourOutfit.jsx';
import RelatedItems from '../client/src/components/OutfitnRelated/RelatedItems.jsx';
import RelatedItemEntry from '../client/src/components/OutfitnRelated/RelatedItemEntry.jsx';
import exProductData from '../client/src/components/exProductData';
import exStyleData from '../client/src/mocks/ProductDetail/exStyleData';

test('should render outfit list to the DOM', () => {
  render(<OutfitList outfit={exStyleData} item={exStyleData[0]} />);
  expect(screen.getByText('YOUR OUTFIT')).toBeDefined();
})

test('Outfit cards should contain the style name title', () => {
  render(<OutfitList outfit={exStyleData} item={exStyleData[0]} />);
  expect(screen.getByText('Forest Green & Black')).toBeDefined();
})

test('should render related product list to the DOM', () => {
  render(<RelatedItems productId={'42368'} />);
  expect(screen.getByText('RELATED ITEMS')).toBeDefined();
})

test('should render comparison modal', () => {
  render(<RelatedItemEntry comparison={'42368'} item={exProductData[0]} />);
  expect(screen.getByText('COMPARE')).toBeDefined();
})















  // test('should render default view for image gallery to the DOM when isExpanded state is false', () => {
  //   render(<ImageGallery style={exStyleData[0]} isExpanded={false} handleExpandedView={()=> {}}/>);
  //   expect(screen.getByTestId('defaultImageView')).toBeDefined();
  // })

  // test('should render thumbnail carousel overlay to DOM in default view', () => {
  //   render(<ImageGallery style={exStyleData[0]} isExpanded={false} handleExpandedView={()=> {}}/>);
  //   expect(screen.getByTestId('defaultImageOverlay'));
  // })

  // test('should render expanded view for image gallery to the DOM when isExpanded state is true', () => {
  //   render(<ImageGallery style={exStyleData[0]} isExpanded={true} handleExpandedView={()=> {}}/>);
  //   expect(screen.getByTestId('expandedImageView')).toBeDefined();
  // })

  // test('should render carousel dots for image gallery to the DOM when isExpanded state is true', () => {
  //   render(<ImageGallery style={exStyleData[0]} isExpanded={true} handleExpandedView={()=> {}}/>);
  //   expect(screen.getByTestId('expandedImageDots')).toBeDefined();
  // })

  // test('should render style select thumbnails to the DOM', () => {
  //   render(<StyleSelector styles={exStyleData} selectedStyle={exStyleData[0]} handleStyleSelector={() => {}}/>);
  //   expect(screen.getByTestId('styleSelector')).toBeDefined();
  // })

  // test('should render star ratings to DOM', () => {
  //   render(<Ratings ratings={reviewsData.ratings} />)
  //   expect(screen.getByTestId('ratings')).toBeDefined();
  // })

  // test('should render addToCart component to DOM', () => {
  //   render(<AddToCart style={exStyleData[0]} />)
  //   expect(screen.getByTestId('addToCart')).toBeDefined();
  // })

  // test('should render select size dropdown to DOM', () => {
  //   render(<AddToCart style={exStyleData[0]} />)
  //   expect(screen.getByText(/Select Size/)).toBeDefined();
  // })