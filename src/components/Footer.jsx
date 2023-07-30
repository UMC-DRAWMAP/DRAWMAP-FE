import React from 'react';
import '../components/Footer.scss';
import logoSmall from '../assets/images/logo_small.png';
const Footer = () => {
  return (
    <footer className="Footer">
      <img src={logoSmall} alt="Logo" />
      <div className="footer-content">
        <div className="footer-item">사업자등록번호</div>
        <div className="footer-item">대표자명</div>
        <div className="footer-item">연락처</div>
        <div className="footer-item">이용약관</div>
        <div className="footer-item">서비스소개</div>
        <div className="footer-item">개인정보처리방침</div>
        <div className="footer-item">고객센터</div>
        <div className="footer-item">서비스명</div>
        <div className="footer-item">제휴제안</div>
      </div>
    </footer>
  );
};

export default Footer;
