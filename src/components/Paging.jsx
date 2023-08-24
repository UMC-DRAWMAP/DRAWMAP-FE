import Pagination from 'react-js-pagination';
import Button from './Button';
import RigthArrow from '../assets/images/arrow-right.svg';
import LeftArrow from '../assets/images/arrow-left.svg';
import './Paging.scss';
export default function Paging({ page, count, setPage, itemsCountPerPage }) {
	return (
		<Pagination
			activePage={page}
			itemsCountPerPage={itemsCountPerPage}
			totalItemsCount={count}
			pageRangeDisplayed={5}
			prevPageText={<Button img={LeftArrow} type={'arrow'} />}
			nextPageText={<Button img={RigthArrow} type={'arrow'} />}
			onChange={setPage}
		/>
	);
}
