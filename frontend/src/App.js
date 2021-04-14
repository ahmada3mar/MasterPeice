import './App.css';
import Login from "./pages/login/login";
import "boosted";
import "boosted/dist/css/boosted.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom";
import NavBar from "./component/navbar";
import { useState } from 'react';
import Home from "./pages/home/index";
import Footer from "./component/footer";

function App() {
  const [isLogin , setIslogin] = useState(false);
  return (
<Router>
  {isLogin ?  <NavBar/> : null}
  <Route exact path="/">

    <div style={{height:'100vh'}} className="d-flex flex-column flex-grow-1">
    <Login isLogin={isLogin} setIslogin={setIslogin}/>
    </div>
  </Route>
  <Route exact path="/home">
<Home isLogin={isLogin}/>
  </Route>
  {isLogin ?  <Footer/> : null}
</Router>
  );
}

export default App;
