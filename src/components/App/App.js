import { hot } from 'react-hot-loader/root'
import './App.scss';
import LeftInput from '../LeftInput/LeftInput';
import Content from '../Content/Content';

function App() {
  return (
    <div className="App">
    <div className="col-left">
      <LeftInput />
    </div>
    <div className="col-main">
      <Content />
    </div>
    </div>
  );
}

export default hot(App);
