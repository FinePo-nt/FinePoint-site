import React from "react";
import { Container } from "@mui/material";
import './styles/Hero.css'

const Hero = () => {
    return (
        <Container className="hero-container" maxWidth={100}>
            <h1>Finepoint</h1>
            <blockquote>"All things fine and whatnot"</blockquote>
        </Container>
    )
}

export default Hero;