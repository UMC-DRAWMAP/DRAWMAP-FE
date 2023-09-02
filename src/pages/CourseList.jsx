import './CourseList.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import CourseListView from '../components/CourseListView';
import PencilImg from '../assets/images/pencil.svg';
import ButtonSelect from '../components/ButtonSelect';
import { useState } from 'react';

export default function CourseList() {
	const [textValue, setTextValue] = useState('');

	const getTextValue = (text) => {
		setTextValue(text);
	};

	return (
		<div className="course-list">
			<Header />
			<div className="cl-title">드로맵 개발코스 공유하기</div>
			<div className="cl-btn-group">
				<Button type={'text-btn'} content={'인기순'} />
				<Button type={'text-btn'} content={'최신순'} />
				<ButtonSelect title={'지역별'} getTextValue={getTextValue} textValue={textValue} />
				<div className="loaction">{textValue}</div>
				<Button img={PencilImg} type={'default'} />
			</div>
			<CourseListView />
			<Footer />
		</div>
	);
}
