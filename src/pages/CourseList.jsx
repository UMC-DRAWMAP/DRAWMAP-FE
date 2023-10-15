import './CourseList.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import CourseListView from '../components/CourseListView';
import PencilImg from '../assets/images/pencil.svg';
import XBtn from '../assets/images/x-btn.svg';
import ButtonSelect from '../components/ButtonSelect';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CourseList() {
	const [textValue, setTextValue] = useState('');

	const getTextValue = (text) => {
		setTextValue(text);
	};

	// const jwtToken = 'soha';
	useEffect(() => {
		axios({
			// headers: {
			// 	'x-access-token': jwtToken,
			// },
			method: 'get',
			url: 'http://54.80.0.204:9000/usercourse',
		}).then((res) => {
			console.log(res);
		});
	}, []);

	return (
		<div className="course-list">
			<Header />
			<div className="cl-title">드로맵 개발코스 공유하기</div>
			<div className="cl-btn-group">
				<Button type={'text-btn'} content={'인기순'} />
				<Button type={'text-btn'} content={'최신순'} />
				<ButtonSelect title={'지역별'} getTextValue={getTextValue} textValue={textValue} />
				{/* {getTextValue} */}
				<div className="cl-location" style={{ display: textValue ? 'inline-flex' : 'none' }}>
					{textValue}
					<img src={XBtn} alt="삭제 버튼" className="cl-x-btn" />
				</div>
				<Button img={PencilImg} type={'default'} />
			</div>
			<CourseListView />
			<Footer />
		</div>
	);
}
