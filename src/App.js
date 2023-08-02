import { Reset } from 'styled-reset';
import './App.scss';
// import SmallDrawBox from './components/SmallDrawBox';
import ChallengeRowBox from './components/ChallengeRowBox';

function App() {
	return (
		<div className="App">
			<Reset />
			<ChallengeRowBox
				img={'https://navermaps.github.io/ios-map-sdk/assets/2-3-basic.png'}
				district={'서울'}
				title={'frog'}
				date={'2023.08.02'}
				rating={'good'}
				content={'ggggg'}
			/>
		</div>
	);
}

export default App;
