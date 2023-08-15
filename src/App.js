import { Reset } from 'styled-reset';
import './App.scss';
import Button from './components/Button';
import Img from './assets/images/more.svg';
import ChallengeRowBox from './components/ChallengeRowBox';
import SmallDrawBox from './components/SmallDrawBox';
import MapImg from './assets/images/alram.svg';
import SmallMap from './assets/images/heart.svg';
import CourseList from './pages/CourseList';
import ArchiveBox from './components/ArchiveBox';

function App() {
	return (
		<div className="App">
			<Reset />
			{/* <CourseList /> */}
			<ArchiveBox />
		</div>
	);
}

export default App;
