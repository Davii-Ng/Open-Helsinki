import { useState } from 'react'


const DisplayName = ({name}) => {
    return(
      <div>{name}</div>
    )
  }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const CheckDuplicate = () => {
    for (let i = 0; i < persons.length; i++){
      if (persons[i].name ===  newName){
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
    const nameObject = { name: newName }
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addName}>
        <div>
          name: <input value = {newName} onChange = {handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <DisplayName key = {person.name} name = {person.name}/>)}
    </div>
  )
}

export default App