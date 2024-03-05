import PhonebookForm from './PhonebookForm/PhonebookForm';
import PhonebookList from './PhonebookList/PhonebookList';
import Filter from './PhonebookFilter/PhonebookFilter';
import Section from './Section/Section';
import css from './App.module.css';

function App() {
  return (
    <div className={css.appContainer}>
      <Section title="Phonebook">
        <PhonebookForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <PhonebookList />
      </Section>
    </div>
  );
}

export default App;
