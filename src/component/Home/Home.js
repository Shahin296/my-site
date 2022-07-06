import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <header><Navbar/></header>
            <section>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 d-flex align-items-center">
                      <div className="homePageContent">
                      <h1>Hi, I'M <span className='name'>Shahin</span></h1>
                        <h3>Front end developer</h3>
                         <h3>And <span className='professionColor'>Designer</span></h3>
                         <a href='mailto:shahinmiah2231@gmail.com' className='hireMeBtn'>HIRE ME</a>
                      </div>
                    </div>
                    <div class="col-md-6 d-flex align-items-center">
                       <div className="homePageImages">
                          <img src="images/Untitled design (1).png" alt="" />
                       </div>
                    </div>
                </div>
            </div>
            </section>
        </div>
    );
};

export default Home;