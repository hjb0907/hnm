import React from 'react'
import Login from './Login';
import ProductDetail from './ProductDetail';

const Private = ({authes,setAuthes}) => {
  return authes == true ?(
      <ProductDetail/>
      ):(
      <Login setAuthes={setAuthes}/>
  )
}

export default Private