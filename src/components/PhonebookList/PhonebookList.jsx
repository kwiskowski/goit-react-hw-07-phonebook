import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'components/redux/selectors';
import PhonebookItem from 'components/PhonebookItem/PhonebookItem';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

function PhonebookList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <PhonebookItem key={id} contact={{ id, name, number }} />
      ))}
    </ul>
  );
}

export default PhonebookList;
