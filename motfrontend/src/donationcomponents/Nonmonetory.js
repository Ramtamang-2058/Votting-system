import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import {Button} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { ThemeProvider,makeStyles  } from '@material-ui/core/styles';


const homeProps = {

  style: { 
       backgroundImage: `url('Oval.png')`,
    //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
      backgroundRepeat:'no-repeat',
      backgroundPosition:'center',
      backgroundSize:'auto',
      
      display:'flex',
      flexGrow:1,
      color:'#0D6199',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
       
      textAlign:'center',   
      fontSize:'3rem' },
};
const testProps = {

  style: { 
     
      display:'flex',
      justifyContent:'center',
      alignItems:'space-around',
      flexWrap:'wrap',
      padding:'3rem',   
      textAlign:'center',   
      fontSize:'3rem' },
};
const circleProps = {

  m: 3,
  style: { 
      backgroundColor:'white',
      width: '15rem',
      height: 350,
      padding:5,
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-around',
      alignItems:'center',
      color:'#0D6199',
      boxShadow: '5px 10px 18px #888888',
      fontSize:'3rem' },
};
const useStyles = makeStyles((theme) => ({

    logo: {

        height: 60,
        maxWidth: 180,
   
    },

    

}));
const Nonmonetory = () => {
    const classes = useStyles();

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
                <Typography gutterBottom variant="h5" component="h2" >
                        Non Monetary Donation
                    </Typography>
                <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                        Please choose the form below according to its nature, and thank you in advance we will make sure that your donation are used for overall public benefit. 
                </Typography>
                <Box borderRadius="0%" {...testProps} >
                    
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/ecg.png'} alt="ecg" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            Bio Tech Donation
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Fill Form</Button>
                    </Box>
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/oxygen (2).png'} alt="oxygen" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            Oxygen Concentrator Donation
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Fill Form</Button>
                    </Box>
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/donate (1).png'} alt="donate" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            Large Scale Donation 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Fill Form</Button>
                    </Box>
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/surgery-lamp.png'} alt="lamp" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            Hospital Requirement 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Fill Form</Button>
                    </Box>
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/oxygen.svg'} alt="oxygen" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            Oxygen Cylinder Donation 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Fill Form</Button>
                    </Box>
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/receive.png'} alt="recieve" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            Blood Donations

                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Fill Form</Button>
                    </Box>
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/receive.png'} alt="recieve" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            Others Donations 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Fill Form</Button>
                    </Box>                 

              
                </Box>
                  
              
            </Box>
           
        </Box>
            
        </>
     );
}
 
export default Nonmonetory;