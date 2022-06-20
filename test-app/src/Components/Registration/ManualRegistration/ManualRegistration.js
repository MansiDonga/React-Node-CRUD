import React, { useState } from "react";
import { register } from "../../../services/registration.service";

function ManualRegistration(props) {
  const [userDetails, setUserDetails] = useState({
    enrollmentNo: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    batch: "",
    avatar: "",
    username: "",
    password: "",
    githubid: "",
    linkedin: "",
  });

  const handleInputChange = (e) => {
    setUserDetails((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    register("manual", userDetails);
  };

  return (
    <div className="manual-register-wrapper container">
      <form onSubmit={handleRegistration}>
        <div className="mt-5">
          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="enrollmentNo"
                value={userDetails.enrollmentNo}
                placeholder="Enrollment No."
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="name"
                value={userDetails.name}
                placeholder="Full Name"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="email"
                value={userDetails.email}
                placeholder="Email ID"
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="phone"
                value={userDetails.phone}
                placeholder="Mobile No."
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="department"
                value={userDetails.department}
                placeholder="Department Name"
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="batch"
                value={userDetails.batch}
                placeholder="Batch"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="avatar"
                value={userDetails.avatar}
                placeholder="Avatar"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="username"
                value={userDetails.username}
                placeholder="Username"
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="form-group mb-3 col-md-6">
              <input
                type="password"
                className="form-control"
                name="password"
                value={userDetails.password}
                placeholder="Password"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>

          <div className="row">
            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="githubid"
                value={userDetails.githubid}
                placeholder="Github"
                onChange={(e) => handleInputChange(e)}
              />
            </div>

            <div className="form-group mb-3 col-md-6">
              <input
                type="text"
                className="form-control"
                name="linkedin"
                value={userDetails.linkedin}
                placeholder="Linkedin"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>

        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ManualRegistration;
