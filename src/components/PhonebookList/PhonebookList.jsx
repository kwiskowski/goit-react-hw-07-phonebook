import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectError,
  selectIsLoading,
} from 'components/redux/selectors';
import { fetchContacts } from 'components/redux/operations';
import PhonebookItem from 'components/PhonebookItem/PhonebookItem';
import { Loader } from 'components/Loader/Loader';

function PhonebookList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && !error ? (
        <Loader />
      ) : filteredContacts.length === 0 && !error ? (
        <p>Sorry, there are no matches to this query</p>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <PhonebookItem key={id} contact={{ id, name, number }} />
        ))
      )}
    </ul>
  );
}

export default PhonebookList;
