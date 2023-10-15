import Header from '../components/Header';
import Footer from '../components/Footer';
import SmallDrawBox from '../components/SmallDrawBox';
import Button from '../components/Button';
import PreviewBox from '../components/PreviewBox';
import Pencil from '../assets/images/pencil.svg';
import DropBtn from '../assets/images/dropdown-btn.svg';
import { ReactComponent as DefaultImg } from '../assets/images/char-pencil.svg';
import { useState } from 'react';

import './Profile.scss';

const dataList = {
	name: '드로맵',
	id: 'dsfasf',
	img: '',
	birth: '2000.01.02',
	location: ['서울', '경기'],
	text: '안녕하세요~~',
};

export default function Profile() {
	const [isActive, setIsActive] = useState(false);
	return (
		<div className="profile">
			<Header />
			<div className="pf-my-page">
				<div className="pf-mp-title">마이페이지</div>
				{/* 마이페이지 */}
				<div className="pf-mp-group">
					<div className="pf-mp-left">
						<DefaultImg
							className="mp-img"
							style={{ display: dataList.img ? 'none' : 'block', width: '125.878px', height: '136.368px' }}
						/>
						<img
							className="mp-img"
							src={dataList.img}
							alt="프로필 이미지"
							style={{ display: dataList.img ? 'block' : 'none' }}
						/>
					</div>
					<div className="pf-mp-right">
						<div className="mp-name">{dataList.name}</div>
						<div className="mp-info">
							<div className="mp-id">{dataList.id}</div>
							<div className="mp-birth">{dataList.birth}</div>
							<Button className="mp-modify-btn" type={'default'} img={Pencil} />
						</div>
						<div className="mp-location">
							{dataList.location.map((it) => {
								return <div className="location-box">{it}</div>;
							})}
						</div>
						<div className="mp-text">{dataList.text}</div>
					</div>
				</div>
			</div>
			<div className="pf-course">
				<div className="pf-course-list">
					<div className="course-title">참여한 이달의 도전코스</div>
					{/* 아이템의 갯수가 6개를 초과하면 펼치기/접기 버튼 활성화 */}
					<div className="course-list">
						<SmallDrawBox />
						<SmallDrawBox />
						<SmallDrawBox />
						<SmallDrawBox />
						<SmallDrawBox />
						<SmallDrawBox />
						{/* <SmallDrawBox /> */}
					</div>
					<div
						className="course-btn"
						onClick={() => {
							setIsActive(!isActive);
						}}
					>
						<div className="course-drop-text">{isActive ? '접기' : '펼치기'}</div>
						<img
							className="course-drop-btn"
							src={DropBtn}
							alt="펼치기"
							style={{ transform: isActive ? 'rotate(-180deg)' : 'none' }}
						/>
					</div>
				</div>
				<div className="pf-course-list">
					<div className="course-title">참여한 이달의 도전코스</div>
					<div className="course-list"></div>
				</div>
				<div className="pf-course-list">
					<div className="course-title">찜한코스</div>
					<div className="course-list"></div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
