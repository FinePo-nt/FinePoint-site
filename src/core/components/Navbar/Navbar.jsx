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
            <NavLink smooth to='/#home'>FinePoint Designs</NavLink>
          </Typography>
          <nav>
            <NavLink to='/#home'>Home</NavLink>
            <NavHashLink smooth to="/#portfolio">Portfolio</NavHashLink>
            <NavHashLink smooth to='/FAQ/#FAQ'>FAQ</NavHashLink>
            <NavHashLink smooth to='/FAQ/#contact'>Contact</NavHashLink>
          </nav>
      </Toolbar>
      </AppBar>
    </React.Fragment>
    )
  }

export default Navbar;