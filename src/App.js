
import './App.css';
import {Switch,Link,Route} from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import Home from "./home"
import AboutMe from "./about"
import Recent from "./recent"

function App() {
  return (
    <div >
      <Header />

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/"><AboutMe /></Route>
        <Route exact path="/"><Recent /></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
