import { hot } from "react-hot-loader/root";
import "./App.scss";
import LeftInput from "../LeftInput/LeftInput";
import Content from "../Content/Content";
import SelectedMonthProvider from "../../providers/selected-month/provider";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactQueryClientProvider from "../../providers/query-client-provider/query-client-provider";

function App() {
  return (
    <div className="App">
      <ReactQueryClientProvider>
        <SelectedMonthProvider>
          <div className="col-left">
            <LeftInput />
          </div>
          <div className="col-main">
            <Content />
          </div>
        </SelectedMonthProvider>
      </ReactQueryClientProvider>
    </div>
  );
}

export default hot(App);
