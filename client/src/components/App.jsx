import React from 'react';
import ProductDetailOverview from './ProductDetailOverview/ProductDetailOverview.jsx';
import ProductList from './ProductList.jsx';
import QnACore from './Q&A/QnACore.jsx';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      selectedProductId: '',
      exampleProduct: [{
        campus: "hr-lax",
        category: "Jackets",
        created_at: "2021-08-13T14:39:39.968Z",
        default_price: "140.00",
        description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
        id: 42366,
        name: "Camo Onesie",
        slogan: "Blend in to your crowd",
        updated_at: "2021-08-13T14:39:39.968Z"
      }]
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
        {/* <ProductList getSelectedProduct={this.getSelectedProduct} /> */}
        <ProductList />
        <ProductDetailOverview product={this.state.exampleProduct} />
        <QnACore />
      </div>
    )
  }
}

export default App;