import React from "react";
import img from "../../assets/images/user-image.png";
import "./Card2.scss";

function Card2(props) {
  const membersList = [
    {
      id: 1,
      name: "Member List 1",
      position: "Professor",
    },
    {
      id: 2,
      name: "Member List 2",
      position: "Professor",
    },
    {
      id: 3,
      name: "Member List 3",
      position: "Student",
    },
    {
      id: 4,
      name: "Member List 4",
      position: "Student",
    },
  ];

  return (
    <div className="card-wrapper">
      {membersList.map((data) => {
        return (
          <div class="container1">
            <div class="overlay">
              <div class="items"></div>
              <div class="items head">
                <p>{data.name}</p>
                <hr />
              </div>
              <div class="items price">
                <p class="new">Position: {data.position}</p>
                <p class="new">$345</p>
              </div>
              <div class="items cart">
                <i class="fa fa-shopping-cart"></i>
                <span>ADD TO CART</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card2;
