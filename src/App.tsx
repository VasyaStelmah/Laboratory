import { Route, Switch, Redirect } from 'react-router-dom';
import main from './pages/Main';
import search from './pages/Search';
import placeholder from './pages/Placeholder';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={main} />
      <Route exact path="/search" component={search} />
      <Route exact path="/placeholderpage" component={placeholder} />
      <Redirect from="/" to="/" />
    </Switch>
  );
}

export default App;
