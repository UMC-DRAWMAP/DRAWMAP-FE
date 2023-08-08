import React from 'react';
import SmallDrawBox from './SmallDrawBox';
import './ArchiveBox.scss';
import HeartIcon from '../assets/images/heart.svg';
import BikeIcon from '../assets/images/bike.svg';

export default function ArchiveBox() {
    return (
      <div className="archive-box">
        <SmallDrawBox />
        <div className="archive-content">
          <span className="archive-icon" style={{ left: '20.37px', top: '-100.48px', width: '68.55px', height: '15.88px' }}>
            강아지
          </span>
          <span className="archive-date" style={{ left: '20.37px', top: '-80.48px', width: '98.43px', height: '15.88px' }}>
            작성일 2023.08.02
          </span>
          <span className="archive-difficulty" style={{ left: '20.37px', top: '-60.48px', width: '115.13px', height: '10.58px' }}>
          난이도 ★★★★☆
        </span>
          <span className="archive-text" style={{ left: '20.37px', top: '-40.48px', width: '323.83px', height: '35.88px' }}>
            이 코스는 어디 어디 어디를 경유하여 어디로 향하는 코스입니다.완성시 강아지가 나타납니다.
          </span>
          <span className="archive-icon" style={{ left: '290px', top: '84px', width: '32.97px', height: '33.09px' }}>
            <img src={HeartIcon} alt="하트 아이콘" width="100%" height="100%" />
          </span>
          <span className="archive-icon" style={{ left: '330px', top: '84px', width: '32.9px', height: '32.63px' }}>
            <img src={BikeIcon} alt="자전거 아이콘" width="100%" height="100%" />
          </span>
          <div className="seoul-box" style={{ left: '-240px', top: '-110px', width: '58.88px', height: '29.11px' }}>
          서울
        </div>
        </div>
      </div>
    );
  }
