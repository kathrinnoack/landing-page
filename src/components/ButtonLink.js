import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 100px;
  height: 25px;
  background-color: white;
  border-radius: 25px;
  color: #00259e;
  font-weight: bold;
  font-size: 12px;
`;

function ButtonLink({ children, to, ...other }) {
  return (
    <Link to={to}>
      <StyledButton {...other}>{children}</StyledButton>
    </Link>
  );
}

ButtonLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default ButtonLink;
