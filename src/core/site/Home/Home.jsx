import * as React from 'react';
import '../../../App.css'
import Hero from '../../components/Hero/Hero';
import Portfolio from '../../components/Portfolio/Portfolio';

const Home = () => {
 return(
    <React.Fragment>
         <Hero /> 
         <Portfolio/>
    </React.Fragment>
 );
}

export default Home;