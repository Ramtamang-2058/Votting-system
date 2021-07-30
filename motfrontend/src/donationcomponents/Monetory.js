import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import {Button} from '@material-ui/core';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { ThemeProvider,makeStyles  } from '@material-ui/core/styles';


const mainProps = {

  style: { 
    //   backgroundImage: `url('Oval.png')`,
    // //   backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
    //   backgroundRepeat:'no-repeat',
    //   backgroundPosition:'center',
    //   backgroundSize:'auto',
      
      display:'flex',
      flexGrow:1,
      color:'#0D6199',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      flexWrap:'wrap',
       
      textAlign:'center',   
      fontSize:'3rem' },
};

const homeProps = {

  style: { 
    
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
      justifyContent:'space-around',
      alignItems:'space-around',
      flexWrap:'wrap',
      padding:'2rem',   
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
const Monetory = () => {
    const classes = useStyles();

    const language = useContext(LanguageContext);
    let homeData={
        'titleen':'eng title',
        'titlenp':'np title'
    }
    return ( 
        <>
        {/* {homeData[`title${language}`]} */}
        <Box {...mainProps} >
            <Box borderRadius="0%" {...homeProps} >
                <Typography gutterBottom variant="h4" component="h2" >
                        National
                    </Typography>
                <Box borderRadius="0%" {...testProps} >
                    
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/static/khalti.svg'} alt="ecg" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            ID : +977-9849903406
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Maiores voluptas laboriosam non dolorum perferendis fuga
                            repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                            voluptas voluptatem vero ex possimus. Iure et consectetur
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Learn More</Button>
                    </Box>   
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/static/NIC.png'} alt="ecg" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            ID : 1234567890

                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Maiores voluptas laboriosam non dolorum perferendis fuga
                            repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                            voluptas voluptatem vero ex possimus. Iure et consectetur
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Learn More</Button>
                    </Box>  
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/static/home.png'} alt="ecg" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            Location : Lalitpur
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Maiores voluptas laboriosam non dolorum perferendis fuga
                            repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                            voluptas voluptatem vero ex possimus. Iure et consectetur
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Learn More</Button>
                    </Box>       

              
                </Box>
                
                  
              
            </Box>
            <Box borderRadius="0%" {...homeProps} >
                <Typography gutterBottom variant="h4" component="h2" >
                        International
                    </Typography>
                <Box borderRadius="0%" {...testProps} >
                    
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/static/gofundme.png'} alt="ecg" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                           ID : 9849903406
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Please click the Link below to access Request form.
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Learn More</Button>
                    </Box>      
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/static/NIC.png'} alt="ecg" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            ID : 1234567890


                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Maiores voluptas laboriosam non dolorum perferendis fuga
                            repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                            voluptas voluptatem vero ex possimus. Iure et consectetur
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Learn More</Button>
                    </Box>  
                    <Box borderRadius="5%" {...circleProps}>
                        <img src={'/static/pnga.png'} alt="ecg" className={classes.logo} />   
                        <Typography gutterBottom variant="h5" component="h2">
                            ID: 0987654321
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" color="inherit">
                            Maiores voluptas laboriosam non dolorum perferendis fuga
                            repellat aut. Blanditiis quos in minus. Voluptatum quia quia
                            voluptas voluptatem vero ex possimus. Iure et consectetur
                        </Typography>
                        <Button variant="default" size="large" color='inherit'  endIcon={<ArrowRightAltIcon />} >Learn More</Button>
                    </Box>     

              
                </Box>
                  
              
            </Box>
           
        </Box>
            
        </>
     );
}
 
export default Monetory;