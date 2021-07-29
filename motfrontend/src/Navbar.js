import {AppBar,Toolbar,Button,Drawer,List,Divider,ListItem,ListItemText,Typography,useMediaQuery,Box } from '@material-ui/core';
import { Link,NavLink } from 'react-router-dom';
import { makeStyles  } from '@material-ui/core/styles';
import React from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    logo: {
        flexGrow: 5,
        height: 60,
        maxWidth: 180,
        marginRight: '10px',
    
    },

    list: {
        width: 250,
               
    },
    fullList: {
        width: "auto"
    },
    mobileNav:{
        display:'flex',
        justifyContent:'center',
    },
    button: {
    "&.active": {
       borderBottom: '3px solid #0D6199',
    },
    flexGrow:1,
  },
    

}));
const defaultProps = {

    style: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: 180,
        color: 'white',
        flexGrow:5,
    },
};


const Navbar = () => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
        ) {
        return;
        }
        setState({ [anchor]: open });
    };
   

    const list = (anchor) => (
        <div
        className={clsx(classes.list, {
            [classes.fullList]: anchor === "top"
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        >
            <List >
                <ListItem button component={Link} to="/" className={classes.mobileNav}>
                    <Typography  color="primary" >Home</Typography>
                </ListItem>
                <ListItem button component={Link} to="/about" className={classes.mobileNav}>
                    <Typography  color="primary" >About</Typography>
                </ListItem>
                <ListItem button component={Link} to="/donation"  className={classes.mobileNav}>
                    <Typography  color="primary" >Donate</Typography>
                </ListItem>
                <ListItem button component={Link} to="/apply"  className={classes.mobileNav}>
                    <Typography  color="primary" >Join Us</Typography>
                </ListItem>
                <ListItem button component={Link} to="/newsresources" className={classes.mobileNav}>
                    <Typography  color="primary" >News & Resources</Typography>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button className={classes.mobileNav} >
                    <Button component={Link} to="/request" variant="contained" color="primary">Request Help</Button>
                </ListItem>
            </List>
        </div>
    );
    const matches = useMediaQuery('(min-width:1000px)');

    return ( 
    <AppBar color='transparent' position="static">
        {matches ? 
            <Toolbar>
                    <Box borderRadius="5%" {...defaultProps} flexGrow={1}>
                        <img src={'/logo.jpg'} alt="MOT logo" className={classes.logo} />      
                                     
                    </Box>   
                      
                    <Button component={NavLink} exact to="/"  color="primary"  className={classes.button}>Home</Button>
                    <Button component={NavLink} exact to="/about" color="primary" className={classes.button}>About</Button>
                    <Button component={NavLink} exact to="/donation" color="primary" className={classes.button}>Donate</Button>
                    <Button component={NavLink} exact to="/apply" color="primary" className={classes.button}>Join Us</Button>
                    <Button component={NavLink} exact to="/newsresources"  color="primary" className={classes.button}>News & Resources</Button>
                    <Button component={NavLink} exact to="/request" variant="contained" className={classes.button} color="primary">Request Help</Button>
                

            </Toolbar> 
        :
            <Toolbar>      
                    <Box borderRadius="5%" {...defaultProps} flexGrow={1}>
                        <img src={'/logo.jpg'} alt="MOT logo" className={classes.logo} />      
                                     
                    </Box>   
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="primary"
                        aria-label="menu"
                        onClick={toggleDrawer("top", true)}
                    >
                        <MenuIcon />
                    </IconButton>         
                    <Drawer
                    anchor={"top"}
                    open={state["top"]}
                    onClose={toggleDrawer("top", false)}
                    >
                    {list("top")}
                    </Drawer>
            </Toolbar> 

        }
    </AppBar>
     );
}
 
export default Navbar;