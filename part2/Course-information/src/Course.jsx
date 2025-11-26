const Parts = ({part}) =>{
  return(
    <p>{part.name} {part.exercises}</p>
  )
}


const Total = ({array}) =>{
  const sum = array.reduce((accumulator, part) => accumulator + part.exercises, 0);
  return (
    <p><strong>total of {sum} exercises</strong></p>
  )
}

const Content = ({parts}) => {
  return(
  <div>
    {parts.map(part => <Parts key = {part.id} part = {part}/>)}
    <Total array={parts}/>
  </div>
  )
}




const Course = ({course}) =>{ 
  return(
    <div>
    <h1>{course.name}</h1>
    <Content parts = {course.parts}/>
    </div>
  )
}

export default Course