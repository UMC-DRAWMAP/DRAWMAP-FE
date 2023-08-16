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

export default function ButtonSelect() {
	const [isActive, setIsActive] = useState(false);

	return (
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
					{/* 받은 데이터 뿌리기 */}
					{dataList.map((it) => {
						return <li>{it.item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
}
