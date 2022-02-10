import React from 'react';
import ProductDetailOverview from './ProductDetail/ProductDetailOverview.jsx';
import ProductList from './ProductList.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedProductId: ''
    }

    this.getSelectedProduct = this.getSelectedProduct.bind(this);
  }

  getSelectedProduct(productId) {
    this.setState({
      selectedProductId: productId
    })
  }

  render() {
    return(
      <div>
        <div>hello</div>
        <ProductList getSelectedProduct={this.getSelectedProduct} />
      </div>
    )
  }
}
export default App;