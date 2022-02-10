import React, { useState } from 'react';
const axios = require('axios');

function ProductDetailOverview() {
  // declare new state variables
  const [products, setProducts] = useState([]);

  // similar to comoponentDidMount and componentDidUpdate
  // useEffect(() => {
  //   // update products state with data fetched from Atelier API
  //   setProducts();
  // })


  // axios.get('https://api.github.com/user', {
  //   headers: {
  //     'Authorization': `token ${access_token}`
  //   }
  // })
  // .then((res) => {
  //   console.log(res.data)
  // })
  // .catch((error) => {
  //   console.error(error)
  // })


  return (
    <div>

    </div>
  )
}

export default ProductDetailOverview;