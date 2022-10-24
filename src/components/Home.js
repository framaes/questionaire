import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Appbar from './Appbar';
import Questionaire from './Questionaire';
const Home = (props) => {

  return (
    <Router>
      <Appbar />
      <Routes>
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Questionaire" element={<Questionaire />} />
      </Routes>
    </Router>
  );
};

export default Home;