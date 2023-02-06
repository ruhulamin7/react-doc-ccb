import ReactForm from './components/ReactForm';
import TimeCalculator from './components/TimeCalculator';
import Toggle from './components/Toggle';

function App() {
  return (
    <div className="App">
      <Toggle name="toggle" />
      <ReactForm />
      <TimeCalculator name="Hello" />
    </div>
  );
}

export default App;
