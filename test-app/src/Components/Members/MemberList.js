import React from "react";
import "./MemberList.css";
import img from "../../assets/images/user-image.png";

function MemberList(props) {
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
    <div className="members-wrapper">
      {membersList.map((data) => {
        return (
          <div className="card card-width" key={data.id}>
            <img src={img} className="card-img-top" alt="profilePic" />
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text position-wrapper">{data.position}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MemberList;
