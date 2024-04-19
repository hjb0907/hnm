import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../component/Product';
import {productAction} from '../redux/action/ProductAction'
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const products = useSelector((state) => state.product.products)
  const [query,setQuery] = useSearchParams();

  const dispatch = useDispatch();
  const getProducts  = () =>{
    let keywd = query.get('q') || '';
    dispatch(productAction.getProducts(keywd))
    
  }

  useEffect(() => {
    getProducts()
  }, [query]);

  return (
    <div className='main'>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col lg={3} key={index}>
              <Product item={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Main