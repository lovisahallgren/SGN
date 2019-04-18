import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import H2 from '../H2';
import ArrowRight from '../SVGs/ArrowRight';
import P from '../P';

const StyledForm = styled.form`
  width: 100%;
  
  position: relative;
  
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

  .form-button-div {
    padding-left: 70%;
    padding-top: 5%;
  }
  .form-button {
    text-decoration: underline;
    font-weight: 800;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
  }
  .form-header {
    padding-bottom: 10%;
    padding-top: 10%;
  }

  .user-input-wrp {
    position: relative;
    width: 100%;
    color: #333;
    padding-bottom: 10%;
  }
  .user-input-wrp .inputText {
    font-size: 1rem;
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    box-shadow: none !important;
    padding-bottom: 3%;
    color:#333;
  }
  .user-input-wrp .inputText:focus {
    border-color: ${props => props.formColor || 'white'};
    border-width: medium medium 1px;
    color: #333;
  }
  .user-input-wrp .floating-label {
    position: absolute;
    pointer-events: none;
    top: 25%;
    left: 0%;
    transition: 0.15s ease all;
    color: #333;
  }
  .user-input-wrp input:focus ~ .floating-label,
  .user-input-wrp input:not(:focus):valid ~ .floating-label {
    top: -4%;
    left: 0%;
    color: ${props => props.formColor || 'white'};
    font-size: 14px;
    font-weight: bold;
    opacity: 1;
  }

  //Form completion message animations and divs bellow

  .sent-email-div{
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-content: center;

    position: absolute;
    max-height: 50rem;
    min-height: 33rem;
    overflow: hidden;
    // display: none;
    background: ${props => props.background || 'gray'};
    color: black;

    padding: 16px 16px 20px 16px;
    margin: 16px 0;
    
  }

  // .sent-email-div-active{
  //   z-index: 1;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   text-align: center;
  //   align-content: center;
  // }

  .sent-email-div-content-image{
    width: 35%;
        
  }

`;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEmailSent: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event){

    this.setState({
      isEmailSent: true
    })
    // alert(this.name.value);
    // alert(this.phone.value);
    // alert(this.email.value);
    // alert(this.subject.value);
    

    event.preventDefault();
  }



  render() {
    return (

      <StyledForm {...this.props} id="form">
      
         {this.state.isEmailSent && <div className="sent-email-div">
            <div className="sent-email-div-content" >
              <img className="sent-email-div-content-image" src="static/images/sgn_figure_wave_pants.gif"></img>
              <H2 color="#000">Tack för ditt mail!</H2>
              <P color="#000">Vi återkommer med ett <br></br> svar så fort vi kan.</P>
            </div>
          </div>}
          
        <div className="form-container">
          <H2 color="#000" className="form-header">
            {this.props.title}
          </H2>

          <form onSubmit={this.handleSubmit} >

            <div className="user-input-wrp">
              <br />
              <input type="text" ref={nameInput => this.name = nameInput} className="inputText" required />
              <span className="floating-label">{this.props.name}</span>
            </div>

            <div className="user-input-wrp">
              <br />
              <input type="text" ref={phoneInput => this.phone = phoneInput} className="inputText" required />
              <span className="floating-label">{this.props.phone}</span>
            </div>

            <div className="user-input-wrp">
              <br />
              <input type="text" ref={emailInput => this.email = emailInput}  className="inputText" required />
              <span className="floating-label">{this.props.email}</span>
            </div>

            <div className="user-input-wrp">
              <br />
              <input type="textarea" ref={subjectInput => this.subject = subjectInput} className="inputText" required />
              <span className="floating-label">{this.props.subject}</span>
            </div>

            <div className="form-button-div">
              <button className="form-button" type="submit">
                <p>{this.props.submit}</p>
                <ArrowRight width="20%" />
              </button>
            </div>
          </form>
        </div>

       

      </StyledForm>

    );
  }
}
export default Form;
