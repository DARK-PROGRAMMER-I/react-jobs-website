import Student from './components/Student.jsx';
function App() {

  return (
    <>
      <Student name= "Ammar" age= {26} isStudent={true}/>
      <Student name= "Hammad" age= {24} isStudent={true}/>
      <Student name= "Ahmad" age= {19} isStudent={true}/>
      <Student/>
    </> 
  );
}

export default App

