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




const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      {courses.map(course => <Course key = {course.id} course={course}/>)}
    </div>
  )
}

export default App