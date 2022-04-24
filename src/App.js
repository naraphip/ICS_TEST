import './App.css';
import { Route } from "react-router-dom";
import Home from './Page/Home';
import Navbar from './Navbar/Navbar';
import SingleCard from './Page/SinglePage';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Route exact path="/ICS" component={Home} />
      <Route exact path="/post/:id" component={SingleCard} />
    </div>
  );
}

export default App;
