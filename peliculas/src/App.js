import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListadoPeliculas from "./ListadoPeliculas";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <ListadoPeliculas />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
