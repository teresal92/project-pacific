import React from 'react';
import ProductDetailOverview from './ProductDetailOverview/ProductDetailOverview.jsx';
import ProductList from './Home/ProductList.jsx';
import QnACore from './Q&A/QnACore.jsx'

import exProductData from './exProductData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    // UPDATE fake product data with selected product data
    this.state = {
      selectedProduct: exProductData[0]
    }
    // this.getSelectedProduct = this.getSelectedProduct.bind(this);
  }

  // getSelectedProduct(productId) {
  //   this.setState({
  //     selectedProductId: productId
  //   })
  // }

  render() {
    return (
      // <h1>Hello world React!</h1>
      <div>
        <ProductList />
        <ProductDetailOverview productId={this.state.selectedProduct.id} />
        <QnACore />
      </div>
    )
  }
}

export default App;
