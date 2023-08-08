import { React, useState, useEffect } from 'react';
import ChallengeRowBox from './ChallengeRowBox';
import Paging from './Paging';

const lists = [
	{
		img: 'https://navermaps.github.io/ios-map-sdk/assets/2-3-basic.png',
		district: 'Suwon',
		title: 'flog',
		date: '2020.02.02',
		rating: 'hard',
		content: 'so~~',
	},
	{
		img: 'https://navermaps.github.io/ios-map-sdk/assets/2-3-basic.png',
		district: 'Suwon',
		title: 'flog',
		date: '2020.02.02',
		rating: 'hard',
		content: 'so~~',
	},
	{
		img: 'https://navermaps.github.io/ios-map-sdk/assets/2-3-basic.png',
		district: 'Suwon',
		title: 'flog',
		date: '2020.02.02',
		rating: 'hard',
		content: 'so~~',
	},
];

const ListView = () => {
	const [lists, setItems] = useState([]); //리스트에 나타낼 아이템
	const [count, setCount] = useState(0); //아이템 총 개수
	const [currentpage, setCurrentpage] = useState(1); //현재페이지
	const [postPerPage] = useState(9); //페이지당 아이템 개수

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

	return (
		<>
			{currentPosts.map((item) => (
				<ChallengeRowBox {...item} />
			))}
			<Paging page={currentpage} count={count} setPage={setPage} />
		</>
	);
};
export default ListView;
