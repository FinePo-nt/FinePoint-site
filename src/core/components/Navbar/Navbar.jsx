import * as React from 'react';
import { NavLink} from "react-router-dom";
import { AppBar, Toolbar, Typography} from '@mui/material'
import '../../content/styles/Nav.css'

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
            <NavLink to='/Portfolio'>Portfolio</NavLink>
            <NavLink to='/FAQ'>FAQ</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
          </nav>
      </Toolbar>
      </AppBar>
    </React.Fragment>
    )
  }

export default Navbar;