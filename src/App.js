import { Reset } from 'styled-reset';
import './App.scss';
import Button from './components/Button';
import Img from './assets/images/save.svg';
import ChallengeRowBox from './components/ChallengeRowBox';
import SmallDrawBox from './components/SmallDrawBox';
import MapImg from './assets/images/alram.svg';
import SmallMap from './assets/images/heart.svg';

function App() {
	return (
		<div className="App">
			<Reset />
			{/* <Button img={Img} content={'더보기'} type={'default'} /> */}
			<ChallengeRowBox
				img={MapImg}
				district={'경기'}
				title={'개구리'}
				date={'2022.06.02'}
				rating={'상'}
				content={'안녕하세요'}
			/>
			<SmallDrawBox img={SmallMap} userName={'닉네임'} />
		</div>
	);
}

export default App;
