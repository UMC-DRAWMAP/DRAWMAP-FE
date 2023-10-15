import { Reset } from 'styled-reset';
import './App.scss';
import MonthCourse from './pages/MonthCourse';
import CourseList from './pages/CourseList';
import CourseInput from './pages/CourseInput';
import CourseReview from './pages/CourseReview';
import UserInput from './pages/UserInput';
import Profile from './pages/Profile';
import ProfileModify from './pages/ProfileModify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MonthCourse />} />
					<Route path="/courselist" element={<CourseList />} />
					<Route path="/courseinput" element={<CourseInput />} />
					<Route path="/coursereview" element={<CourseReview />} />
					<Route path="/userinput" element={<UserInput />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/profile/modify" element={<ProfileModify />} />
				</Routes>
			</BrowserRouter>
			<Reset />
		</div>
	);
}

export default App;
