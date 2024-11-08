import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Important View Of The Car</h4>
            <h5 className="list-unstyled">
              <li>About All</li>
              <li>Terms & conditions</li>
              <li>Corporate polices</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <br />
          <h4>CONNECT WITH US</h4>
            <ui className="list-unstyled">
              <li>900 000 0000 (Toll-Free)</li>
              <li>support@carNodu.com</li>
              <li>Feedback</li>
              <li>Contact Us</li>
              <br />
            </ui>
          </div>

          <div className="col">
            <br />
            <h4>Founders</h4>
            <ui className="list-unstyled">
              <li>Yogith Aras  A</li>
              <li>Yashwal Kanchan</li>
              <li>Vridhi Goyal</li>
              <br />
            </ui>
          </div>


        </div>
        <hr />
        
        <div className="row">
          <br />
          <p className="col-sm">
            &copy;{new Date().getFullYear()} farhangiz.habibi@gmail.com |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;