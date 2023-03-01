import './App.css';
import TimersDashboard from './components/TimersDashboard/TimersDashboard';

function App() {
  return (
    <div className='main ui'>
      <h1 className='ui dividing centered header'>
        Timers
      </h1>
      <TimersDashboard />
    </div>
  );
}

export default App;
