import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Detail from "./components/Detail";
import Coba from "./components/Coba";
import NotFound from "./components/NotFound";

import MainRoute from "./routes/MainRoute";
import NavItem from "./components/NavItem";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              alignContent: "center",
              listStyleType: "none",
            }}
          >
            <li>
              <NavItem link="/">Homes</NavItem>
            </li>
            <li>
              <NavItem link="/content">Content</NavItem>
            </li>
            <li>
              <NavItem link="/detail/2">Detail</NavItem>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/" exact component={MainRoute} />
        <Route path="/content" component={Coba} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
