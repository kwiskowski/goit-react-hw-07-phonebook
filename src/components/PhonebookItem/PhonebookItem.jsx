import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'components/redux/operations';
import css from './PhonebookItem.module.css';

function PhonebookItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={css.contactListItem}>
      <span className={css.contactName}>{contact.name}</span>
      <span className={css.contactNumber}>{contact.number}</span>
      <button className={css.contactButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
PhonebookItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default PhonebookItem;
