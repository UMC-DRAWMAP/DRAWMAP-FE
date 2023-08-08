import Pagination from 'react-js-pagination';
import './Paging.scss';
export default function Paging({ page, count, setPage }) {
	return (
		<Pagination
			activePage={page}
			itemsCountPerPage={10}
			totalItemsCount={count}
			pageRangeDisplayed={5}
			prevPageText={'‹'}
			nextPageText={'›'}
			onChange={setPage}
		/>
	);
}
