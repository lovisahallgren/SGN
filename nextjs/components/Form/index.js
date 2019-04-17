import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../H2';

const StyledForm = styled.form`

  width:100%;

  .form-container {
    width: 100%;
    max-height: 50rem;
    min-height: 21rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: ${props => props.background || 'white'};
    color: black;
    padding: 16px 16px 20px 16px;
    margin: 16px 0;
  }

  .form-button-div{
      padding-left: 80%;
      padding-top: 5%;
    }
    .form-button{
        text-decoration: underline;
        font-weight:800;
      }

.user-input-wrp {
	position: relative;
	width: 100%;
  color:gray;
  padding-bottom: 10%;
}
.user-input-wrp .inputText{
  font-size: 1.5rem;
	width: 100%;
	outline: none;
	border:none;
	border-bottom: 1px solid #777;
 	box-shadow: none !important;
}
.user-input-wrp .inputText:focus{
	border-color: blue;
	border-width: medium medium 1px;
}
.user-input-wrp .floating-label {
	position: absolute;
	pointer-events: none;
	top: 18px;
	left: 0%;
	transition: 0.2s ease all;
}
.user-input-wrp input:focus ~ .floating-label,
.user-input-wrp input:not(:focus):valid ~ .floating-label{
	top: 0px;
	left: 0%;
	// font-size: 13px;
  font-weight: bold;
	opacity: 1;
}

`



class Form extends React.Component {
  constructor(props) {
  super(props);
  this.state = {addClass: false}
  }

  render(){

    return (

      <StyledForm>

        <div className="form-container">

        <h2>{this.props.title}</h2>


          <div class="user-input-wrp">
            <br/>
            <input type="text" class="inputText" required/>
            <span class="floating-label">{this.props.name}</span>
          </div>

          <div class="user-input-wrp">
            <br/>
            <input type="text" class="inputText" required/>
            <span class="floating-label">{this.props.phone}</span>
          </div>

          <div class="user-input-wrp">
            <br/>
            <input type="text" class="inputText" required/>
            <span class="floating-label">{this.props.email}</span>
          </div>

          <div class="user-input-wrp">
            <br/>
            <input type="textarea" class="inputText" required/>
            <span class="floating-label">{this.props.subject}</span>
          </div>

          <div className="form-button-div">
            <input className="form-button" type="submit" value={this.props.submit} />
          </div>

        </div>
      </StyledForm>
    )
  }
}
export default Form;
