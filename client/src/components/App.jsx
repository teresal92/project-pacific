import React from 'react';
<<<<<<< HEAD
import ProductDetailOverview from './ProductDetail/ProductDetailOverview.jsx';
import ProductList from './ProductList.jsx';

=======
import QnACore from './Q&A/QnACore.jsx'
>>>>>>> main
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
    return (
      <div>
        <QnACore />
      </div>
    )
  }
}
export default App;