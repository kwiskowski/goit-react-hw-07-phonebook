import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'components/redux/selectors';
import { setFilter } from 'components/redux/filterSlice';
import css from './PhonebookFilter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
      disabled={useSelector(selectContacts).length === 0}
    />
  );
}

export default Filter;
