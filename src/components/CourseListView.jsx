import { React, useState, useEffect } from 'react';
import ArchiveBox from './ArchiveBox';
import './ListView.scss';
import Paging from './Paging';

const lists = [
	{
		img: 'https://map.seoul.go.kr/smgis2/mapsvr/getTileMap?key=ea061e94268b45c0b4ac9859a7b591af&URL=http://smjd3:7070/MapAppServer/Service?timg=dawul_kor_normal/7/2/1/105_91.png',
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2020.02.02',
		rating: '상',
		content: '안녕하세요!',
	},
	{
		img: 'https://map.seoul.go.kr/smgis2/mapsvr/getTileMap?key=ea061e94268b45c0b4ac9859a7b591af&URL=http://smjd3:7070/MapAppServer/Service?timg=dawul_kor_normal/7/2/1/105_91.png',
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2020.02.02',
		rating: '상',
		content: '안녕하세요!',
	},
	{
		img: 'https://map.seoul.go.kr/smgis2/mapsvr/getTileMap?key=ea061e94268b45c0b4ac9859a7b591af&URL=http://smjd3:7070/MapAppServer/Service?timg=dawul_kor_normal/7/2/1/105_91.png',
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2020.02.02',
		rating: '상',
		content: '안녕하세요!',
	},
	{
		img: 'https://map.seoul.go.kr/smgis2/mapsvr/getTileMap?key=ea061e94268b45c0b4ac9859a7b591af&URL=http://smjd3:7070/MapAppServer/Service?timg=dawul_kor_normal/7/2/1/105_91.png',
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2020.02.02',
		rating: '상',
		content: '안녕하세요!',
	},
	{
		img: 'https://map.seoul.go.kr/smgis2/mapsvr/getTileMap?key=ea061e94268b45c0b4ac9859a7b591af&URL=http://smjd3:7070/MapAppServer/Service?timg=dawul_kor_normal/7/2/1/105_91.png',
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2020.02.02',
		rating: '상',
		content: '안녕하세요!',
	},
	{
		img: 'https://map.seoul.go.kr/smgis2/mapsvr/getTileMap?key=ea061e94268b45c0b4ac9859a7b591af&URL=http://smjd3:7070/MapAppServer/Service?timg=dawul_kor_normal/7/2/1/105_91.png',
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2020.02.02',
		rating: '상',
		content: '안녕하세요!',
	},
	{
		img: 'https://map.seoul.go.kr/smgis2/mapsvr/getTileMap?key=ea061e94268b45c0b4ac9859a7b591af&URL=http://smjd3:7070/MapAppServer/Service?timg=dawul_kor_normal/7/2/1/105_91.png',
		district: '경기',
		userName: '닉네임',
		title: '개구리',
		date: '2020.02.02',
		rating: '상',
		content: '안녕하세요!',
	},
];

const CourseListView = () => {
	const [items, setItems] = useState([]); //리스트에 나타낼 아이템
	const [count, setCount] = useState(0); //아이템 총 개수
	const [currentpage, setCurrentpage] = useState(1); //현재페이지
	const [postPerPage] = useState(10); //페이지당 아이템 개수

	const [indexOfLastPost, setIndexOfLastPost] = useState(0);
	const [indexOfFirstPost, setIndexOfFirstPost] = useState(0);
	const [currentPosts, setCurrentPosts] = useState(0);

	useEffect(() => {
		setCount(lists.length);
		setIndexOfLastPost(currentpage * postPerPage);
		setIndexOfFirstPost(indexOfLastPost - postPerPage);
		setCurrentPosts(lists.slice(indexOfFirstPost, indexOfLastPost));
	}, [currentpage, indexOfFirstPost, indexOfLastPost, lists, postPerPage]);

	const setPage = (e) => {
		setCurrentpage(e);
	};
	console.log(currentPosts);

	return (
		<div className="lv-body">
			<div className="lv-box-group">
				{lists.map((item) => (
					<ArchiveBox {...item} />
				))}
			</div>
			<Paging page={currentpage} count={count} setPage={setPage} />
		</div>
	);
};
export default CourseListView;
