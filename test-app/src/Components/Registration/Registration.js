import React from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../services/registration.service.js";

function Registration(props) {
  let navigate = useNavigate();

  const routeChange = (value) => {
    if (value === "manual") {
      navigate(`/register/maunal-register`);
    } else {
      register("QR", {}).then((res) => {
        console.log(res.data);
        navigate(`/register/generate-qr-code`, {
          state: { username: res.data.userUUID, password: res.data.password },
        });
      });
    }
  };

  return (
    <div className="registration-wrapper container">
      <center>
        <div className="mt-5">
          <button
            className="btn btn-outline-success"
            onClick={() => routeChange("manual")}
          >
            Register Manually
          </button>
        </div>
        <div className="mt-4">
          <button
            className="btn btn-outline-secondary"
            onClick={() => routeChange("QR")}
          >
            Register Using QR Code
          </button>
        </div>
      </center>
    </div>
  );
}

export default Registration;
