import React from "react";
import "./Footer.css";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              BusTicketReservation.com is your go-to platform for hassle-free
              bus ticket bookings.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@busticketreservation.com</p>
            <p>Phone: +91-9044055174</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p className="d-flex gap-2">
              <a href="https://web.whatsapp.com/" style={{ color: "white" }}>
                <FaWhatsapp className="fs-4" />
              </a>
              <a href="https://x.com/" style={{ color: "white" }}>
                <AiFillTwitterCircle className="fs-4" />
              </a>

              <a href="https://www.facebook.com/" style={{ color: "white" }}>
                <FaFacebook className="fs-5" />
              </a>
              <a href="https://www.instagram.com/" style={{ color: "white" }}>
                <FaInstagram className="fs-5" />
              </a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>&copy; 2024 BusTicketReservation.com. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
