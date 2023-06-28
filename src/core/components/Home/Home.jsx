import * as React from 'react';
import '../../../App.css'
import Hero from '../../content/Hero';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
 return(
    <React.Fragment>
         <Hero /> 
         <Portfolio/>
    </React.Fragment>
 );
}

export default Home;