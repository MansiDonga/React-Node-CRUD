import React from "react";
import img from "../../assets/images/user-image.png";
import "./Card1.scss";

function Card1(props) {
  return (
    <div class="container">
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={img} alt="img" />
            <h5>ABC</h5>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <div>
              <p>Position: reggdgdfvsd dfsdfsf</p>
              <p>Position: reggdgdfvsd dfsdfsf</p>
              <p>Position: reggdgdfvsd dfsdfsf</p>
              <p>Position: reggdgdfvsd dfsdfsf</p>
              <p>Position: reggdgdfvsd dfsdfsf</p>
            </div>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
