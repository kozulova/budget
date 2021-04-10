import './App.css';
import AddExpenseForm from './components/AddExpenseForm';
import Expenses from './components/expenses';

function App() {
  return (
    <div className="App">
      <h2>Budget Tracker App</h2>
      <AddExpenseForm/>
      <Expenses/>
    </div>
  );
}

export default App;
