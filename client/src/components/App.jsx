import React from 'react';
import ProductDetailOverview from './ProductDetailOverview/ProductDetailOverview.jsx';
import ProductList from './Home/ProductList.jsx';
import NavBar from './Home/NavBar.jsx';
import QnACore from './Q&A/QnACore.jsx'
import { Divider } from '@mui/material';
import OutfitList from './OutfitnRelated/YourOutfit.jsx';
import RelatedItems from './OutfitnRelated/RelatedItems.jsx';
import exProductData from './exProductData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: exProductData[0],
      productSelected: false,
      outfit: [],
      related: exProductData,
    }
  }

  getProductId = (event) => {
    this.setState({
      selectedProduct: event,
    }),
      this.setState({
        productSelected: true
      })
  }

  getHome = (event) => {
    this.setState({
      productSelected: false
    })
  }

  addToOutfit = (event) => {
    if (!this.state.outfit.includes(event)) {
      this.setState({
        outfit: this.state.outfit.concat(event)
      })
    }
  }

  removeFromOutfit = (event) => {
   let newArr = this.state.outfit.filter(item => item !== event)
    this.setState({
      outfit: newArr
    })
  }

  render() {
    return (
      this.state.productSelected ? (
        <div>
          <div className='navbar'>
            <NavBar categories={this.getHome.bind(this)} />
          </div>
          <div>
            <ProductDetailOverview
              productId={this.state.selectedProduct.id}
              outfit={this.state.outfit}
              selected={this.state.productSelected}
              add={this.addToOutfit.bind(this)}
              remove={this.removeFromOutfit.bind(this)}/>
            <Divider
              sx={{
                mt: 10,
                mx: 40,
              }}
              varient='middle' />
          </div>
          <div className='qna'>
            <QnACore prodId={this.state.selectedProduct.id} />
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
          <div className='homeDivider'>
            <Divider
              sx={{
                mt: 10,
                mx: 40,
              }}
              varient='middle' />
          </div>
          <div className='outfitList'>
            <OutfitList
              outfit={this.state.outfit}
              selected={this.state.productSelected} />
          </div>
        </div>
      ))
  }
}

export default App;
