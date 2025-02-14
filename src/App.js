import './App.css';
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import Home from './Page/Home';
import Navbar from './Navbar/Navbar';
import SingleCard from './Page/SinglePage';


function App() {
  return (
    <BrowserRouter basename={'/ICS_TEST'}>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={SingleCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
