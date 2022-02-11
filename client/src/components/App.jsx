import React from 'react';

import ProductDetailOverview from './ProductDetailOverview/ProductDetailOverview.jsx';

import QnACore from './Q&A/QnACore.jsx'

import ProductList from './ProductList.jsx';

import exProductData from './exProductData.js';


class App extends React.Component{
  constructor(props){
    super(props);
    // UPDATE fake product data with selected product data
    this.state = {
      selectedProduct: exProductData
    }
    // this.getSelectedProduct = this.getSelectedProduct.bind(this);
  }

  // getSelectedProduct(productId) {
  //   this.setState({
  //     selectedProductId: productId
  //   })
  // }

  render() {
    return(
      <div>
        <ProductList />
        <ProductDetailOverview product={this.state.selectedProduct} />
        <QnACore />
      </div>
    )
  }
}

export default App;