import './ButtonSelect.scss';
import DropBtn from '../assets/images/dropdown-btn.svg';
import { useState } from 'react';

const dataList = [
	{
		item: '서울',
	},
	{
		item: '경기',
	},
	{
		item: '인천',
	},
	{
		item: '대전',
	},
	{
		item: '광주',
	},
	{
		item: '울산',
	},
	{
		item: '부산',
	},
	{
		item: '대구',
	},
	{
		item: '제주',
	},
	{
		item: '강원',
	},
	{
		item: '충청',
	},
];
// const dataList = {
// 	1: {
// 		item: '서울',
// 	},
// 	2: {
// 		item: '경기',
// 	},
// 	3: {
// 		item: '인천',
// 	},
// 	4: {
// 		item: '대전',
// 	},
// 	5: {
// 		item: '광주',
// 	},
// 	6: {
// 		item: '울산',
// 	},
// 	7: {
// 		item: '부산',
// 	},
// 	8: {
// 		item: '대구',
// 	},
// 	9: {
// 		item: '제주',
// 	},
// 	10: {
// 		item: '강원',
// 	},
// 	11: {
// 		item: '충청',
// 	},
// };

export default function ButtonSelect() {
	const [isActive, setIsActive] = useState(false);

	// console.log(Object.keys(dataList));
	// json 형태일 때 값 불러오기
	// for (const key in Object.keys(dataList)) {
	// 	let li = `<li>${dataList[key]}</li>`;
	// 	// console.log(dataList[key]);
	// 	console.log(li);
	// }

	return (
		// name : select name
		// id : select id
		// optionTitle : value 없이 select 첫 단에만 글을 넣고 싶을 때 사용
		// children : option 태그의 위치 (해당 컴포넌트를 사용할 때, 컴포넌트를 여닫은 사이에 원하는 option 태그 작성)
		<div
			className="sbtn-wrapper"
			onClick={() => {
				setIsActive(!isActive);
			}}
		>
			<div className="select-btn">
				<span>Select Value</span>
				<img
					className="sbtn-drop-down"
					src={DropBtn}
					alt="펼치기"
					style={{ transform: isActive ? 'rotate(-180deg)' : 'none' }}
				/>
			</div>
			<div className="sbtn-content" style={{ display: isActive ? 'block' : 'none' }}>
				<ul className="sbtn-options">
					{dataList.map((it) => {
						<li>{it.value}</li>;
					})}
					{/* <li>서울특별시장안구우우루우ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</li>
					<li>경기</li>
					<li>인천</li>
					<li>대전</li>
					<li>부산</li>
					<li>서울</li>
					<li>경기</li>
					<li>인천</li>
					<li>대전</li>
					<li>부산</li>
					<li>서울</li>
					<li>경기</li>
					<li>인천</li>
					<li>대전</li>
					<li>부산</li>
					<li>서울</li>
					<li>경기</li>
					<li>인천</li>
					<li>대전</li>
					<li>부산</li>
					<li>서울</li>
					<li>경기</li>
					<li>인천</li>
					<li>대전</li>
					<li>부산</li> */}
				</ul>
			</div>
		</div>
	);
}
