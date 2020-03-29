import React from "react";
import "./Contact.css";

const name = "Brad Gibson";
const avatar = "https://randomuser.me/api/portraits/thumb/men/75.jpg";
const online = true;

function Contact() {
  return (
    <div className="Contact">
      <img className="avatar" alt="user name" src={avatar}></img>

      <div>
        <h4 className="name">{name}</h4>
        <div className="status">
          <div className={online ? "status-online" : "status-offline"}></div>
          <span className="status-text">{online ? "Online" : "Offline"}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
