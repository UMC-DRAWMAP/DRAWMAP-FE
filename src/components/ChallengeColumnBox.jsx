import '../components/ChallengeColumnBox.scss'
import { useState } from 'react';
import Button from './Button';
import Stars from './Stars';
import leftArrow from '../assets/images/arrow-left.svg';
import rightArrow from '../assets/images/arrow-right.svg';
import heartIcon from '../assets/images/heart.svg'
import bikeIcon from '../assets/images/bike.svg'


const imageObjects = [
    {
        id: 1,
        src: '',
        checkpointname: '테스트1',
        checkpointplace: '테스트1 위치'
    },
    {
        id: 2,
        src: '',
        checkpointname: '테스트2',
        checkpointplace: '테스트2 위치'
    },
    {
        id: 3,
        src: '',
        checkpointname: '테스트3',
        checkpointplace: '테스트3 위치'
    },
];

const course = {
    title: "개구리",
    city: "서울",
    date: "2023.07.06",
    level: 3,
    info: "이 코스는 어디 어디 어디를 경유하여 어디로 향하는 코스입니다. 완성시 개구리가 나타납니다."
};


const ChallengeColumnBox = ({ title, city, date, level, info }) => {

    const [leftImageId, setLeftImageId] = useState(1);
    const [rightImageId, setRightImageId] = useState(2);

    const leftImageObj = imageObjects.find(obj => obj.id === leftImageId);
    const rightImageObj = imageObjects.find(obj => obj.id === rightImageId);

    console.log(`leftimageid: ${leftImageId}`);
    console.log(`rightimageid: ${rightImageId}`);

    const handleChangeLeftButton = () => {
        if (leftImageId !== 1) {
            setLeftImageId(leftImageId - 2);
            setRightImageId(rightImageId - 2);
        };
    };

    const handleChangeRightButton = () => {
        if (rightImageId < imageObjects.length) {
            setLeftImageId(leftImageId + 2);
            setRightImageId(rightImageId + 2);
        };
    };

    return (
        <div className="ChallengeColumnBox">
            <div className='mapimagebox'>
                <img src={''} alt="" className='mapimage'/>
                <div className='citybox'>{city}</div>
            </div>
            <div className='challengeinfo'>
                <div>
                    <p className='coursetitle'>{title}</p>
                    <div style={{display: 'flex', marginBottom: '5px'}}>
                        <p className='date'>작성일</p>
                        <p className='date'>{date}</p>
                    </div>
                    <div style={{display: 'flex'}}>
                        <p className='level'>난이도</p>
                        <Stars n={level}/>
                    </div>
                    <div className='courseinfobox'>
                        <p className='courseinfo'>{info}</p>
                        <div className='buttoncontainer'>
                            <Button img={heartIcon}/>
                            <Button img={bikeIcon} />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='checkpointheader'>
                        <p className='checkpointtitle'>들르면 좋을 체크 포인트</p>
                        <button className='morebutton'>더보기</button>
                    </div>
                    {leftImageObj === undefined ? <div></div> : 
                    <div>
                        {rightImageObj === undefined ? 
                        <div className='checkpointcontainer'>
                            <CheckPoint imgsrc={leftImageObj.src} checkpointname={leftImageObj.checkpointname} checkpointplace={leftImageObj.checkpointplace}/>
                        </div> : 
                        <div className='checkpointcontainer'>
                            <CheckPoint imgsrc={leftImageObj.src} checkpointname={leftImageObj.checkpointname} checkpointplace={leftImageObj.checkpointplace}/>
                            <CheckPoint imgsrc={rightImageObj.src} checkpointname={rightImageObj.checkpointname} checkpointplace={rightImageObj.checkpointplace}/>
                        </div>
                        }
                        <div className='arrowbuttoncontainer'>
                            <Button img={leftArrow} onClick={handleChangeLeftButton}/>
                            <Button img={rightArrow} onClick={handleChangeRightButton}/>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default ChallengeColumnBox;


export const CheckPoint = ({ imgsrc, checkpointname, checkpointplace }) => {
    return (
        <div className='CheckPoint'>
            <div className='checkpointimagebox'>
                <img src={imgsrc} alt="" />
            </div>
            <p className='checkpointname'>{checkpointname}</p>
            <p className='checkpointplace'>{checkpointplace}</p>
        </div>
    )
};