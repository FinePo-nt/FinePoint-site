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
            <NavLink smooth to='https://finepo-nt.github.io/FinePoint-site/#home'>FinePoint Designs</NavLink>
          </Typography>
          <nav>
            <NavLink to='https://finepo-nt.github.io/FinePoint-site/#home'>Home</NavLink>
            <NavHashLink smooth to="https://finepo-nt.github.io/FinePoint-site/#portfolio">Portfolio</NavHashLink>
            <NavHashLink smooth to='https://finepo-nt.github.io/FinePoint-site/FAQ/#FAQ'>FAQ</NavHashLink>
            <NavHashLink smooth to='https://finepo-nt.github.io/FinePoint-site/FAQ/#contact'>Contact</NavHashLink>
          </nav>
      </Toolbar>
      </AppBar>
    </React.Fragment>
    )
  }

export default Navbar;