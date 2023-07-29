export default function Button({ img, type, content }) {
	return (
		<div>
			<button className={type}>
				<img src={img} alt="button img" style={{ display: img ? 'block' : 'none' }} />
				{content}
			</button>
			{/* 색상만 변경 */}
			{/* acting 시 글자로 변경 */}
			{/* select 버튼 */}
			{/* 글자로만 된 버튼 */}
		</div>
	);
}
