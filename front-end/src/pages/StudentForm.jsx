
import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    nationality: '',
    address: '',
    email: '',
    phone: '',
    admissionDate: '',
    courses: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/students', formData)
      .then(response => {
        console.log('Student registered successfully:', response.data);
        // You might want to reset the form after successful submission
        setFormData({
          firstName: '',
          lastName: '',
          gender: '',
          dateOfBirth: '',
          nationality: '',
          address: '',
          email: '',
          phone: '',
          admissionDate: '',
          courses: '',
        });
      })
      .catch(error => {
        console.error('Error registering student:', error);
      });
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gender</label>
          <input
            type="text"
            className="form-control"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="text"
            className="form-control"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nationality</label>
          <input
            type="text"
            className="form-control"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="text"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Admission Date</label>
          <input
            type="text"
            className="form-control"
            name="admissionDate"
            value={formData.admissionDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Courses</label>
          <input
            type="text"
            className="form-control"
            name="courses"
            value={formData.courses}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <br></br>
        <button><a href='http://localhost:5173'>Back to Home</a></button>
      </form>
    </div>
  );
};
import '../css/style.css';
export default StudentForm;