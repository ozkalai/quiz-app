import { BrowserRouter , Switch , Route, Router } from 'react-router-dom'
import Level1 from './views/Level1'
import Level2 from './views/Level2'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path="" component={Level1}  />
        <Route  exact path="/Level2" component={Level2}  />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
