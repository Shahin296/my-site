import React from 'react';

const Passion = () => {
    return (
        <section id="passion">
             <h2>WHAT I DO</h2>
         <div className="container">
             <div className="row ">
                 <div className="col-md-6">
                 <div className="developmentIcon d-flex align-items-center justify-content-center">
                   <i class="fa-solid fa-code fa-customize fa-spin"></i>
                 </div>
                   <h5>DEVELOPMENT</h5>
                   <p className='IconContentPart'>I'm passionate about web design and development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.</p>
                 </div>
                 <div className="col-md-6">
                 <div className="developmentIcon d-flex align-items-center justify-content-center">
                   <i class="fa-solid fa-laptop-code fa-customize fa-spin"></i>
                 </div>
                   <h5>DESIGN</h5>
                   <p className='IconContentPart'>Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.</p>
                 </div>
             </div>
             </div>
        </section>
    );
};

export default Passion;