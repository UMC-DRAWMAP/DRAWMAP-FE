import Header from '../components/Header';
import Footer from '../components/Footer';
import Button from '../components/Button';
import CourseListView from '../components/CourseListView';

export default function CourseList() {
	return (
		<div className="course-list">
			<Header />
			<div className="cl-title">드로맵 개발코스 공유하기</div>
			<div className="cl-btn-group">
				<Button type={'text-btn'} content={'인기순'} />
				<Button type={'text-btn'} content={'최신순'} />
				<Button type={'text-btn'} content={'지역별'} />
			</div>
			<CourseListView />
			<Footer />
		</div>
	);
}
