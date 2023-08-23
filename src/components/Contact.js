import emailjs from 'emailjs-com';
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import "../App.css"
import { FaCheckCircle } from "react-icons/fa";

import React, { useRef } from 'react';
import { Result } from 'postcss';
import { App } from 'react-bootstrap-icons';

export const Contact = () => {
  
 const [btnchange, setbtnchange]=useState(false)  
 const [removeData,setremoveData] = useState("block")

 

 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bomtav5', 'template_evo9bsd', e.target, 'tRKgv2mBC7aJaIgf2')
      .then((result) => {
          console.log(result.text);
          let romoveEl= document.querySelector(".remove")
let romoveE2= document.querySelector(".remove2")
let romoveE3= document.querySelector(".remove3")
let romoveE4= document.querySelector(".remove4")
let romoveE5= document.querySelector(".remove5")

 const handelRemove=()=>{
  romoveEl.value=""
  romoveE2.value=""
  romoveE3.value=""
  romoveE4.value=""
  romoveE5.value=""

 }
          if (result.status== 200){
            setbtnchange(true)
            handelRemove()
            
         
          
          }
       
          
      }, (error) => {
          console.log(error.text);

         
      });
   
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input className="remove"type="text" name='name' placeholder="First Name"  />
                    </Col>
                    <Col size={12} sm={6} className="px-1" >
                      <input className="remove2"  type="text" name='last' placeholder="Last Name" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input className="remove3"  type="email" name='user_email' placeholder="Email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input className="remove4"  type="tel" name='number' placeholder="Phone No."/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea className="remove5" rows="6" name='message' placeholder="Massage"></textarea>
                      <button  className='email-send-ntn' type="submit"> <span id="btn-sent"> {btnchange? <React.Fragment><p  className="p-sent" style={{color:"green"}}><FaCheckCircle/></p><p className='p-sent1'>Sent</p>
                      </React.Fragment>:"Send"  }</span></button>
                      
                      
                    </Col>
                    {
                      <Col>
                        <p></p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
