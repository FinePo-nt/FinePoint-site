import * as React from 'react';
import { Typography, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return(
        <React.Fragment>
         <div className='footer-main-div'>
            <Typography variant="h6" color="#fff" noWrap sx={{ flexGrow: 1 }} padding='20px'>
                FinePoint Designs
            </Typography>
            <div className='footer-content-container'>
                <div className='footer-container-child'>
                     <p className='footer-p-slogan'>INSERT COMPANY'S SLOGAN/MOTTO</p>
                </div>
                <div className='footer-container-child'>
                    <Button variant="contained">Contact Us Here</Button>
                    <Button variant="contained">FAQ</Button>
                </div>
                <div className='footer-container-child'>
                    <div>
                        <p>FOLLOW US</p>
                        <div className='footer-social-wrapper'>
                            <div>
                                <a href='#'><InstagramIcon color='#2b2d42'/></a>
                            </div>
                            <div>
                                <a href='#'><TwitterIcon color='#2b2d42'/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className='footer-content-container'>
                <div className='footer-container-child'>
                    <p>&copy; 2023 FinePoint. All Rights Reserved</p>
                </div>
                <div className='footer-container-child'>
                    <p>PRIVACY POLICY</p>
                </div>
                <div className='footer-container-child'>
                    <p>TERMS & CONDITIONS</p>
                </div>
            </div>
         </div>
        </React.Fragment>
    )
}

export default Footer;