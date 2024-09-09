// import React, { useContext, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
import "../App.css";
import "../css/responsive.css";
import "../css/style.css";
// import toast from 'react-hot-toast';
import { ChatState } from '../Context/ChatProvider';
import Navbar from '../components/common/Navbar';

import Slider from '../../images/slider-img.png'



const Home = () => {
  const {user} = ChatState(); 


  return (
    <div>
      
      <div className=''>
        {/* Navbar */}
        <Navbar userData={user}/>


        <div className="hero_area ">
                <section className=" slider_section ">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6 ">
                                            <div className="detail_box mt-40">
                                                <h1>
                                                    The best E-learning platform
                                                </h1>
                                                <p>
                                                    Unlock Your Potential Anytime, Anywhere with our E-Learning Platform
                                                </p>
                                                <div className="btn-box">
                                                    <a href="/" className="btn-1">
                                                        Contact Us
                                                    </a>
                                                    <a href="/" className="btn-2">
                                                        Query
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="img-box">
                                                <img src={Slider} alt="Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="carousel_btn-container">
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </section>
          </div>

      </div>
    </div>
  )
}

export default Home