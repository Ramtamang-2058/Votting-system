import React, { useContext } from 'react';
import { LanguageContext } from './App';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';

const defaultProps = {
  borderColor: 'black',
  border: 1,
  m: 5,
  style: { 
     
      display:'flex',
      justifyContent:'space-around',
      alignItems:'center',
      height:200,
      width:300,
      flexDirection:'column',
      color:'white',
      fontSize:'3rem' },
};

const Footer = () => {
    const language = useContext(LanguageContext);
    return ( 
    <>
      
        <Box display="flex" justifyContent="center" flexWrap='wrap' bgcolor='#3b6ba5'>
            <Box borderRadius="5%" justifyContent='flex-start' {...defaultProps} flexGrow={3} >
                <Typography gutterBottom variant="h5" component="h2">
                Logo
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                Bhanimandal near to 12 Basket ,Lalitpur, Nepal opposite to Alka hospital, Lalitpur 44600
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                    © 2021-2022 Executive Trade International.
                 </Typography>
            </Box>
            <Box borderRadius="5%" {...defaultProps} flexGrow={1}>
                 <Typography gutterBottom variant="h5" component="h2">
                About
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                Organization
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                Leads
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                Members
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                Contact Us
                </Typography>
            </Box>
            <Box borderRadius="5%" {...defaultProps} flexGrow={1} flexWrap='wrap'>
                <Typography gutterBottom variant="h5" component="h2">
                Links
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                Request Support
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                Member Request
                </Typography>
                <Typography align='justify' variant="body1" color="white" component="p">
                Donation
                </Typography>
            </Box>
            <Box borderRadius="5%" {...defaultProps} flexGrow={1}>
                <Typography gutterBottom variant="h6" component="h2">
                <MailOutlineIcon fontSize="small"/> Missionoxygenteam.ram.org.np
                </Typography>
                <Typography align='justify' variant="h6" color="white" component="p">
                <PhoneIcon fontSize="small" /> +977-9849903406
                </Typography>
            </Box>
        </Box>
        
    </>
    );
}
 
export default Footer;