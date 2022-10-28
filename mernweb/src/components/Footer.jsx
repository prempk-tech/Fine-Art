import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="footer text-white bg-primary">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h4>FINE ART</h4>
                            </div>

                            <div className="col-2">
                                <h5>Section</h5>

                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Faetures
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Pricing
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            FAQs
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-2">
                                <h5>Section</h5>

                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Faetures
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            Pricing
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            FAQs
                                        </a>
                                    </li>

                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">
                                            About
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5">
                                <h3>Subscribe to our newsletter</h3>
                                <h6>Monthly digest of Whats new and exciting from us.</h6>
                                <div className="col-8">
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" className="my-2 py-2" />
                                        <button className="btn btn-light">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="container">
                                <div className="row">
                                    <div className="col-6">
                                        <h6>2022 company,Inc All rights reserved.</h6>
                                    </div>
                                    <div className="col-6">
                                         <i className="fa fa-twitter mx-5 my-2"></i>
                                         <i className="fa fa-whatsapp mx-5 my-2"></i>
                                         <i className="fa fa-facebook mx-5 my-2"></i>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    );
}

export default Footer;