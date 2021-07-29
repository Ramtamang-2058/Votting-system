import React, { useContext } from 'react';
import { LanguageContext } from './App';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import { Link } from 'react-router-dom';
import {Button } from '@material-ui/core';
import { ThemeProvider,makeStyles  } from '@material-ui/core/styles';


const defaultProps = {
    // borderColor: 'white',
    // border: 1,
    m: 5,
    style: {

        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 200,
        width: 250,
        flexDirection: 'column',
        color: 'white',
        fontSize: '3rem'
    },
};
const useStyles = makeStyles((theme) => ({

    logo: {
        
        height: 70,
        maxWidth: 180,
        marginRight: '10px',
    
    },

    

}));

const Footer = () => {
    const classes = useStyles();

    const language = useContext(LanguageContext);
    const preventDefault = (event) => event.preventDefault();
    return (
        <>

            <Box display="flex" justifyContent="center" flexWrap='wrap' bgcolor='#0D6199'>
                <Box borderRadius="5%" justifyContent='flex-start' {...defaultProps} flexGrow={1} >
                    <img src={'/logo.jpg'} alt="MOT logo" className={classes.logo} />      
                    <Typography align='justify' variant="body1" color="white" component="p">
                        Bhanimandal near to 12 Basket ,Lalitpur, Nepal opposite to Alka hospital, Lalitpur 44600
                    </Typography>
                    <Typography align='justify' variant="body1" color="white" component="p">
                        © 2021 Mission Oxygen Team
                    </Typography>
                </Box>
                <Box borderRadius="5%" {...defaultProps} flexGrow={1}>
                    <Typography gutterBottom variant="h5" component="h2">
                        About
                    </Typography>
                    <Button component={Link} exact to="/about/organization" color='inherit'>
                        Organization
                    </Button>
                    <Button component={Link} exact to="/about/leads"  color='inherit'>Leads</Button>
                    <Button component={Link} exact to="/about/members"  color='inherit'>Members</Button>
                    <Button component={Link} exact to="/about/contact"  color='inherit'>Contact Us</Button>
                    
                  
                </Box>
                <Box borderRadius="5%" {...defaultProps} flexGrow={1} flexWrap='wrap'>
                    <Typography gutterBottom variant="h5" component="h2">
                        Links
                    </Typography>
                    <Button component={Link} exact to="/request"  color='inherit'>Request Support</Button>
                    <Button component={Link} exact to="/apply"  color='inherit'>Member Request</Button>
                    <Button component={Link} exact to="/#"  color='inherit'>Donation</Button>
 
                </Box>
                <Box borderRadius="5%" {...defaultProps} flexGrow={1}>
                    <Typography  >
                        <MailOutlineIcon fontSize="small" /> info@missionoxygenteam.org
                    </Typography>
                    <Typography align='justify' >
                        <PhoneIcon fontSize="small" /> +977-9860478881
                    </Typography>
                </Box>
            </Box>

        </>
    );
}

export default Footer;