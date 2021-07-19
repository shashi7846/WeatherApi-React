import './App.css';
import axios from 'axios';
import Home from "./Home";
import {BrowserRouter as Router,
Switch,
Route,} from "react-router-dom";

function App() {
  return <>
      <Router>
<div className="container">
  <switch>
    <Route path="/" component={Home} exact/>
  </switch>
</div>
     </Router>
  </>
}

export default App;
