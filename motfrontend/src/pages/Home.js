import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import {Button} from '@material-ui/core';
const circleProps = {
  bgcolor: '#3b6ba5',
  borderColor: '#3b6ba5',
  m: 10,
  style: { 
      width: '10rem', 
      height: '10rem',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      color:'white',
      fontSize:'3rem' },
};
const homeProps = {
  bgcolor: '#3b6ba5',
  borderColor: '#3b6ba5',
  m: 1,
  style: { 
      width: '45rem', 
      height: '20rem',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      color:'white',
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
        {homeData[`title${language}`]}
        <Box display="flex" justifyContent="space-around" flexWrap='wrap'>
            <Box borderRadius="5%" {...homeProps}>
                <Typography gutterBottom variant="h5" component="h2">
                MISSION OXYGEN TEAM [MOT] IS THE TEAM TO REACH OUT FOR 
                ANY TECHNICAL HELP : DOCUMENTATION, TRACKING, SERVICE 
                AND MAINTENANCE RELATED TO BIOMEDICAL EQUIPMENTS
                </Typography>
                <Button color="primary">Request Help</Button>
            </Box>
            <Box borderRadius="5%" {...homeProps}>200</Box>
           
        </Box>
        <Box display="flex" justifyContent="center" flexWrap='wrap'>
            <Typography gutterBottom variant="h5" component="h2">
                Our Achievements
            </Typography>
        </Box>
        <Box display="flex" justifyContent="center" flexWrap='wrap'>
            <Box borderRadius="50%" {...circleProps}>200</Box>
            <Box borderRadius="50%" {...circleProps}>200</Box>
            <Box borderRadius="50%" {...circleProps}>200</Box>
            <Box borderRadius="50%" {...circleProps}>200</Box>
        </Box>
            
        </>
     );
}
 
export default Home;