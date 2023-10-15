import ArchiveBox from '../components/ArchiveBox';
import Button from '../components/Button';
import ButtonSelect from '../components/ButtonSelect';
import ChallengeColumnBox from '../components/ChallengeColumnBox';
import Header from '../components/Header';
import MapImg from '../assets/images/alram.svg';
import leftArrow from '../assets/images/arrow-left.svg';
import rightArrow from '../assets/images/arrow-right.svg';

import '../pages/MonthCourse.scss';
import Footer from '../components/Footer';
import { useState } from 'react';

const dummyChallengeCourse = [
	{
		title: '개구리',
		city: '서울',
		date: '2023.07.06',
		level: 3,
		info: '이 코스는 어디 어디 어디를 경유하여 어디로 향하는 코스입니다. 완성시 개구리가 나타납니다.',
	},
	{
		title: '개구리',
		city: '서울',
		date: '2023.07.06',
		level: 3,
		info: '이 코스는 어디 어디 어디를 경유하여 어디로 향하는 코스입니다. 완성시 개구리가 나타납니다.',
	},
	{
		title: '개구리',
		city: '서울',
		date: '2023.07.06',
		level: 3,
		info: '이 코스는 어디 어디 어디를 경유하여 어디로 향하는 코스입니다. 완성시 개구리가 나타납니다.',
	},
];

const dummyData = [
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '1',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '2',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '3',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '4',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '5',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '6',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '7',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '8',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '9',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '10',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '11',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '12',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '13',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '14',
		content: '안녕하세요',
	},
	{
		img: MapImg,
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2022.06.22',
		rating: '15',
		content: '안녕하세요',
	},
];

const MonthCourse = () => {
	const [startIdx, setStartIdx] = useState(0);
	const [endIdx, setEndIdx] = useState(5);
	const [isStart, setIsStart] = useState(true);
	const [isEnd, setIsEnd] = useState(false);

	let currentArray = dummyData.slice(startIdx, endIdx + 1);

	const handleChangeLeftButton = () => {
		setIsEnd(false);
		if (isEnd === true) {
			setEndIdx(endIdx - (dummyData.length % 6));
		} else {
			setEndIdx(endIdx - 6);
		}
		if (startIdx - 6 === 0) {
			setIsStart(true);
			setStartIdx(startIdx - 6);
		} else {
			setStartIdx(startIdx - 6);
		}
	};

	const handleChangeRightButton = () => {
		setIsStart(false);
		setStartIdx(startIdx + 6);
		if (endIdx + 6 > dummyData.length + 1) {
			setEndIdx(endIdx + (dummyData.length % 6));
			setIsEnd(true);
		} else {
			setEndIdx(endIdx + 6);
		}
	};

	const [textValue, setTextValue] = useState('');

	const getTextValue = (text) => {
		setTextValue(text);
	};

	return (
		<div className="MonthCourse">
			<Header />
			<p className="challengetitle">드로맵 이달의 도전 코스</p>
			<div className="monthchallengecontainer">
				{dummyChallengeCourse.map((it) => (
					<ChallengeColumnBox {...it} />
				))}
			</div>
			<p className="archivetitle">도전 코스 Archive</p>
			<div className="archivebuttoncontainer">
				<Button type={'text-btn'} content={'인기순'} />
				<Button type={'text-btn'} content={'최신순'} />
				<ButtonSelect title={'지역별'} getTextValue={getTextValue} textValue={textValue} />
			</div>
			<div className="archiveboxcontainer">
				{currentArray.map((it) => (
					<ArchiveBox {...it} />
				))}
			</div>
			{dummyData.length <= 6 ? (
				<div className="arrowbuttoncontainer"></div>
			) : isStart === true ? (
				<div className="arrowbuttoncontainer">
					<Button img={rightArrow} onClick={handleChangeRightButton} type={'more'} />
				</div>
			) : isEnd === true ? (
				<div className="arrowbuttoncontainer">
					{' '}
					<Button img={leftArrow} onClick={handleChangeLeftButton} type={'more'} />{' '}
				</div>
			) : (
				<div className="arrowbuttoncontainer">
					<Button img={leftArrow} onClick={handleChangeLeftButton} type={'more'} />
					<Button img={rightArrow} onClick={handleChangeRightButton} type={'more'} />
				</div>
			)}
			<Footer />
		</div>
	);
};

export default MonthCourse;
