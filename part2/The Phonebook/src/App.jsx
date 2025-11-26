import { useState } from 'react'


const DisplayPerson = ({person}) => {
    return(
      <div>{person.name} {person.number}</div>
    )
  }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const filterPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  const CheckDuplicate = () => {
    for (let i = 0; i < persons.length; i++){
      if (persons[i].name ===  newName || persons[i].number == newNumber){
        return true
      } 
    }
    return false
  }

  const addName = (event) =>{
    event.preventDefault()
    if (CheckDuplicate()){
      alert(`${newName} is already added to phonebook`)
      return
    }
    const nameObject = { name: newName,  number: newNumber}
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) =>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }


  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value = {filter} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          number: <input value = {newNumber} onChange = {handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filterPersons.map(person => <DisplayPerson key = {person.id} person = {person}/>)}
    </div>
  )
}

export default App