import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Song Lyric Typing Tutor</h1>
         
          <ul className="header">
            <li><NavLink to="/">Song Lyric 1</NavLink></li>
            <li><NavLink to="/stuff">Song Lyric 2</NavLink></li>
            <li><NavLink to="/contact">Song Lyric 3</NavLink></li>
          </ul>



          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}>
              </Route>
            </Routes>

            <Routes>
              <Route path="/Stuff" element={<Stuff />}>
              </Route>
            </Routes>

            <Routes>
              <Route path="/Contact" element={<Contact />}>
              </Route>
            </Routes>

          </div>
        </div>
      </HashRouter>

      
    );
  }
}
export default Main;