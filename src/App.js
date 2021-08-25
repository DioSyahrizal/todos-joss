import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Detail from "./components/Detail";
import Coba from "./components/Coba";

import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Homes</a>
            </li>
            <li>
              <Link to="/content">Content</Link>
            </li>
            <li>
              <Link to="/detail/2">Detail</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact component={MainRoute} />
        <Route path="/content" component={Coba} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </Router>
  );
}

export default App;
