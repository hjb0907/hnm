import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom';

const Product = ({item}) => {
  const [isHovering,setIsHovering]=useState(false);
  const navigate = useNavigate();

  const goDetail = () =>{
    navigate(`/products/${item.id}`)
  }

    return (
        <div className='Product' onClick={goDetail}>
          <div className="thum"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {
              isHovering && item.hoverimg ?  (
                <img src={item?.hoverimg} alt="" />
              ) : (
                <img src={item?.img} alt="" />
              )
            }
          </div>
          <div className="desc">
              <p>{item?.title}</p>
              <p>₩{item?.price.toLocaleString()}</p>
              <div className="f_c">
                <p>{item?.new === true? <span className="new">신상품</span> : ''}</p>
                <p>{item?.choice === true ? <span className="recommend">추천상품</span> : ''}</p>
              </div>
          </div>
        </div>
    )
}

export default Product