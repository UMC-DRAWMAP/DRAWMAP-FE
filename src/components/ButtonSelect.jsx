import './ButtonSelect.scss';

export default function ButtonSelect({ name, id, optionTitle, children }) {
	return (
		// name : select name
		// id : select id
		// optionTitle : value 없이 select 첫 단에만 글을 넣고 싶을 때 사용
		// children : option 태그의 위치 (해당 컴포넌트를 사용할 때, 컴포넌트를 여닫은 사이에 원하는 option 태그 작성)
		<select name={name} id={id}>
			<option value="" style={{ display: optionTitle ? 'block' : 'none' }}>
				{optionTitle}
			</option>
			{children}
		</select>
	);
}
