import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Contact = () => {
    return (
        <React.Fragment>
            <section className='contact-form-container' id="contact">
                <div>
                <h2 className='contact-h2'>Contact Us</h2>
                <form>
                    <Box
                        component="form"
                        sx={{
                            width: 500,
                            maxWidth: '100%',
                        }}
                        noValidate
                        autoComplete="off">
                            <div>
                                <TextField
                                required
                                label="First Name"
                                sx={{ m: 1, width: '25ch',  color: '#edf2f4',
                                    "& .MuiOutlinedInput-root, .MuiInputLabel-root": {
                                        color:'#edf2f4',
                                     },
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& > fieldset": {
                                            border: '1px solid #edf2f4', borderRadius: 1, color: '#edf2f4'
                                    }},
                                    "& .MuiInputLabel-root.Mui-focused": {color: '#edf2f4'},
                                }}
                                />
                                <TextField
                                required
                                label="Last Name"
                                sx={{ m: 1, width: '25ch', 
                                "& .MuiOutlinedInput-root, .MuiInputLabel-root": {
                                    color:'#edf2f4',
                                },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        border: '1px solid #edf2f4', borderRadius: 1, color: '#edf2f4'
                                }},
                                "& .MuiInputLabel-root.Mui-focused": {color: '#edf2f4'},
                            }}
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                fullWidth
                                label="Email Address"
                                sx={{ m: 1, width: '92%',
                                    "& .MuiOutlinedInput-root, .MuiInputLabel-root": {
                                    color:'#edf2f4',
                                     },
                                    "& .MuiOutlinedInput-root.Mui-focused": {
                                        "& > fieldset": {
                                            border: '1px solid #edf2f4', borderRadius: 1, color: '#edf2f4'
                                    }},
                                    "& .MuiInputLabel-root.Mui-focused": {color: '#edf2f4'},
                                }}
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                fullWidth
                                label="Phone Number"
                                sx={{ m: 1, width: '92%',
                                "& .MuiOutlinedInput-root, .MuiInputLabel-root": {
                                    color:'#edf2f4',
                                },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        border: '1px solid #edf2f4', borderRadius: 1, color: '#edf2f4'
                                }},
                                "& .MuiInputLabel-root.Mui-focused": {color: '#edf2f4'},
                            }}
                                />
                            </div>
                            <div>
                                <TextField
                                required
                                fullWidth
                                id="standard-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                helperText="Enter any questions you may have for us."
                                sx={{ m: 1, width: '92%',
                                "& .MuiOutlinedInput-root, .MuiInputLabel-root, .MuiFormHelperText-root": {
                                    color:'#edf2f4',
                                },
                                "& .MuiOutlinedInput-root.Mui-focused": {
                                    "& > fieldset": {
                                        border: '1px solid #edf2f4', borderRadius: 1, color: '#edf2f4'
                                }},
                                "& .MuiInputLabel-root.Mui-focused": {color: '#edf2f4'},
                            }}
                                />
                            </div>
                            <div className='form-button-container'>
                                <Button variant="contained" >Submit</Button>
                            </div>
                    </Box>
                  </form>
                </div>
               
            </section>
        </React.Fragment>
    )
}

export default Contact;