import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';
import { setContactsFilter } from 'components/redux/filterSlice';
import css from './PhonebookFilter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setContactsFilter(e.target.value));
  };

  return (
    <input
      className={css.filterInput}
      type="text"
      name="filter"
      placeholder="Search by name"
      value={useSelector(getFilter)}
      onChange={handleFilterChange}
      disabled={useSelector(getContacts).length === 0}
    />
  );
}

export default Filter;
