import React from 'react'
import { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as regularUser } from '@fortawesome/free-regular-svg-icons';

const Header = ({authes, setAuthes}) => {
  const [userHover,setUserHover] = useState(false);
  const list = [
    { text: 'Women', link: '/' },
    { text: 'Divided', link: '/login' },
    { text: 'Men', link: '/' },
    { text: 'Baby', link: '/' },
    { text: 'Kids', link: '/' },
    { text: 'H&M', link: '/' },
    { text: 'HOME', link: '/' },
    { text: 'Sport', link: '/' },
    { text: 'Sale', link: '/' },
    { text: '지속가능성', link: '/' }
  ];
  
  const [value,setValue]= useState('');
  const navigate = useNavigate();

  const gotoLogin = () => {
    navigate('/login');
  }

  const gotoLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("로그아웃을 하시겠습니까?")) {
      setAuthes(false);
      alert('로그아웃이 완료 되었습니다.')
    }
  }

  const gotoHome = () =>{
    navigate('/')
  }

  const search = (e) => {
    if(e.key === 'Enter'){
      let keyword = e.target.value;
      navigate(`?q=${keyword}`);
    }
  }

  return (
    <div className='header'>
    <div className="login_btn"   
      onMouseEnter={() => setUserHover(true)}
      onMouseLeave={() => setUserHover(false)}>
          <span onClick={gotoLogin} className='login_icon'>
          {userHover ? (
              <FontAwesomeIcon icon={regularUser} />
            ) : (
              <FontAwesomeIcon icon={faUser} />
            )}
            {
              authes === true? '마이페이지' : '로그인'
            }
          </span>
          {
            authes === true? (
              <span className='ml5' onClick={gotoLogout}>
                <FontAwesomeIcon icon={regularUser} />
                로그아웃
              </span>
            ):null
          }
      </div>
      <div className="logo" onClick={gotoHome}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlG29yTKHF7G9r7otV0-vmcC9bJ3Zr9ewZGneBnCORw&s" alt="" width={100}/>
      </div>
      <div className="menuGnb pos_r">
        <ul className="menuList">
          {
            list.map((i,index)=>(
              <li key={index}><Link to={i.link}>{i.text}</Link></li>
            ))
          }
        </ul>
        <div className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" name="search" id="search" placeholder='제품 검색' onKeyUp={search} onChange={(e)=>{setValue(e.target.value)}} value={value}/>
        </div>
      </div>
    </div>
  )
}

export default Header