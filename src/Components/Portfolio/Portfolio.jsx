import React from "react";
import {getImageUrl} from "../../utils.js";
import {PortfolioSlide} from "./PortfolioSlide.jsx";

export const Portfolio = () => {
    return(

        <div>
    <section>
      <div className="jumbotron text-center bg-white">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-uppercase">Creating solutions that drive business growth through user-focused insights</h2>
              <p>
				  Proven expertise in the design, architecture, development, deployment, and
maintenance of digital products for enterprises and corporations, I approach design and development by combining analytical thinking with a strong sense of empathy. I focus on solving business challenges by exploring the intersection of technology, innovation, and user needs.</p>
              <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
        <PortfolioSlide />
	</section>

    <section>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mt-5">
            <h3 className="text-uppercase">Revamping an outdated website</h3>
            <p>Transformed the client-facing website with a complete redesign, giving it a modern, cutting-edge look and enhanced quality.
			  The key goal was to provide our clients with a fresh experience, offering customizable branding options and the flexibility of both light and dark modes</p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="jumbotron text-center mt-5">
        <div className="row">
          <div className="col-12 text-center">
            <h4>Initial Website</h4>
            <p>Was built in HTML and CSS</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-12 text-center">
            <img className="img-fluid" src={getImageUrl("PortfolioCA/TM_01.gif")} alt="" />
          </div>
          <div className="col-md-6 col-12 text-center mt-md-0 mt-2">
            <img className="img-fluid" src={getImageUrl("PortfolioCA/TM_02.gif")} alt="" />
          </div>
        </div>
		  
		<div className="row">
          <div className="col-12 text-center mt-5">
            <h4>Created a prototype using Figma to visualize and refine the design</h4>
          </div>
        </div>
		<div className="row">
          <div className="col-md-6 col-12 text-center">
            <img className="img-fluid" src={getImageUrl("PortfolioCA/Figma_01.gif")} alt="" />
          </div>
          <div className="col-md-6 col-12 text-center mt-md-0 mt-2">
            <img className="img-fluid" src={getImageUrl("PortfolioCA/Figma_02.gif")} alt="" />
          </div>
        </div>
		  
		<div className="row">
          <div className="col-12 text-center mt-5">
            <h4>Delivered the final version of the website, fully developed and optimized for a seamless user experience</h4>
          </div>
        </div>
		<div className="row">
          <div className="col-md-6 col-12 text-center">
            <img className="img-fluid" src={getImageUrl("PortfolioCA/dashboard_01.gif")} alt="" />
          </div>
          <div className="col-md-6 col-12 text-center mt-md-0 mt-2">
            <img className="img-fluid" src={getImageUrl("PortfolioCA/dashboard_02.gif")} alt="" />
          </div>
        </div>
	  </div>
    </section>
    </div>
    );

}