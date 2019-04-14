import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../H2';

const StyledForm = styled.form`
  width: 100%;

  .form-container {
    width: 100%;
    // max-height: 50rem;
    // min-height: 21rem;
    // overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: ${props => props.background || 'white'};
    color: black;
    padding: 16px 16px 20px 16px;
    margin: 16px 0;
  }

  .form-input {
    -webkit-appearance: none;
    appearance: none;
    border-bottom: 1px solid black;
  }

  input {
    width: 100%;
    margin-top: 20%;
    font-size: 1rem;
    padding-bottom: 3%;
    padding-top: 3%;
  }

  .form-button-div {
    padding-left: 80%;
    padding-top: 5%;
  }

  .form-button {
    text-decoration: underline;
    font-weight: 800;
  }
`;

const Form = props => {
  return (
    <StyledForm id="form">
      <div className="form-container">
        <H2 color="black">{props.title}</H2>
        <div className="form-input">
          <input placeholder={props.name} type="text" />
        </div>
        <div className="form-input">
          <input placeholder={props.phone} type="text" />
        </div>
        <div className="form-input">
          <input placeholder={props.email} type="text" />
        </div>
        <div className="form-input">
          <input placeholder={props.subject} type="text" />
        </div>
        <div className="form-button-div">
          <input className="form-button" type="submit" value={props.submit} />
        </div>
      </div>
    </StyledForm>
  );
};

export default Form;
