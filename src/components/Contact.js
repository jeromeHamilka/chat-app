import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <div className="Contact">
      <img className="avatar" alt="user name" src={props.avatar} />

      <div>
        <h4 className="name">{props.name}</h4>
        <div className="status">
          <div className={props.online ? "status-online" : "status-offline"} />
          <span className="status-text">
            {props.online ? "Online" : "Offline"}
          </span>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired
};

export default Contact;
