import React, { useContext, useRef, useState } from "react";
import Address from "../../img/address.png";
import Email from "../../img/email.png";
import Phone from "../../img/phone-call.png";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const hanleSubmit = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzhdgcs",
        "template_687nazf",
        formRef.current,
        "user_ckceRGAmqfN8bJqYW7qSk"
      )
      .then(
        result => {
          console.log(result.text);
          setDone(true);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Thông tin liên lạc ở đây</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              <p className="c-text">+84 9668 537 90</p>
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              <p className="c-text">nguyenquocanh0512@gmail.com</p>
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              <p className="c-text">
                43 Phan Huy Thực, phường Tân Kiểng, quận 7, TPHCM
              </p>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Hi.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim, laboriosam ipsa cum at animi provident optio maiores voluptate
            adipisci laborum exercitationem architecto. Cumque voluptate iste
            accusantium deserunt sed debitis repellendus?
          </p>
          <form ref={formRef} onSubmit={hanleSubmit}>
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Họ tên"
              name="user_name"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              type="email"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{
                backgroundColor: darkMode && "#333",
                color: darkMode && "white",
              }}
              rows={5}
              placeholder="Viết gì đi fen :)))"
              name="message"
            />
            <button>
              <p className="c-btn-txt">{"Bấm gửi đê :)))"}</p>
            </button>
            <br />
            <br />
            {done && "Xin cảm ơn... rất nhiều"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
