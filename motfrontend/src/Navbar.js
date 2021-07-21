import {AppBar,Toolbar,Button,Drawer,List,Divider,ListItem,ListItemText,Typography,useMediaQuery } from '@material-ui/core';
import { Link,NavLink } from 'react-router-dom';
import { ThemeProvider,makeStyles  } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import React from "react";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 5,
    
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
       borderBottom: '3px solid #3b6ba5',
    },
    flexGrow:1,
  },
}));

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
                <ListItem button component={Link} to="/apply"  className={classes.mobileNav}>
                    <Typography  color="primary" >Apply for Member</Typography>
                    
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
                        
                            
                    <Typography variant="h5" className={classes.title} color="primary" gutterBottom>Mission Oxygen Team</Typography>
                    <Button component={NavLink} exact to="/"  color="primary"  className={classes.button}>Home</Button>
                    <Button component={NavLink} exact to="/about" color="primary" className={classes.button}>About</Button>
                    <Button component={NavLink} exact to="/apply" color="primary" className={classes.button}>Apply for Member</Button>
                    <Button component={NavLink} exact to="/newsresources"  color="primary" className={classes.button}>News & Resources</Button>
                    <Button component={NavLink} exact to="/request" variant="contained" className={classes.button} color="primary">Request Help</Button>
                

            </Toolbar> 
        :
            <Toolbar>      
                    <Typography variant="h5" className={classes.title} color="primary" gutterBottom>Mission Oxygen Team</Typography>
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