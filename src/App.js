import React, { Component } from 'react';
import MovieLists from './Components/MovieLists';
import Navbar from './Components/Navbar';
import Movie from './Components/Movie';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<MovieLists/>}></Route>
            <Route path='movie' element={<Movie/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
