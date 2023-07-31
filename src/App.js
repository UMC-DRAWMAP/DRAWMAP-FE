import { Reset } from 'styled-reset';
import './App.scss';
import Button from './components/Button';
import ButtonSelect from './components/ButtonSelect';
import Img from './assets/images/right-btn.svg';

function App() {
	return (
		<div className="App">
			<Reset />
			<Button img={Img} content={'더보기'} type={'acting'} />
			<ButtonSelect>
				<option value="hi">jdddddddo</option>
				<option value="hi">jo</option>
				<option value="hi">jo</option>
			</ButtonSelect>
		</div>
	);
}

export default App;
