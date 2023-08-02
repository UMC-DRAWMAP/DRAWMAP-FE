import { Reset } from 'styled-reset';
import './App.scss';
import DrawBox from './components/DrawBox';

function App() {
	return (
		<div className="App">
			<Reset />
			<DrawBox />
		</div>
	);
}

export default App;
