import React,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
    
    const [enteredTitle,setenteredTitle] = useState('');
    const [enteredamount,setenteredamount] = useState('');
    const [entereddate,setentereddate]= useState('');

    // const[userInput,setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredamount:'',
    //     entereddate:''
    // });

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })      
        // setUserInput((prevState)=>{
        //     return {...prevState,enteredTitle: event.target.value};
        // })  
    };

    const amountchangeHandler = (event)=>{
        setenteredamount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredamount: event.target.value,
        // })      
    };
    const datechangeHandler = (event)=>{
        setentereddate(event.target.value); 
        // setUserInput({
        //     ...userInput,
        //     entereddate : event.target.value,
        // })  
   };
   const submitHandler = (event) => {
        event.preventDefault();
        const expensedata = {
            title: enteredTitle,
            amount: enteredamount,
            date: new Date(entereddate) 
        };
        props.onSaveExpenseData(expensedata);
        setenteredTitle('');
        setenteredamount('');
        setentereddate('');
   };
    return(
        <form onSubmit={submitHandler  }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label > Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label >Amount</label>
                    <input type="number" min='0.01' step="0.01" value={enteredamount} onChange={amountchangeHandler}/>
                </div>
                <div className="new-expense__control">
                <label >Date</label>
                <input type="date" min='2019-01-01' max="2022-12-31" value={entereddate} onChange={datechangeHandler}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expenses</button>
            </div>
            </div>
        </form>
    );
}

export default ExpenseForm;