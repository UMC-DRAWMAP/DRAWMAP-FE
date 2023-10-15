import '../components/Header.scss';
import logo_small from '../assets/images/logo-drawmap.svg';
import ProfileIcon from '../assets/images/profile-mini.svg';
import alarmIcon from '../assets/images/alram.svg';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
	const navigate = useNavigate();
	const jwtToken = sessionStorage.getItem('accessToken');

	const [accessToken, setAccessToken] = useState('');

	const Rest_api_key = '607e0cb3beff9917f9c4c6224cae3920'; //REST API KEY
	const redirect_uri = 'http://localhost:3000/userinput'; //Redirect URI
	// oauth 요청 URL
	const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

	console.log(accessToken);
	useEffect(() => {
		const code = new URL(window.location.href).searchParams.get('code');
		setAccessToken(code);

		sessionStorage.setItem('accessToken', accessToken);

		// if (accessToken !== null && accessToken !== '') {
		// 	console.log('axios', accessToken);
		// 	axios({
		// 		headers: {
		// 			Authorization: `Bearer ${accessToken}`,
		// 			'Content-Type': 'application/json',
		// 		},
		// 		method: 'post',
		// 		url: 'http://54.80.0.204:9000/user/login/',
		// 		data: {
		// 			access_token: accessToken,
		// 		},
		// 	}).then((res) => {
		// 		if (res.data.code === 200) {
		// 			console.log(res);
		// 			sessionStorage.setItem('accessToken', res.data.result.accessToken);
		// 			navigate('/userinput');
		// 		}
		// 	});
		// }
	}, [accessToken]);

	const handleLogin = () => {
		window.location.href = kakaoURL;
	};

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
					<span className="head__right__nav__item">
						{jwtToken === '' || jwtToken === null ? (
							<span onClick={handleLogin}>로그인</span>
						) : (
							<span
								onClick={() => {
									sessionStorage.clear();
								}}
							>
								로그아웃
							</span>
						)}
					</span>
				</div>
			</header>
			{/* Add the rest of your content here */}
		</div>
	);
}

export default Header;
