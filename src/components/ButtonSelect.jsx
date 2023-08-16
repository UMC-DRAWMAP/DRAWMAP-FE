import './ButtonSelect.scss';
import DropBtn from '../assets/images/dropdown-btn.svg';
import { useState } from 'react';

export default function ButtonSelect() {
	const [isActive, setIsActive] = useState(false);

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
					<li>서울특별시장안구우우루우ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ</li>
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
					<li>부산</li>
				</ul>
			</div>
		</div>
	);
}
