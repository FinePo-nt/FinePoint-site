import React from "react";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const PortfolioContainers = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const box_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="container-wrapper" id='portfolio'>
      <div className="image-container">
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <Button variant="contained" onClick={handleOpen}>View Here</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={box_style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Project #1</Typography>
          <div className="modal-box-wrapper">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </div>
        </Box>
      </Modal>
      </div>
      <div className="right-container">
        <p>Lorem Ipsum</p>
      </div>

      <div className="image-container">
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <Button variant="contained" onClick={handleOpen}>View Here</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={box_style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Project #1</Typography>
          <div className="modal-box-wrapper">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </div>
        </Box>
      </Modal>
      </div>
      <div className="right-container">
        <p>Lorem Ipsum</p>
      </div>

      <div className="image-container">
        <img src="https://via.placeholder.com/150" alt="Placeholder" />
        <Button variant="contained" onClick={handleOpen}>View Here</Button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={box_style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Project #1</Typography>
          <div className="modal-box-wrapper">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
          </div>
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
