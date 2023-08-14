import './ChallengeRowBox.scss';
import Button from './Button';
import HeartImg from '../assets/images/heart.svg';
import BikeImg from '../assets/images/bike.svg';

// 난이도를 DB에서 어떻게 저장하는지를 확인하고 숫자라면 프론트에서 변환하여 별이미지로 변경하는 등의 작업을 해야 할 듯

export default function ChallengeRowBox({ img, district, title, date, rating, content }) {
	return (
		<div className="crb-body">
			<div className="crb-img">
				<img className="crb-map-img" src={img} alt="드로맵 지도 이미지" />
				<div className="crb-district">{district}</div>
			</div>
			<div className="crb-text">
				<div className="crb-title">{title}</div>
				<div className="crb-date">작성일 {date}</div>
				<div className="crb-rating">난이도 {rating}</div>
				<div className="crb-content">{content}</div>
				<div className="crb-btn-group">
					<Button img={HeartImg} type={'default'}></Button>
					<Button img={BikeImg} type={'default'}></Button>
				</div>
			</div>
		</div>
	);
}
