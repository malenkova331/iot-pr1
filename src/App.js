

import { useState } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import MainPage from "./components/MainPage.js";
import LoginPage from "./components/LoginPage.js";
import './components/styles/App.css';
import Header from "./components/Header.js";
import welcomeMainPage from "./components/WelcomeMainPage.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  return (
    
    // <h1>Im working</h1>,
    // <LoginPage />,
    // <MainPage />
    
    <Router>
      <div className="App">
        <main className="main">
        <Header path ="/"  userName={userName} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {/* <welcomeMainPage exact path="/"/> */}
          <Switch>
            
            <Route 
              exact path = "/login" 
              render={(props)=>(
              <LoginPage {...props} setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />
              )}
              />
              
              <Route exact path="/mainpage" component ={MainPage} />
              

          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
