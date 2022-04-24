import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Page/Home';
import Navbar from './Navbar/Navbar';
import SingleCard from './Page/SinglePage';


function App() {
  return (
    <div className="App">

      <BrowserRouter basename='/ICS'>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={SingleCard} />
      </BrowserRouter>

    </div>
  );
}

export default App;
