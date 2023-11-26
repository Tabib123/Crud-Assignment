
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './pages/StudentList';
import StudentForm from './pages/StudentForm';

const App = () => {
  return (
    <>
      <Router> 
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<StudentList />} /> 
            <Route path="/register" element={<StudentForm />} /> 
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;