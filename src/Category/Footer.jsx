import React from "react";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>About</h4>
            <ul className="list-unstyled">
              <li>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </li>
            </ul>
          </div>
          <div className="col">
            <h4>Employers</h4>
            <ul className="list-unstyled">
              <li>How it works</li>
              <li> Register</li>
              <li>Post a job </li>
              <li>Advance skill search</li>
              <li>Blog</li>
              <li>faq</li>
            </ul>
          </div>
          <div className="col">
            <h4>Workers</h4>
            <ul className="list-unstyled">
              <li>How it works</li>
              <li> Register</li>
              <li>Post your skills </li>
              <li>Job search</li>
              <li>Employer Search</li>
            </ul>
          </div>
          <div className="col">
            <h4>Have a Question?</h4>
            <ul className="list-unstyled">
              <li>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li> +2 392 3929 210</li>
              <li> info@yourdomain.com</li>
            </ul>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Xyz Company Inc.| All rights
              reserved|Terms of Service| privacy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
