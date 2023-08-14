import { Reset } from 'styled-reset';
import './App.scss';
<<<<<<< HEAD
<<<<<<< HEAD
import Button from './components/Button';
import ButtonSelect from './components/ButtonSelect';
import Img from './assets/images/save.svg';
=======
import SmallDrawBox from './components/SmallDrawBox';
>>>>>>> feat/SmallDrawBox
=======
// import SmallDrawBox from './components/SmallDrawBox';
import ChallengeRowBox from './components/ChallengeRowBox';
>>>>>>> feat/ChallengeRowBox

function App() {
	return (
		<div className="App">
			<Reset />
<<<<<<< HEAD
<<<<<<< HEAD
			<Button img={Img} content={'더보기'} type={'default'} />
			<ButtonSelect>
				<option value="hi">jdddddddo</option>
				<option value="hi">jo</option>
				<option value="hi">jo</option>
			</ButtonSelect>
=======
			<SmallDrawBox />
>>>>>>> feat/SmallDrawBox
=======
			<ChallengeRowBox
				img={'https://navermaps.github.io/ios-map-sdk/assets/2-3-basic.png'}
				district={'서울'}
				title={'frog'}
				date={'2023.08.02'}
				rating={'good'}
				content={'ggggg'}
			/>
>>>>>>> feat/ChallengeRowBox
		</div>
	);
}

export default App;
