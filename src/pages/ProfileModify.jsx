import Header from '../components/Header';
import Footer from '../components/Footer';
import SmallDrawBox from '../components/SmallDrawBox';
import Button from '../components/Button';
import PreviewBox from '../components/PreviewBox';
import DropBtn from '../assets/images/dropdown-btn.svg';
import PlusBtn from '../assets/images/plus.svg';
import CheckBtn from '../assets/images/check.svg';
import { useState } from 'react';

import './Profile.scss';

const dataList = {
	name: '드로맵',
	id: 'dsfasf',
	birth: '2000.01.02',
	location: ['서울', '경기'],
	text: '안녕하세요~~',
};

export default function Profile() {
	const [isActive, setIsActive] = useState(false);
	const [name, setName] = useState(dataList.name);
	const [date, setDate] = useState(
		`${dataList.birth.substring(0, 4)}-${dataList.birth.substring(5, 7)}-${dataList.birth.substring(8, 10)}`
	);
	return (
		<div className="profile">
			<Header />
			<div className="pf-my-page">
				<div className="pf-mp-title">마이페이지</div>
				{/* 마이페이지 수정하기 */}
				<div className="pf-mp-group">
					<PreviewBox className="pf-mp-left" />
					<div className="pf-mp-right">
						<input
							type="text"
							className="mp-name"
							value={name}
							style={{ padding: '0px' }}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<div className="mp-info">
							<div className="mp-id">{dataList.id}</div>
							<input
								className="mp-birth"
								type="date"
								name=""
								id=""
								onChange={(e) => {
									setDate(e.target.value);
								}}
								value={date}
							/>
						</div>
						<div className="mp-location">
							{dataList.location.map((it) => {
								return <div className="location-box">{it}</div>;
							})}
							<Button type={'default'} img={PlusBtn} />
						</div>
						<textarea className="mp-text modify">{dataList.text}</textarea>
						<div className="mp-check-btn">
							<Button type={'default'} img={CheckBtn} />
						</div>
					</div>
				</div>
			</div>
			<div className="pf-course">
				<div className="pf-course-list">
					<div className="course-title">참여한 이달의 도전코스</div>
					{/* 아이템의 갯수가 6개를 초과하면 펼치기/접기 버튼 활성화 */}
					<div className="course-list">
						<SmallDrawBox
							img={
								'https://upload.wikimedia.org/wikipedia/commons/4/40/%EC%97%AC%EC%9D%98%EB%8F%84_%EC%A7%80%EB%8F%84.png'
							}
							userName={'드로맵1'}
						/>
						<SmallDrawBox
							img={'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/7/125/54.png'}
							userName={'드로맵2'}
						/>
						<SmallDrawBox
							img={'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/7/124/54.png'}
							userName={'드로맵3'}
						/>
						<SmallDrawBox
							img={'https://topopentile2.tmap.co.kr/tms/1.0.0/hd_tile/17/111768/80318.png'}
							userName={'드로맵4'}
						/>
						<SmallDrawBox
							img={'https://www.ydp.go.kr/site/www/images/contents/cts2884_det_img.jpg'}
							userName={'드로맵5'}
						/>
						<SmallDrawBox
							img={'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/4/765/495.png'}
							userName={'드로맵6'}
						/>

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
				{/* <div className="pf-course-list">
					<div className="course-title">참여한 이달의 도전코스</div>
					<div className="course-list"></div>
				</div> */}
				<div className="pf-course-list">
					<div className="course-title">찜한코스</div>
					<div className="course-list">
						<SmallDrawBox
							img={
								'https://upload.wikimedia.org/wikipedia/commons/4/40/%EC%97%AC%EC%9D%98%EB%8F%84_%EC%A7%80%EB%8F%84.png'
							}
							userName={'드로맵1'}
						/>
						<SmallDrawBox
							img={'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/7/125/54.png'}
							userName={'드로맵2'}
						/>
						<SmallDrawBox
							img={'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/7/124/54.png'}
							userName={'드로맵3'}
						/>
						<SmallDrawBox
							img={'https://topopentile2.tmap.co.kr/tms/1.0.0/hd_tile/17/111768/80318.png'}
							userName={'드로맵4'}
						/>
						<SmallDrawBox
							img={'https://www.ydp.go.kr/site/www/images/contents/cts2884_det_img.jpg'}
							userName={'드로맵5'}
						/>
						<SmallDrawBox
							img={'https://map.daumcdn.net/map_k3f_prod/bakery/image_map_png/PNG01/v22_galhg/4/765/495.png'}
							userName={'드로맵6'}
						/>

						{/* <SmallDrawBox /> */}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
