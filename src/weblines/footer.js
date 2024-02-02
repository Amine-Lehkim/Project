import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h3>Contact Us</h3>
            <p>Email: lehkimpro@gmail.com</p>
            <p>Phone: +212 691-014682</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h3>Follow Us</h3>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className='btn btn-secondary rounded-pill btn-sm m-1'>Facebook</a>
              </li>
              <li>
                <a href="#!" className='btn btn-secondary rounded-pill btn-sm m-1'>Twitter</a>
              </li>
              <li>
                <a href="#!" className='btn btn-secondary rounded-pill btn-sm m-1'>Instagram</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates on the latest games and news.</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
                <div className="input-group-append">
                  <button className="btn btn-outline-light" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-secondary py-3">
        <div className="container text-center">
          <p className="mb-0">© 2024 GameApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
