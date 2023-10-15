import '../components/Header.scss';
import logo_small from '../assets/images/logo-drawmap.svg';
import ProfileIcon from '../assets/images/profile-mini.svg';
import alarmIcon from '../assets/images/alram.svg';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Header() {
	const [accessToken, setAccessToken] = useState('');

	const Rest_api_key = '607e0cb3beff9917f9c4c6224cae3920'; //REST API KEY
	const redirect_uri = 'http://localhost:3000/'; //Redirect URI
	// oauth 요청 URL
	const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
	const handleLogin = () => {
		window.location.href = kakaoURL;
	};

	useEffect(() => {
		const code = new URL(window.location.href).searchParams.get('code');
		setAccessToken(code);

		if (accessToken !== null && accessToken !== '') {
			axios({
				method: 'post',
				url: 'http://54.80.0.204:9000/user/signup',
				headers: {
					Authorization: `Bearer ${accessToken}`,
					'Content-Type': 'application/json',
				},
			}).then((res) => {
				console.log(res);
				// sessionStorage.setItem('accessToken', res.data.result.accessToken);
			});
		}
	}, [accessToken]);
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
					<span className="head__right__nav__item" onClick={handleLogin}>
						{accessToken !== '' ? `로그인` : `로그아웃`}
					</span>
				</div>
			</header>
			{/* Add the rest of your content here */}
		</div>
	);
}

export default Header;
