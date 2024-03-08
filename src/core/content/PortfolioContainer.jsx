import React, { useState } from "react";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Typography } from "@mui/material";

const PortfolioContainers = () => {
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);

  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  const handleOpenModal3 = () => setOpenModal3(true);
  const handleCloseModal3 = () => setOpenModal3(false);

  const boxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Adjust the width as needed
    maxWidth: 600, // Max width of the modal box
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // Sample images for the slider
  const images = [
    "img/home-better-lyfe.png",
    "img/better-lyfe-mg.png",
    "img/services-bettler-lyfe.png",
  ];

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Make the slider automatic
    autoplaySpeed: 2000, // Set autoplay speed (milliseconds)
  };

  return (
    <div className="container-wrapper" id='portfolio'>
      <div className="image-container">
        <img src="img/better-lyfe-mg.png" alt="Placeholder" />
        <Button variant="contained" onClick={handleOpenModal1}>View Here</Button>
        <Modal
          open={openModal1}
          onClose={handleCloseModal1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={boxStyle}>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
                </div>
              ))}
            </Slider>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </Box>
        </Modal>
      </div>
      <div className="right-container">
        <p>Lorem Ipsum</p>
      </div>
      <div className="image-container">
        <img src="img/better-lyfe-mg.png" alt="Placeholder" />
        <Button variant="contained" onClick={handleOpenModal2}>View Here</Button>
        <Modal
          open={openModal2}
          onClose={handleCloseModal2}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={boxStyle}>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
                </div>
              ))}
            </Slider>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </Box>
        </Modal>
      </div>
      <div className="right-container">
        <p>Lorem Ipsum</p>
      </div>
      <div className="image-container">
        <img src="img/better-lyfe-mg.png" alt="Placeholder" />
        <Button variant="contained" onClick={handleOpenModal3}>View Here</Button>
        <Modal
          open={openModal3}
          onClose={handleCloseModal3}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={boxStyle}>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Image ${index}`} style={{ maxWidth: '100%' }} />
                </div>
              ))}
            </Slider>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </Box>
        </Modal>
      </div>
      <div className="right-container">
        <p>Lorem Ipsum</p>
      </div>
    </div>
  );
};

export default PortfolioContainers;
