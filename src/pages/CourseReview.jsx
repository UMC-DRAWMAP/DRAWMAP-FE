import Header from '../components/Header';
import Button from '../components/Button';
import '../pages/CourseReview.scss';
import DefaultProfile from '../assets/images/profile-mini.svg';
import heartIcon from '../assets/images/heart.svg';
import { useState, useEffect } from 'react';
import PreviewBox from '../components/PreviewBox';
import uploadIcon from '../assets/images/save.svg';

// 더미 데이터
const dummyPlaceList = ['서울특별시', '성북구', '동대문구'];
const coursedata = '고려대학교 - 경동시장 - 마장축산물시장 - 명동대성당 - 동대문종합시장 - 이화동 벽화마을 - 보문동5가 - 고려대학교';
const introductiondata = '귀여운 강아지를 그려보세요~';

const CourseReview = ({ img, userNum, userName, userProfile, level}) => {

    const [highLevelButtonColor, setHighLevelButtonColor] = useState('--back-color');
    const [middleLevelButtonColor, setMiddleLevelButtonColor] = useState('--back-color');
    const [lowLevelButtonColor, setLowLevelButtonColor] = useState('--back-color');

    const [satisfaction, setSatisfication] = useState(3);



    useEffect(() => {
        if (level === 1) {
            setLowLevelButtonColor('--green-color');
            setMiddleLevelButtonColor('--back-color');
            setHighLevelButtonColor('--back-color');
        } else if (level === 2) {
            setLowLevelButtonColor('--back-color');
            setMiddleLevelButtonColor('--green-color');
            setHighLevelButtonColor('--back-color');
        } else if (level === 3) {
            setLowLevelButtonColor('--back-color');
            setMiddleLevelButtonColor('--back-color');
            setHighLevelButtonColor('--green-color');
        } else {
            setLowLevelButtonColor('--back-color');
            setMiddleLevelButtonColor('--back-color');
            setHighLevelButtonColor('--back-color');
        }
    }, [level]);

    const handleClickStar1 = () => {
        setSatisfication(1);
    };

    const handleClickStar2 = () => {
        setSatisfication(2);
    };

    const handleClickStar3 = () => {
        setSatisfication(3);
    };

    const handleClickStar4 = () => {
        setSatisfication(4);
    };

    const handleClickStar5 = () => {
        setSatisfication(5);
    };

    var today = new Date();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var zeromonth = ('0' + (today.getMonth() + 1)).slice(-2);
    var zeroday = ('0' + today.getDate()).slice(-2);

    var dateString = year + '.' + zeromonth  + '.' + zeroday;

    return (
        <div className="CourseReview">
            <Header />
            <p className='monthchallengetitle'>드로맵 {month}월의 도전 코스</p>
            <div className='monthchallengecontainer'>
                <div className='monthchallengeimage'>
                    <img src={img} alt="" />
                    <div className='nicknamebox'>
                        <p className='nickname'>{userName}</p>
                        <img
                            src={userProfile ? userProfile : DefaultProfile}
                            alt="유저 프로필 이미지"
                            className="sdb-user-profile-img"
				        />
                    </div>
                </div>
                <div className='monthchallengeinfo'>
                    <Button img={heartIcon} type={'default'}/>
                    <p className='coursename'>강아지 코스</p>
                    <p className='usernumber'>
                        현재 {userNum}명의 유저가<br/>
                        도전 코스에 참여하고 있어요!
                    </p>
                    <div className='levelcontainer'>
                        <p className='itemtitle'>난이도</p>
                        <div className='levelboxcontainer'>
                            <div className='levelbox' style={{backgroundColor: `var(${highLevelButtonColor})`}}>상</div>
                            <div className='levelbox' style={{backgroundColor: `var(${middleLevelButtonColor})`}}>중</div> 
                            <div className='levelbox' style={{backgroundColor: `var(${lowLevelButtonColor})`}}>하</div>
                        </div>
                    </div>
                    <div className='placecontainer'>
                        <p className='itemtitle'>지역</p>
                        <div className='placeboxcontainer'>
                            {dummyPlaceList.map((place) => (
                                <div className='placebox'>{place}</div>
                            ))}
                        </div>
                    </div>
                    <div className='coursecontainer'>
                       <p className='itemtitle'>코스</p>
                       <div className='coursebox'>
                            {coursedata}
                       </div>
                    </div>
                    <div className='introductioncontainer'>
                       <p className='itemtitle'>한줄소개</p>
                       <div className='introductionbox'>
                            {introductiondata}
                       </div>
                    </div>
                </div>
            </div>
            <p className='certifytitle'>도전 인증하기</p>
            <div className='certifycontainer'>
                <PreviewBox />
                <div className='certifybox'>
                    <div className='certifyheader'>
                        <div className='certifyheaderleft'>
                            <img
                                src={userProfile ? userProfile : DefaultProfile}
                                alt="유저 프로필 이미지"
                                className="sdb-user-profile-img"
                            />
                            <p className='writer'>작성자</p>
                            <p className='satisfaction'>만족도</p>
                            <div>
                                <span onClick={handleClickStar1}>★</span>
                                {satisfaction >= 2 ? <span onClick={handleClickStar2}>★</span> : <span onClick={handleClickStar2}>☆</span>}
                                {satisfaction >= 3 ? <span onClick={handleClickStar3}>★</span> : <span onClick={handleClickStar3}>☆</span>}
                                {satisfaction >= 4 ? <span onClick={handleClickStar4}>★</span> : <span onClick={handleClickStar4}>☆</span>}
                                {satisfaction === 5 ? <span onClick={handleClickStar5}>★</span> : <span onClick={handleClickStar5}>☆</span>}
                            </div>
                        </div>
                        <div className='certifyheaderright'>
                            {dateString}
                        </div>
                    </div>
                    <textarea className='certifytextarea'></textarea>
                    <div className='buttoncontainer'>
                        <Button img={uploadIcon} type={'default'}/>
                    </div>
                </div>
            </div>
            <p className='reviewtitle'>한줄 리뷰</p>
        </div>
    )
};
export default CourseReview;