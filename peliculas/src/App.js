import { Route, Switch } from "react-router";
import ListadoPeliculas from "./ListadoPeliculas";


function App() {
  return (
    <Switch>
      <Route path="/">
        <ListadoPeliculas />
      </Route>
    </Switch>
  );
}

export default App;
