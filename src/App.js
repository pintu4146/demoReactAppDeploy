
import './App.css';
import ExpenseItem from './components/ExpenseItem';
function App() {
  const expenses = [
    { title: 'Car Insurane', amount: 133, date: new Date(2021,2,3) },
    { title: 'Car Insurance', amount: 133, date: new Date(2021, 10, 4) },
    { title: 'Car Insurance', amount: 133, date: new Date(2021, 10, 4) },
    { title: 'Car Insurance', amount: 133, date: new Date(2021, 10, 4) },
  ]

  return (
    <div className="App">
   <h1>hi lets begin</h1>
   <ExpenseItem 
   title={expenses[0].title}
   am={expenses[0].amount}
   date={expenses[0].date}
   
   />
      {/* <ExpenseItem />
      <ExpenseItem/>
      <ExpenseItem/> */}
    </div>
  );
}

export default App;
