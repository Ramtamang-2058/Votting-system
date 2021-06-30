import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ThemeProvider, createMuiTheme,makeStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(9)
    },
    title: {
        flexGrow: 1,
        color:pink[500],
    }, 
}));

const Navbar = () => {

    const classes = useStyles();

    return ( 
    <AppBar 
    color='default'
    position="static">
        <Toolbar>
                <Typography variant="h5" className={classes.title} gutterBottom>Mission Oxygen Team</Typography>
                <Button component={Link} to="/" color='secondary' >Home</Button>
                <Button component={Link} to="/about" color='secondary'>About</Button>
                <Button component={Link} to="/contact" color='secondary' >Contact</Button>
                 <Button component={Link} to="/newsresources" color='secondary' >News & Resources</Button>
                <Button component={Link} to="/request" color='secondary' variant="contained">Help</Button>

        </Toolbar>
    </AppBar>
     );
}
 
export default Navbar;