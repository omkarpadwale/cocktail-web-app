import "./App.css";
import { Switch, Route,BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/Home";
import RandomDrink from "./Pages/RandomDrink";
import HeaderSection from "./Component/Header/HeaderSection";
import FooterSection from "./Component/Footer/FooterSection";

function App() {
  return (
    <div>
        <HeaderSection />
    
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route exact path="/randomdrink">
          <RandomDrink />
        </Route>
      </Switch>
    </Router>
    <FooterSection />
    </div>
  );
  
}

export default App;
