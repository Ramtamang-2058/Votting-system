import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import {Button} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const circleProps = {
  bgcolor: '#0D6199',
  borderColor: '#0D6199',
  m: 2,
  style: { 
      width: '10rem', 
      height: '10rem',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      color:'white',
      boxShadow: '5px 10px 18px #888888',
      fontSize:'3rem' },
};
const homeProps = {

  style: { 
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/static/Oval.png')`,
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:'auto',
      width: '20rem', 
      height: '35rem',
      display:'flex',
      flexGrow:1,
      color:'#0D6199',
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'flex-start',
      padding:'2rem',   
      textAlign:'center',   
      fontSize:'3rem' },
};
const testProps = {

  style: { 
      color:'white',
      width: 'auto', 
      height: '40rem',
      display:'flex',
      flexGrow:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
    
      textAlign:'center',   
      fontSize:'3rem' },
};
const circleprops2 = {

  style: { 
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
      display:'flex',
      flexGrow:1,
      color:'#0D6199',
      flexDirection:'column',
      
      alignItems:'center',
      padding:'1rem',   
 
      textAlign:'center',   
      fontSize:'3rem' },
};

const Home = () => {
    const language = useContext(LanguageContext);
    let homeData={
        'titleen':'eng title',
        'titlenp':'np title'
    }
    return ( 
        <>
        {/* {homeData[`title${language}`]} */}
        <Box display="flex" justifyContent="space-around" flexWrap='wrap' >
            <Box borderRadius="0%" {...homeProps} >
                <Box borderRadius="0%" {...testProps} >
                <Typography gutterBottom variant="h5" component="h2">
                    MISSION OXYGEN TEAM [MOT] IS THE TEAM TO REACH OUT FOR 
                    ANY TECHNICAL HELP : DOCUMENTATION, TRACKING, SERVICE 
                    AND MAINTENANCE RELATED TO BIOMEDICAL EQUIPMENTS
                 </Typography>
                 <Button variant="contained" size="large" color="primary" endIcon={<ArrowRightAltIcon />} >Request Help</Button>
              
            </Box>
                  
              
            </Box>
            {/* <Box borderRadius="0%" {...testProps} >
                
              
            </Box> */}
            
           
        </Box>
        <Box display="flex" justifyContent="center" flexWrap='wrap' padding='1rem'>
            <Typography gutterBottom variant="h4" component="h2" color='primary'>
                Our Achievements
            </Typography>
        </Box>
        <Box display="flex" justifyContent="center" flexWrap='wrap'>
            <Box display="flex" {...circleprops2}>
                <Box borderRadius="50%" {...circleProps}>200</Box>
                <Typography gutterBottom variant="h5" component="h2">
                    Hospitals Mapped
                </Typography>
            </Box>
            <Box display="flex" {...circleprops2}>
                <Box borderRadius="50%" {...circleProps}>200</Box>
                <Typography gutterBottom variant="h5" component="h2">
                    Oxygen Concentrator Tested
                </Typography>
            </Box>
            <Box display="flex" {...circleprops2}>
                <Box borderRadius="50%" {...circleProps}>200</Box>
                <Typography gutterBottom variant="h5" component="h2">
                    MOT Members
                </Typography>
            </Box>
            <Box display="flex" {...circleprops2}>
                <Box borderRadius="50%" {...circleProps}>200</Box>
                <Typography gutterBottom variant="h5" component="h2">
                    Request Solved
                </Typography>
            </Box>
        </Box>
            
        </>
     );
}
 
export default Home;