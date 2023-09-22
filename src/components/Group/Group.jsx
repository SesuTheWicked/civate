
import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Group = ({ className, group = "group-1.svg" }) => {
  return <img className={`group ${className}`} alt="Group" src={group} />;
};

Group.propTypes = {
  group: PropTypes.string,
};
