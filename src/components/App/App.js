import { hot } from 'react-hot-loader/root'
import './App.scss';
import LeftInputGrid from '../LeftInputGrid/LeftInputGrid';
import CalendarGrid from '../CalendarGrid/CalendarGrid';

function App() {
  return (
    <div className="App">
      <LeftInputGrid />
      <CalendarGrid />
    </div>
  );
}

export default hot(App);
