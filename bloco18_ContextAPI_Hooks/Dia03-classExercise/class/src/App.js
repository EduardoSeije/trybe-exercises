import './App.css';
import useTimer from './components/Timer'

function App() {
  const {counter, random, isMultiple } = useTimer();
  return (
    <div className="App">
      <header className="App-header">
       {counter}
       <br />
       {random}
       <br />
       {isMultiple ? 'Acerto' : ''}
      </header>
    </div>
  );
}

export default App;
