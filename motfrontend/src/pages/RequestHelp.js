import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import {Button} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const homeProps = {

  style: { 
      width: '20rem', 
      height: '25rem',
      display:'flex',
      flexGrow:1,
      color:'#0D6199',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      padding:'5rem',   
      textAlign:'center',   
      fontSize:'3rem' },
};
const testProps = {

  style: { 
     
      width: 'auto', 
      height: '40rem',
      display:'flex',
      flexGrow:1,
      flexDirection:'column',
      justifyContent:'flex-start',
      alignItems:'center',
      padding:'5rem',   
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
const circleProps = {
  bgcolor: '#0D6199',
  borderColor: '#0D6199',
  m: 3,
  style: { 
      width: '25rem', 
      height: '10rem',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center',
      color:'white',
      fontSize:'3rem' },
};
const RequestHelp = () => {
    const language = useContext(LanguageContext);
    let homeData={
        'titleen':'eng title',
        'titlenp':'np title'
    }
    return ( 
        <>
        {/* {homeData[`title${language}`]} */}
        <Box display="flex" justifyContent="center" alignItems='center' flexWrap='wrap' >
            <Box borderRadius="0%" {...homeProps} >
                <Box borderRadius="0%" {...testProps} >
                    <Typography gutterBottom variant="h5" component="h2">
                        Request Support
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            MOT provides the support for the Bio tech. Please find the form link below to request for our support.
                        </Typography>
                    <Box borderRadius="5%" {...circleProps}>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            <MenuBookIcon fontSize="large" />
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
            

                    </Box>
                    <Button variant="contained" size="large" color="primary" endIcon={<ArrowRightAltIcon />} >Fill Form</Button>

              
                </Box>
                  
              
            </Box>
           
        </Box>
            
        </>
     );
}
 
export default RequestHelp;