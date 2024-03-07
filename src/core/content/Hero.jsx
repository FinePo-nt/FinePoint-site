import React from "react";
import { Container } from "@mui/material";

const Hero = () => {
    return (
        <Container className="hero-container" maxWidth={100} id='home'>
            <h1>Finepoint</h1>
            <blockquote>"All things fine and whatnot"</blockquote>
        </Container>
    )
}

export default Hero;