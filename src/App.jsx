import List from './components/List.jsx';
function App() {
  const listOfFruits = [
    {name: "Aaam", vitamin: 20},
    {name: "Kela", vitamin: 140},
    {name: "Amrood", vitamin: 32},
    {name: "Nair", vitamin: 73},
  ]


  const listOfVegitables = [
    {name: "Bhindi", vitamin: 10},
    {name: "Toori", vitamin: 60},
    {name: "Kaddu", vitamin: 192},
    {name: "Looki", vitamin: 83},
  ]


  return (
    <>
      <List listOfItems= {listOfFruits} category= "Fruits"/>
      <List listOfItems= {listOfVegitables} category= "Vegitables"/>
    </> 
  );
}

export default App

