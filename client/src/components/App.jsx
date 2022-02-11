import React from 'react';
import ProductDetailOverview from './ProductDetailOverview/ProductDetailOverview.jsx';
import ProductList from './ProductDetailOverview/ProductListEntry.jsx';

import QnACore from './Q&A/QnACore.jsx'
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
        <QnACore />
      </div>
    )
  }
}
export default App;