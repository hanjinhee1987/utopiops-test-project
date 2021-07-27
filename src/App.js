import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, useLocation } from "react-router-dom";
import UserList from './components/UserList';
import EditItem from './components/EditItem';
import PageNotFound from './components/PageNotFound';
import { useContext } from 'react';
import { context } from './context/context';
function App() {
  const ctx = useContext(context);
  // const location = useLocation();
  console.log(window.location.pathname);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={UserList} />
          {ctx.expectedId !== undefined && (
            <Route path="/edit-item" component={EditItem} />
          )}
          {ctx.expectedId === undefined && window.location.pathname === "/edit-item" && (
            <Redirect to="/" />
          )}
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
