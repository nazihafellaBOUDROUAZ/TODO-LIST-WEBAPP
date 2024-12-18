import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Side from './Side.jsx'

function Settings() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        about: "",
        dob: "",
        country: "",
        language: "",
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch("http://localhost:5000/api/users/save-settings", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
    
          const result = await response.json();
          console.log(result.message);
          alert("Settings saved successfully!");
        } catch (error) {
          console.error("Error saving settings:", error);
        }
      };
    
      return (
        <Side>
        <div className="container ">
          <div className="">
            <div className="card-header font-bold  "style={{ color: '#9C74FA',fontSize:'28px'  }}>
              <h4 className="mb-4 ">Profile Settings</h4>
            </div>
            <div className="card-body flex  space-x-32">
              <form onSubmit={handleSubmit}>
                {/* Avatar Section */}
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="rounded-circle bg-secondary"
                    style={{ width: "60px", height: "60px" }}
                  ></div>
                  <button type="button" className="btn btn-outline-secondary ms-4">
                    Change
                  </button>
                </div>
    
                {/* Name */}
                <div className="mb-4">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
    
                {/* Email */}
                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
    
                {/* Password */}
                <div className="mb-4 d-flex align-items-center">
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <button type="button" className="btn btn-outline-secondary ms-32">
                    Change
                  </button>
                </div>
    
                {/* About */}
                <div className="mb-4">
                  <label className="form-label">About</label>
                  <textarea
                    className="form-control"
                    name="about"
                    placeholder="Write something about yourself"
                    value={formData.about}
                    onChange={handleChange}
                  ></textarea>
                </div>
    
              </form>
              <form>
                <div className='left '>

                  {/* Date of Birth */}
                <div className="mb-4 mt-20">
                  <label className="form-label">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control w-[400px]"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                  />
                </div>
    
                {/* Country */}
                <div className="mb-4">
                  <label className="form-label">Country/Region</label>
                  <select
                    className="form-select"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  >
                    <option value="">Select your country</option>
                    <option value="US">United States</option>
                    <option value="DZ">Algeria</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </div>
    
                {/* Language */}
                <div className="mb-4">
                  <label className="form-label">Language</label>
                  <select
                    className="form-select"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                  >
                    <option value="">Select a language</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="ar">Arabic</option>
                  </select>
                </div>
    
                {/* Save Button */}
                <div className="d-grid mt-36">
                  <button type="submit" className="btn bg-[#9C74FA] text-white rounded-lg shadow-md ">
                    Save
                  </button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </Side>
      );
}

export default Settings