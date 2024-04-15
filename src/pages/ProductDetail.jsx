import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faInfo,faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regulaHeart } from '@fortawesome/free-regular-svg-icons';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [size, setSize] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  const [clickHeart,setClickHeart] = useState(false);
  const [hovering, setHovering] = useState(false);

  const handleMouseEnter = () => {
    setHovering(true);
  };

  const handleMouseLeave = () => {
    if (!clickHeart) {
      setHovering(false);
    }
  };

  const handleClick = () => {
    setClickHeart(!clickHeart);
  };

  const getProductDetail = async () => {
    try {
      const url = `http://localhost:5000/products/${id}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch product');
      }
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      setError('Error fetching product data');
    } finally {
      setLoading(false);
    }
  };

  const settingSize = (size) => {
    setSize(size);
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  return (
    <div className="productdetail">
      <Container>
        <Row lg={2}>
          <Col>
            <div>
              <img src={product?.img2} alt="" />
            </div>
            <div className='img_wrap'>
              <img src={product?.img3} alt="" />
              <img src={product?.img4} alt="" />
            </div>
            <div>
              <img src={product?.img5} alt="" />
            </div>
            <div>
              <img src={product?.img6} alt="" />
            </div>
            <div>
              <img src={product?.img7} alt="" />
            </div>
          </Col>
          <Col className="productInfo">
            {product ? (
              <>
                <div>
                  {product.title} 
                  <span
                    className="click_heart"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onClick={handleClick}
                  >
                    {clickHeart || hovering ? (
                      <FontAwesomeIcon icon={faHeart} className='click_heart_svg'/>
                    ) : (
                      <FontAwesomeIcon icon={regulaHeart} />
                    )}
                  </span>
                </div>
                <div>₩{product.price.toLocaleString()}</div>
                <div>{product?.color}</div>
                <div>{product.new === true ? <span className='new'>신상품</span> : ''}</div>
                <div>{product.choice === true ? <span>추천상품</span> : ''}</div>
                <div>
                  <DropdownButton id="dropdown-item-button" title={size || '사이즈'} variant="dark">
                    <Dropdown.ItemText>사이즈를 선택해주세요.</Dropdown.ItemText>
                    {product.size.map((i, index) => (
                      <Dropdown.Item as="button" key={index} onClick={() => settingSize(i)}>
                        {i}
                      </Dropdown.Item>
                    ))}
                  </DropdownButton>
                  <button className='add_btn'><FontAwesomeIcon icon={faPlus} />추가</button>
                  <p className='delivery_info'><FontAwesomeIcon icon={faInfo} />배송 기간: 영업일 기준 2-3일</p>
                  <p>배송 및 결제</p>
                </div>
              </>
            ) : (
              <div>No product information available.</div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
