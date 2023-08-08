import './SmallDrawBox.scss';
import DefaultProfile from '../assets/images/profile-mini.svg';

export default function SmallDrawBox(userProfile) {
	return (
		<div className="sdb-body">
			<img
				src="https://navermaps.github.io/ios-map-sdk/assets/2-3-basic.png"
				alt="지도 이미지"
				className="sdb-map-img"
			/>
			<div className="sdb-user-info">
				<span className="sdb-user-name">닉네임</span>
				<img
					src={userProfile ? DefaultProfile : userProfile}
					alt="유저 프로필 이미지"
					className="sdb-user-profile-img"
				/>
			</div>
		</div>
	);
}

// userProfile : 나중에 저장할 때, 원형(디자인 되어있는 상태)로 저장할 것인지? 아니면 그냥 이미지만 저장할 것인지
// 그렇다면 유저가 프로필 이미지를 등록하지 않았을 때, DB에 기본 이미지를 자동으로 넣어서 저장할 것인지? 아니면, 매번 프론트에서 기본 이미지를 호출할 것인지 => 내 생각으로는 DB에 기본 이미지를 저장해두고 불러오는게 좋을 듯
