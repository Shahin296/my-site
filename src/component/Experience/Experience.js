import React from 'react';

const Experience = () => {
    return (
        <section id="experience">
             <h2>EXPERIENCE</h2>
             <p className='experinceContent'>I've been doing web development for about 2 years now, and I'm always eager to learn more in this fast paced industry.</p>
             <div className="container">
                 <div className="row">
                     <div className="col-md-8">
                      <h5>SOME TECHNOLOGIES I'VE WORKED WITH:</h5>
                       <div className="logoGallery">
                           <img src="images/html.png" alt="" />
                           <img src="images/css.png" alt="" />
                           <img src="images/Javsacript.png" alt="" />
                           <img src="images/React.png" alt="" />
                           <img src="images/bootsrapt.png" alt="" />
                           <img src="images/figma.png" alt="" />
                           <img src="images/canva.png" alt="" />
                           <img src="images/github.png" alt="" />
                       </div>
                     </div>
                     <div className="col-md-4">
                       <h5>WHERE I'VE WORKED:</h5>
                       <div className="company">
                           <img src="images/fiver.jpeg" alt="" />
                           <h6>Fiver</h6>
                       </div>
                     </div>
                 </div>
             </div>
        </section>
    );
};

export default Experience;