import React from 'react';
import ProductDetailOverview from './ProductDetailOverview/ProductDetailOverview.jsx';
import ProductList from './Home/ProductList.jsx';
import NavBar from './Home/NavBar.jsx';
import QnACore from './Q&A/QnACore.jsx'
import { Divider } from '@mui/material';
<<<<<<< HEAD
import OutfitList from './OutfitnRelated/YourOutfit.jsx'
=======
import OutfitList from './OutfitnRelated/YourOutfit.jsx';
>>>>>>> Initialized changes for OutfitList to be a child component of ProductDetailOverview

import exProductData from './exProductData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: exProductData[0],
      productSelected: false,
      outfit: [],
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
    // console.log(event)
    this.setState({
      outfit: this.state.outfit.concat(event)
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
<<<<<<< HEAD
            <ProductDetailOverview productId={this.state.selectedProduct.id} />
=======
            <ProductDetailOverview
            productId={this.state.selectedProduct.id}
            outfit={this.state.outfit}
            selected={this.state.productSelected}
            add={this.addToOutfit.bind(this)}/>
>>>>>>> Initialized changes for OutfitList to be a child component of ProductDetailOverview
            <Divider
            sx={{
              mt: 10,
              mx: 40,
            }}
            varient='middle'/>
<<<<<<< HEAD
<
            <QnACore prodId={this.state.selectedProduct.id}/>
          </div>
          <div className='qna'>

=======
          </div>
          <div className='qna'>
            <QnACore prodId={this.state.selectedProduct.id} />
>>>>>>> Initialized changes for OutfitList to be a child component of ProductDetailOverview
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
            varient='middle'/>
          </div>
          <div className='outfitList'>
            <OutfitList
            outfit={this.state.outfit}
            selected={this.state.productSelected}/>
          </div>
        </div>
      ))
  }
}

export default App;
