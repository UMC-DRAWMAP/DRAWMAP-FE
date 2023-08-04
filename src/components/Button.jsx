import './Button.scss';

export default function Button({ img, type, content, onClick }) {
	return (
		<button className={`btn ${type}`} onClick={onClick}>
			<img src={img} alt="button img" style={{ display: img ? 'block' : 'none' }} />
			<span style={{ display: img ? 'none' : 'block' }}>{content}</span>
		</button>
	);
}
