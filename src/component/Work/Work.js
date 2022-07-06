import React from 'react';
import projectData from './workData';

const Work = () => {
    return (
        <section id="work">
            <h2>WHAT I'VE DONE</h2>
            <p>(many more coming soon)</p>
            <div className="container">
            <div className="row">
            {
                projectData.map((item , index) => 
                <div className="col-md-6 col-lg-4" key={index}>
                <div className="projectImg">
                  <img src={item.img} alt="" />
                    <div className="projectDetail">
                        <a className='workLink' href={item.githubLink} target="_blank">CODE</a>
                        <a className='workLink' href={item.liveLink} target="_blank">LIVE</a>
                    </div>
                </div>
            </div> )
            }
          
            </div>
            </div>
            
        </section>
    );
};

export default Work;