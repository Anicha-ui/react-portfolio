import React, { useState } from "react";
import {getImageUrl} from "../../utils.js";
import styles from "./PortfolioSlide.module.css";


export const PortfolioSlide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  // Portfolio data
  const portfolioData = [
    {
      image: getImageUrl("PortfolioCA/slide-1.gif"),
      thumbnail: getImageUrl("PortfolioCA/slide-1-thumbnail.gif"),
      description:
        "Managed the corporate website on WordPress, performing plugin updates to optimize site performance.",
    },
    {
      image: getImageUrl("PortfolioCA/slide-2.gif"),
      thumbnail: getImageUrl("PortfolioCA/slide-2-thumbnail.gif"),
      description:
        "Created a dashboard to enhance functionality and user experience by restructuring the HTML and refining the CSS.",
    },
    {
      image: getImageUrl("PortfolioCA/slide-3.gif"),
      thumbnail: getImageUrl("PortfolioCA/slide-3-thumbnail.gif"),
      description: " ",
    },
    {
      image: getImageUrl("PortfolioCA/slide-4.gif"),
      thumbnail: getImageUrl("PortfolioCA/slide-4-thumbnail.gif"),
      description:
        "Focused on designing and building a clean, robust receipt system for our payment platforms.",
    },
  ];

  // Open modal
  const openPopup = (index) => {
    setCurrentItem(portfolioData[index]);
    setIsModalOpen(true);
  };

  // Close modal
  const closePopup = () => {
    setIsModalOpen(false);
    setCurrentItem(null);
  };

  // Close modal when clicking outside the content
  const handleOutsideClick = (e) => {
    if (e.target.id === "popupModal") {
      closePopup();
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <h3>
        <span className={styles.textUppercase}>Explore My Work</span>
        <span>
          <h6>(Click on a thumbnail to view more)</h6>
        </span>
      </h3>

      {/* Slider */}
      <div className={styles.slider}>
        {portfolioData.map((item, index) => (
          <div
            className={styles.slide}
            key={index}
            onClick={() => openPopup(index)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={item.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              className={styles.thumbnail}
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {isModalOpen && (
        <div
          id="popupModal"
          className={styles.popupModal}
          style={{ display: "flex" }}
          onClick={handleOutsideClick}
        >
          <div className={styles.popupContent}>
            <span className={styles.closeBtn} onClick={closePopup}>
              &times;
            </span>
            {currentItem && (
              <>
                <img
                  src={currentItem.image}
                  alt="Portfolio Item"
                  className={styles.popupImage}
                />
                <div className={styles.popupDescription}>
                  {currentItem.description || "No description available."}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


