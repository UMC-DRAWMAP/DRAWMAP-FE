import { Reset } from 'styled-reset';
import './App.scss';
import ArchiveBox from './components/ArchiveBox';

function App() {
	return (
		<div className="App">
			<Reset />
			<ArchiveBox/>
		</div>
	);
}

export default App;