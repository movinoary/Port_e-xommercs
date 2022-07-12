import React from "react";
import { Link } from "react-router-dom";
import { ButtonSosmed } from "..";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer-title" to="/">
        <i className="fas fa-laptop-code" />
        <h1>Website Name</h1>
      </Link>
      <div className="footer-sosmed">
        <ButtonSosmed
          cName="icon facebook"
          judul="e_ComLap"
          icon="fab fa-facebook"
        />
        <ButtonSosmed
          cName="icon instagram"
          judul="je_ComLap"
          icon="fab fa-instagram"
        />
        <ButtonSosmed
          cName="icon whatsapp"
          judul="081234567890"
          icon="fab fa-whatsapp"
        />
        <ButtonSosmed
          cName="icon twitter"
          judul="@e_ComLap"
          icon="fab fa-twitter"
        />
        <ButtonSosmed
          cName="icon mail"
          judul="eComLap@start.com"
          icon="fas fa-envelope"
        />
      </div>
      <div className="footer-copy">
        <p>copyrigth 2022 © VO</p>
      </div>
    </div>
  );
};

export default Footer;
