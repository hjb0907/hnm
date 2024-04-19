import React from 'react';
import {Link , useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faYoutube, faPinterest, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faComment as faCommentSolid, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import faComment from Free Solid set



const Footer = () => {
  const navigate = useNavigate();

  const gotoHome = () =>{
    navigate('/')
  }
  const list = [
    { row: ['Women', 'Men', 'Baby', 'Kids', 'H&M HOME', 'Sport', 'Sale', 'Magazine'], 
      link: ['/','/','/','/','/','/','/','/']
    },
    { row: ['H&M 채용정보','H&M 회사 소개','H&M Group 지속가능성 (Sustainability H&M Group)','언론','IR 정보','Corporate governance'], 
      link: ['/','/','/','/','/','/','/','/']
    },
    { row: ['고객 서비스', '내 계정', '매장 찾기', '개인정보 처리방침', '문의하기', '기프트 카드', '사기 신고', 'Cookie Settings'], 
      link: ['/','/','/','/','/','/','/','/']
    },
  ];

  return (
    <div className='footer'>
      <div className="col01">
        <ul className="row01">
          <li>
            <h5>카테고리</h5>
          </li>
          {list[0].row.map((category, idx) => (
            <a href={list[0].link[idx]} key={idx}>{category}</a>
          ))}
        </ul>
        <ul className="row02">
          <li>
            <h5>기업 정보</h5>
            {list[1].row.map((category, idx) => (
              <a href={list[1].link[idx]}  key={idx}>{category}</a>
            ))}
          </li>
        </ul>
        <ul className="row03">
          <li>
            <h5>고객지원</h5>
            {list[2].row.map((category, idx) => (
              <a href={list[2].link[idx]} key={idx}>{category}</a>
            ))}
          </li>
        </ul>
        <ul className="row04">
          <li>
            <h5>지금 멤버십에 가입하세요!</h5>
          </li>
          <li>
            <p>지금 가입하시고 10% 할인받으세요</p>
          </li>
          <li>
            <Link to='/'>지금 가입하기</Link>
            <FontAwesomeIcon icon={faArrowRight} />
          </li>
        </ul>
      </div>
      <div className="col02">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTiktok} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faPinterest} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faCommentSolid} />
      </div>
      <div className="col03">
      이 사이트의 콘텐츠는 저작권 보호를 받고 있는 H & M Hennes & Mauritz AB의 자산입니다. 더 보기 | 법인명 에이치앤엠헤네스 앤 모리츠 주식<br/>
      회사 | 통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록| 번호: 220-87-83339 | 대표자: 아담 칼슨, 선 보라미, 아네타 포쿠친스카 <br/>
      서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 info.kr@hm.com <br/>사업자 정보 확인 지급보증안내 법인명 에이치앤엠헤네스앤모리츠 주식회사 | 통신판매업신고번호 : 2022-서울강남-01184 / 사업자등록번호: 220-87-83339 | 아담 칼슨, 선 보라미, 아네타 포쿠친스카 | 서울특별시 강남구 영동대로 421, 9층 삼탄빌딩 (대치동) 06182 | 대표번호 080-822-0220 | info.kr@hm.com
      <br/>
      사업자 정보 확인
      지급보증안내
      </div>
      <div className="col04">
        <div className="logo" onClick={gotoHome}>
          <img src="https://www.pngmart.com/files/22/HM-Logo-PNG.png" alt="" width={100}/>
        </div>
      </div>
      <div className="col05">대한민국 | ₩</div>
    </div>
  )
}

export default Footer