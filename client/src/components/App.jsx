import React from 'react';
import ProductDetailOverview from './ProductDetailOverview/ProductDetailOverview.jsx';
import ProductList from './Home/ProductList.jsx';
import NavBar from './Home/NavBar.jsx';
import QnACore from './Q&A/QnACore.jsx'
import { Divider } from '@mui/material';
import exProductData from './exProductData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: exProductData[0],
      productSelected: false
    }
  }

  getProductId = (event) => {
    this.setState({
      selectedProduct: event,
    }),
      this.setState({
        productSelected: !this.state.productSelected
      })
  }

  getHome = (event) => {
    this.setState({
      productSelected: false
    })
  }

  render() {
    return (
      this.state.productSelected ? (
        <div>
          <div className='navbar'>
            <NavBar categories={this.getHome.bind(this)}/>
          </div>
          <div>
            <ProductDetailOverview productId={this.state.selectedProduct.id} />
            <Divider
            sx={{
              mt: 10,
              mx: 40,
            }}
            varient='middle'/>
            <QnACore prodId={this.state.selectedProduct.id}/>
          </div>
        </div >
      ) : (
        <div>
          <div className='navbar'>
            <NavBar />
          </div>
          <div>
            <ProductList getId={this.getProductId.bind(this)} />
            <div className='textbox'>text box</div>
          </div>
        </div>
      ))
  }
}

export default App;
