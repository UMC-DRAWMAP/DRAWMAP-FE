import '../componets/Header.scss'
import logo_small from '../assets/images/logo_small.png';
import bikeIcon from '../assets/images/bike.png';
import alarmIcon from '../assets/images/alram.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__left">
          <img src={logo_small} alt="Logo" className="header__logo" />
          <div className="header__nav">
            <span className="header__nav-item">도전코스</span>
            <span className="header__nav-item">코스개발</span>
            <span className="header__nav-item">마이페이지</span>
          </div>
        </div>
        <div className="header__right">
          <img src={alarmIcon} alt="Alarm" className="header__alarm-icon" />
          <img src={bikeIcon} alt="Bike" className="header__bike-icon" />
          <span className="header__nav-item">로그아웃</span>
        </div>
      </header>
      {/* Add the rest of your content here */}
    </div>
  );
}

export default App;
