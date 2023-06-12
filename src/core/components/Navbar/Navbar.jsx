import * as React from 'react';
import { NavLink} from "react-router-dom";
import { AppBar, Toolbar, Typography} from '@mui/material';
import { NavHashLink } from 'react-router-hash-link';

const Navbar = () => {
  return(
    <React.Fragment>
      <AppBar sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
      <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="#fff" noWrap sx={{ flexGrow: 1 }}>
            FinePoint Designs
          </Typography>
          <nav>
            <NavLink to='/'>Home</NavLink>
            <NavHashLink smooth to="/#portfolio">Portfolio</NavHashLink>
            <NavLink to='/FAQ'>FAQ</NavLink>
            <NavHashLink smooth to='/FAQ/#contact'>Contact</NavHashLink>
          </nav>
      </Toolbar>
      </AppBar>
    </React.Fragment>
    )
  }

export default Navbar;