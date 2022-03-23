import React,{useState} from 'react';
import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import img2 from './Components/img2.jpg';
import Created from './Components/Expenses/Created';

const DUMMY_EXPENSES=[
  {
    id:'1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020,7,14),
  },
  {
    id:'2',
    title: 'New TV',
    amount: 78.1,
    date: new Date(2020,8,10),
  },
  {
    id:'3',
    title: 'Car Insurance',
    amount: 220.98,
    date: new Date(2020,9,14),
  },
  {
    id:'4',
    title: 'New Desk',
    amount: 42.87,
    date: new Date(2020,10,21),
  },
];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpenses)=>{
      return [expense , ...prevExpenses];
    });
  };


  return (
    <div className="App" style={{backgroundImage: `url(${img2})`}}>
      <div className="app_inner">
        <h1>Expenses Tracker</h1>
        <NewExpense onAddExpense = {addExpenseHandler}/>
        <Expenses items = {expenses}/>
        <Created/>
      </div>
    </div>
  );
}

export default App;