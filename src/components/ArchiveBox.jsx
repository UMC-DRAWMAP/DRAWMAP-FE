import './ArchiveBox.scss';
import DefaultProfile from '../assets/images/profile-mini.svg';
import Button from './Button';
import HeartImg from '../assets/images/heart.svg';
import BikeImg from '../assets/images/bike.svg';

export default function ArchiveBox({ img, district, userName, userProfile, title, date, rating, content }) {
	return (
		<div className="archive-box">
			<div className="ab-img">
				<img className="ab-map-img" src={img} alt="드로맵 지도 이미지" />
				<div className="ab-district">{district}</div>
				<div className="ab-user-info">
					<span className="ab-user-name">{userName}</span>
					<img
						src={userProfile ? userProfile : DefaultProfile}
						alt="유저 프로필 이미지"
						className="ab-user-profile-img"
					/>
				</div>
			</div>
			<div className="ab-text">
				<div className="ab-title">{title}</div>
				<div className="ab-date">작성일 {date}</div>
				<div className="ab-rating">난이도 {rating}</div>
				<div className="ab-content">{content}</div>
				<div className="ab-btn-group">
					<Button img={HeartImg} type={'default'}></Button>
					<Button img={BikeImg} type={'default'}></Button>
				</div>
			</div>
		</div>
	);
}
