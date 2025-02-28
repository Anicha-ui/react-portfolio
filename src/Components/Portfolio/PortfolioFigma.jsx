import React from "react";
import {getImageUrl} from "../../utils.js";
import styles from "./Portfolio.module.css";

export const PortfolioFigma = () => {
    return(

    <div>
    <section>
      <div className="jumbotron bg-white mt-5">
        <div className="container">
          <div className="row">
          <h2 className="text-uppercase mb-3">Prototyping with Figma: Showcasing Modern Mobile & Web Design Concepts</h2>
            <div className="col-12 mt-3">
                <h5>Creating a Figma Prototype for Airbnb Investment Property Selection</h5>
                In this project, I designed a high-fidelity prototype in Figma for a platform aimed at helping investors find and purchase profitable Airbnb properties. The goal was to create an intuitive, user-friendly interface that simplifies the process of selecting investment properties, analyzing their potential, and making informed purchasing decisions.

                Research & Planning
                The process began with extensive user research to understand the pain points and needs of Airbnb property investors. I explored various property investment platforms and gathered feedback from real estate investors to ensure that the features would align with their requirements.

                Wireframing & User Flow
                I started by sketching out basic wireframes and mapping out the user flow, focusing on a seamless and intuitive journey. The user flow was designed to guide potential investors through a series of logical steps, from browsing available properties to analyzing key metrics such as estimated returns, location advantages, and guest reviews.

                High-Fidelity Design
                Once the wireframes were solidified, I proceeded to create high-fidelity screens using Figma. The design was centered around an easy-to-navigate layout with features that would assist investors in evaluating properties efficiently. Key screens included:

                Property Listings: An organized list of properties with filters to narrow down by price, location, and ROI potential.
                Property Details: Detailed information about each property, including rental income potential, neighborhood statistics, and historical booking data.
                Interactive Maps: An interactive map that visualizes property locations along with proximity to key amenities like beaches, restaurants, and tourist spots.
                Investment Calculators: An interactive calculator that helps investors project their potential returns, maintenance costs, and break-even point.
                I focused on clean, minimalistic aesthetics to ensure the platform’s visual hierarchy would guide the user’s attention to the most important details without overwhelming them.
                 
            </div>
            <div className={`${styles.containerBg} mt-4 mb-4`}>
              <div className="col-12">
                <img className="img-fluid" src={getImageUrl("PortfolioFigmaPics/Realtor01.png")} alt="" />
              </div>
              <div className="col-12 mt-4">
                <img className="img-fluid" src={getImageUrl("PortfolioFigmaPics/Realtor02.png")} alt="" />
              </div>
            </div>

            <div className="col-12 mt-5">
              <h5>Payment Solutions Platform: Prototyping Secure and Seamless Transactions</h5>
                 This prototype showcases a user-friendly payment solutions website designed to facilitate smooth and secure transactions for users. 
                 The platform focuses on providing businesses and individuals with an easy, efficient way to manage payments. Key features include a 
                 streamlined checkout process, multiple payment method integrations (credit/debit cards, digital wallets, etc.), real-time transaction tracking, and robust security measures to protect sensitive data. 
                 The goal was to create an intuitive and responsive interface that ensures users can complete transactions seamlessly across all 
                 devices, with clear visual indicators for each step of the payment process.
            </div>
            <div className={`${styles.containerBg} mt-4 mb-4`}>
              <div className="col-12">
                <img className="img-fluid" src={getImageUrl("PortfolioFigmaPics/Payments.png")} alt="" />
              </div>
            </div>

            <div className="col-12 mt-5">
              <h5>Dashboard for Merchant Sales and Volume: Prototyping Insights and Reporting</h5>
                 This prototype showcases a dynamic dashboard designed for merchants to track and ana lyze their sales and volume performance. 
                 The dashboard includes interactive graphs and bar charts, providing a visual overview of key metrics such as sales trends, 
                 product performance, and volume over time. The goal of this project was to create an intuitive interface that allows 
                 merchants to easily access detailed reports and insights, enabling them to make data-driven decisions. The prototype 
                 demonstrates a clean, user-friendly layout with responsive elements for an optimal experience on both desktop and mobile.
            </div>
            <div className={`${styles.containerBg} mt-4 mb-4`}>
              <div className="col-12">
                <img className="img-fluid" src={getImageUrl("PortfolioFigmaPics/Dashboard.png")} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>

    )
};
