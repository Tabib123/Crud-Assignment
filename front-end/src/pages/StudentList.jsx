
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/students/${id}`)
      .then(() => {
        setStudents(students.filter(student => student._id !== id));
      })
      .catch(error => console.error('Error deleting student:', error));
  };

  return (
    <div>
      <h2>Student List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        
        <table className="table table-bordered">
          <thead>
          <button><a href='http://localhost:5173/register'>Register</a></button>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Nationality</th>
              <th>Address</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Admission Date</th>
              <th>Courses</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.gender}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.nationality}</td>
                <td>{student.address}</td>
                <td>{student.email}</td>
                <td>{student.phone}</td>
                <td>{student.admissionDate}</td>
                <td>{student.courses}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(student._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;
import '../css/style.css';