import React, { Component } from "react";
import "./Contact.css";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: props.online,
    };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" alt="user name" src={this.props.avatar} />

        <div>
          <h4 className="name">{this.props.name}</h4>
          <div
            className="status"
            onClick={(event) => {
              this.state.online
                ? this.setState({ online: false })
                : this.setState({ online: true });
            }}
          >
            <div
              className={this.state.online ? "status-online" : "status-offline"}
            />
            <span className="status-text">
              {this.state.online ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
};

export default Contact;
