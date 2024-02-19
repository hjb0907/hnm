import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Product from '../component/Product';

const Main = () => {
  const [products,setProducts] = useState([]);
  const [query,setQuery] = useSearchParams();

  const getProducts  = async() =>{
    let keywd = query.get('q') || '';
    let url = `http://localhost:4000/products?q=${keywd}`;

    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products data:', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getProducts();   
    };
    fetchData();
  }, [query]);

  return (
    <div className='main'>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col lg={3} md={3} key={index}>
              <Product item={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Main