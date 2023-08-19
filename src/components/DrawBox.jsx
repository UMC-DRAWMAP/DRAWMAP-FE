import React from 'react';
import SmallDrawBox from './SmallDrawBox';
import './DrawBox.scss';

export default function DrawBox() {
  return (
    <div className="draw-box">
      <SmallDrawBox />
      <div className="draw-content">
        <span className="draw-text" style={{ left: '25.56px', top: '30.05px', width: '92.55px', height: '21.7px' }}>
          만족도
        </span>
        <span className="draw-rating" style={{ left: '25.56px', top: '50.99px', width: '101.03px', height: '15.43px' }}>
          ★★★☆☆
        </span>
        <span className="draw-review" style={{ left: '25.56px', top: '70.66px', width: '248.31px', height: '85.33px' }}>
          강아지 그림이 나와서 너무 재밌어요 또 타고 싶어요 다른 분들한테도 추천할 예정이에요.
        </span>
      </div>
    </div>
  );
}

