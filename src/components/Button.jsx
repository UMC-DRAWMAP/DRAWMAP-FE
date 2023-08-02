import './Button.scss';

export default function Button({ img, type, content }) {
	return (
		<button className={`btn ${type}`}>
			<img src={img} alt="button img" style={{ display: img ? 'block' : 'none' }} />
			<span style={{ display: img ? 'none' : 'block' }}>{content}</span>
		</button>
	);
}
