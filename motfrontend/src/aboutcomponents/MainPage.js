import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection:'column',
    
    '& > *': {
      flexGrow: 1,
      margin: theme.spacing(1),

    },
  },
}));


export default function MainPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Card className={classes.root}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Overview of MOT
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex alias, incidunt temporibus sint sequi quod dicta! Dignissimos, in amet quam, dolore, laboriosam labore sed consectetur possimus ut aperiam dolor distinctio.
            </Typography>
        </CardContent>
        
        </Card>
        <Card className={classes.root}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Objectives of MOT
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex impedit ullam enim deserunt velit aperiam, saepe, soluta nemo beatae consequatur at porro nihil architecto nulla minus fugiat ab tenetur? Nobis.
            </Typography>
        </CardContent>
        
        </Card>

        <Card className={classes.root}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Mission of MOT
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro minima dolor a ea blanditiis aut doloremque at, magnam sint eligendi, facilis repellat eaque sit, accusamus enim dicta veritatis maxime nihil?
            </Typography>
        </CardContent>
        
        </Card>

        <Card className={classes.root}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            Organizations
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, natus dolorum. Quisquam, provident! Dolorum sequi consequatur quisquam temporibus et labore soluta beatae veritatis cupiditate. Ad soluta animi eius deserunt iure.
            </Typography>
        </CardContent>
        
        </Card>
    </div>
  );
}


// export default function MainPage() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
       
//             <Paper variant="outlined" elevation={6}>
//                 <Typography variant="h5">Overview of MOT</Typography> 
//             </Paper>
//             <Paper variant="outlined" elevation={6}>
//                 <Typography variant="h5">Objectives of MOT</Typography> 
//             </Paper>
//             <Paper variant="outlined" elevation={6}>
//                 <Typography variant="h5">Mission of MOT</Typography> 
//             </Paper>
//             <Paper variant="outlined" elevation={6}>
//                 <Typography variant="h5">Organizations</Typography> 
//             </Paper>
             
       
//     </div>
//   );
// }