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
import ButtonSelect from './components/ButtonSelect';
import CourseList from './pages/CourseList';

function App() {
	return (
		<div className="App">
			<Reset />
			{/* <Button content={'더보기'} type={'text-more'} />
			<ChallengeRowBox
				img={MapImg}
				district={'경기'}
				title={'개구리'}
				date={'2022.06.02'}
				rating={'상'}
				content={'안녕하세요'}
			/>
			<SmallDrawBox img={SmallMap} userName={'닉네임'} />
			<ArchiveBox
				img={MapImg}
				district={'경기'}
				userName={'닉네임'}
				title={'개구리'}
				date={'2022.06.02'}
				rating={'상'}
				content={'안녕하세요'}
			/> */}
			{/* <ButtonSelect title={'지역'} /> */}
			<CourseList />
		</div>
	);
}

export default App;
