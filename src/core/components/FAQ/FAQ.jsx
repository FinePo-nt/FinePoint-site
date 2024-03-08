import * as React from 'react';
import Contact from '../Contact/Contact';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    return (
        <React.Fragment>
            <div className='faq-container' id='FAQ'>
                <h2 className='contact-h2'>Frequently Asked Questions</h2>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        Q1. Lorem ipsum dolor sit amet, in lobortis lorem accumsan?
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        Q2. Lorem ipsum dolor sit amet, in lobortis lorem accumsan?
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                        Q3. Lorem ipsum dolor sit amet, in lobortis lorem accumsan?
                    </AccordionSummary>
                    <AccordionDetails>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
            </div>
            <Contact/>
        </React.Fragment>
    )
}

export default FAQ;