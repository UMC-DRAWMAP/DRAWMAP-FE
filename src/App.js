import { Reset } from 'styled-reset';
import './App.scss';
import Button from './components/Button';
import Img from './assets/images/save.png';

function App() {
	return (
		<div className="App">
			<Reset />
			<Button img={Img} content={'업로드'} type={'acting'} />
		</div>
	);
}

export default App;
