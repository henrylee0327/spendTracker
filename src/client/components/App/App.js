import { hot } from 'react-hot-loader/root'
import './App.scss';
import LeftInput from '../LeftInput/LeftInput';
import Content from '../Content/Content';
import SelectedMonthProvider from '../../providers/selected-month/provider'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <SelectedMonthProvider>
      <div className="col-left">
        <LeftInput />
      </div>
      <div className="col-main">
        <Content />
      </div>
    </SelectedMonthProvider>
    </div>
  );
}

export default hot(App);
