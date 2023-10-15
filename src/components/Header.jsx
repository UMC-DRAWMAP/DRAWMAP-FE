import '../components/Header.scss';
import logo_small from '../assets/images/logo-drawmap.svg';
import ProfileIcon from '../assets/images/profile-mini.svg';
import alarmIcon from '../assets/images/alram.svg';

function Header() {
	return (
		<div className="Header">
			<header className="head">
				<div className="head__left">
					<img src={logo_small} alt="Logo" className="head__left__logo" />
					<div className="head__left__nav">
						<span className="head__left__nav__item">도전코스</span>
						<span className="head__left__nav__item">코스개발</span>
						<span className="head__left__nav__item">마이페이지</span>
					</div>
				</div>
				<div className="head__right">
					<img src={alarmIcon} alt="Alarm" className="head__right__icon" />
					<img src={ProfileIcon} alt="Bike" className="head__right__icon" />
					<span className="head__right__nav__item">로그인</span>
				</div>
			</header>
			{/* Add the rest of your content here */}
		</div>
	);
}

export default Header;
