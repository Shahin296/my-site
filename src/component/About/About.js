import React from 'react';

const About = () => {
    return (
        <section id="about">
             <div className="aboutMe">
                 <h2>A LITTLE BIT ABOUT ME</h2>
                 <div className="imgAbout">
                     <img src="/images/Untitled design (1).png" alt="" />
                 </div>
                 <div className="contentAbout">
                    <p>Hey! My name is Shahin and I'm a web developer with a passion for front end development and design.
                      I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.
                    </p>
                     <p className='freeTimeContent'>
                      When I'm not on the computer, I enjoy swimming, and playing football.
                     </p>
                 </div> 
             </div>
        </section>
    );
};

export default About;


