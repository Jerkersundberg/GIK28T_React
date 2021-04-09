import "./App.css";
import Header from "./components/Header";
import Images from './components/Images';
import Videos from './components/videos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/images">
              <Images/>
            </Route>
            <Route exact path="/Videos">
              <Videos/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
