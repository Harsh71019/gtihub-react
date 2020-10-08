import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;

// import React, { useState, Fragment, useEffect } from "react";
// import Navbar from "./components/layout/Navbar";
// import "./App.css";
// import User from "./components/users/User";
// import Users from "./components/users/Users";
// import Search from "./components/users/Search";
// import Alert from "./components/layout/Alert";
// import About from "./components/pages/About";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import GithubState from "./context/github/GithubState";
// import AlertState from "./context/alert/AlertState";
// import Home from "./components/pages/Home";

// const App = () => {
//   return (
//     <GithubState>
//       <AlertState>
//         <Router>
//           <div className="App">
//             <Navbar title="Github Finder" icon="fab fa-github" />
//             <div className="container">
//               <Alert />
//               <Switch>
//                 <Route path="/" component={Home} />
//               </Switch>

//               <Route exact path="/about" component={About} />
//               <Route exact path="/user/:login" component={User} />
//             </div>
//           </div>
//         </Router>
//       </AlertState>
//     </GithubState>
//   );
// };

// export default App;
