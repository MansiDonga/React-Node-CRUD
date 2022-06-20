import React, { useState } from "react";
import QRCode from "react-qr-code";
import { useLocation } from "react-router-dom";

function QRCodeGenerator(props) {
  const { state } = useLocation();
  const [isCard, setIsCard] = useState(false);

  return (
    <div className="container">
      <center>
        <h4 className="mb-5 mt-5">
          Register yourself by scanning below QR Code
        </h4>

        <div>
          <QRCode
            title="Generate QR Code"
            bgColor="#FFFFFF"
            fgColor="#000000"
            style={{ width: 256 }}
            value={JSON.stringify({
              message:
                "Registered Successfully! Now Login with below credentials",
              username: state?.username,
              password: state?.password,
            })}
          />
        </div>

        <div className="mt-5 mb-5 d-flex justify-content-center align-items-center">
          <div className="me-5">
            <button
              className="btn btn-secondary"
              onClick={() => setIsCard(true)}
            >
              Go To Card
            </button>
          </div>
          <div>
            <button className="btn btn-primary">Login</button>
          </div>
        </div>

        {isCard && (
          <div className="go-to-card-wrapper">
            <div className="container">
              <div className="card">
                <h3 className="card-header">You are registered successfully</h3>
                <div className="card-body">
                  <h5 className="card-title mt-2">
                    Login with following credentials
                  </h5>

                  <div className="mt-5">
                    <div className="card-text">
                      <b>Username: </b>
                      <span>{state?.username}</span>
                    </div>
                    <div className="card-text">
                      <b>Password: </b>
                      <span>{state?.password}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </center>
    </div>
  );
}

export default QRCodeGenerator;
