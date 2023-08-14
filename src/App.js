import { Reset } from 'styled-reset';
import './App.scss';
<<<<<<< HEAD
import Button from './components/Button';
import ButtonSelect from './components/ButtonSelect';
import Img from './assets/images/save.svg';
=======
import SmallDrawBox from './components/SmallDrawBox';
>>>>>>> feat/SmallDrawBox

function App() {
	return (
		<div className="App">
			<Reset />
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
		</div>
	);
}

export default App;
