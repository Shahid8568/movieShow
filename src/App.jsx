import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Summary from './Components/Summary';
import BookTicket from './Components/BookTicket';
import Showslist from './Components/ShowsList';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element={<Showslist/>} />
      <Route exact path="/shows/:id" element={<Summary/>} />
      <Route exact path="/:id" element={<BookTicket/>} />
      </Routes>
    </Router>
  );
};

export default App;
