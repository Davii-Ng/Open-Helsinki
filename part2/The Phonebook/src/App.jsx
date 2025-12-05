import { useState, useEffect, use } from 'react';
import Filter from './Filter';
import PersonForm from './PersonForm';
import Persons from './PersonName';
import axios from 'axios';
import getAll from './services/Person';


const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log('effect')
    getAll.getAll().then(initialPersons => {
      setPersons(initialPersons)
    });
  }, []);

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event) => setFilter(event.target.value);
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);

  const checkDuplicate = () =>
    persons.some(p => p.name === newName || p.number === newNumber);

  const addName = (event) => {
    event.preventDefault();
    if (checkDuplicate()) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    };

    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} handleFilterChange={handleFilterChange} />

      <h3>Add a new</h3>

      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons persons={filteredPersons} />
    </div>
  );
};

export default App;
