import * as React from 'react';
import { NavLink} from "react-router-dom";
import { AppBar, Toolbar, Typography} from '@mui/material';
import { NavHashLink } from 'react-router-hash-link';
// import { BrowserRouter as Router } from 'react-router-dom';

const Navbar = () => {
  return(
    <React.Fragment>
      <AppBar sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="#fff" noWrap sx={{ flexGrow: 1 }}>
            <NavLink smooth to={`${process.env.PUBLIC_URL}/#home`}>FinePoint Designs</NavLink>
          </Typography>
          <nav>
            <NavLink to={`${process.env.PUBLIC_URL}/#home`}>Home</NavLink>
            <NavHashLink smooth to={`${process.env.PUBLIC_URL}/#portfolio`}>Portfolio</NavHashLink>
            <NavHashLink smooth to={`${process.env.PUBLIC_URL}/FAQ/#FAQ`}>FAQ</NavHashLink>
            <NavHashLink smooth to={`${process.env.PUBLIC_URL}/FAQ/#contact`}>Contact</NavHashLink>
          </nav>
      </Toolbar>
      </AppBar>
    </React.Fragment>
    )
  }

export default Navbar;
