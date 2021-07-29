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
      margin: theme.spacing(2),

    },
  },
}));


export default function MainPage() {
  const classes = useStyles();

  return (
     <div className={classes.root}>
        <Card className={classes.root}>
        <CardContent className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
            Overview of MOT
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              COVID19 has hit us hard, hundreds of people are dying on a daily basis from lack of ICU beds, Oxygen Supply and many others deprived of oxygen lying in the corridors of hospitals. Lots of Organizations, Alliances, Government Agencies, Groups are bringing the right tools and technologies to save people's lives. It has been reported that the Oxygen Plants, Concentrators, Ventilators and other biomedical equipment are coming to Nepal but without after sales support. Furthermore, lack of technicians is stopping the use of those life-saving devices.
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              As per Dr. Shishir, Bir Hospital during Innotalk #4 shared, “ For the preparation of the 3rd wave, hospital administration should be able to update with technologies and must be able to use them when necessary for biomedical tools and technologies. In Nepal, there was a shortage of oxygen, crisis production was tight but the main problem lay in real time oxygen mapping and management. Also with doctors, machines are saving lives and like the human body, they also need care and maintenance. So biomedical engineers are a must for this country and engineers and doctors need to collaborate now. For the 3rd wave, hospitals should step up and push the administration hard for next level preparation in this through digital push. 
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">

            To fight these challenges, Robotics Association of Nepal [RAN], Biotechnology Society of Nepal [BSN] and Biomedical Engineering Foundation Nepal [BEFN] are working together as a Mission Oxygen Team [MOT] with Nepal Biomedical Association [NBA] as a supporting organization where we are recruiting Engineers with Biomedical background or have previously worked on Biomedical devices to install, operate, maintain and operate the Oxygen facilities all over Nepal as we three organization together would mobilize the members and other interested volunteers to solve these existing challenge. We have established Memorandum of Understanding [MoU] with Non-Resident Nepali Associations, Nepal Ventilators Banks, Pawan BioScientific Engineering Services, Sagarmatha Biomedical Engineering Service Concern Pvt. Ltd.  and Nepal Health Equipment Development Foundation [NHEDF].
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              Mission Oxygen Team [MOT] will be the team to reach out for any technical help : Documentation, tracking, service and maintenance. We are already working with COVID Alliance team, Nepal Ventilators Bank, FNCCI Covid Crisis Support team and other civil society groups
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              Mr. Arun Neupane from CCMC has shared that they are working on an integrated digital war system where they will be monitoring all the datas from the country and taking effective actions to fight against this pandemic. They are willing to partner together with MOT to mobilize biomedical engineers all over Nepal and map hospital infrastructure.

            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              The team is in its early stage as we are training our volunteers/members on these devices. We hope to equip ourselves with knowledge on this device and be able to support the Healthcare system. We are targeting to reach up to 90% utilization of all oxygen and biomedical related equipment throughout Nepal.

            </Typography>
        
        </CardContent>
        
        </Card>
        <Card className={classes.root}>
        <CardContent className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
            Objectives of MOT
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              1. To create a digital database of the Biomedical Equipment facilities existing in the Nepal Healthcare fraternity.

            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              2. To track and real-time monitoring of the Biomedical-equipment facilities in Nepal.
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              3. To create a pool of biomedical tech volunteers in different provinces of Nepal.

            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              4. To mobilize the pool of tech volunteers to install, operate, maintain and repair the medical equipment based on a request from the different facilities.

            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              5. To support the Nepal Government and medical institutions with engineering and tech skills in this time of Pandemic.

            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              6. Support the Nepal Government and other organizations with the right information while buying/purchasing the Oxygen Equipment. Also to work on standard operating protocol.

            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              7. To provide pertinent information regarding the usefulness of different companies which manufacture different biomedical instruments (Oxygen concentrator, Oxygen plant)

            </Typography>
        </CardContent>
        
        </Card>

        <Card className={classes.root}>
        <CardContent className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
            Why MOT?
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              1. Group of Biomedical technician, diplomas, engineers with the flavor of biotechnologist and robotics engineers working together.


            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              2. There are a total 195 engineers with biomedical, robotics, electronics, electrical and computer engineering background along with IT students.
            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              3. Experts with their experience of setting up Oxygen Concentrators, Oxygen Tanks, Ventilators and other oxygen based equipment. Representative from all around the country with Provincial and Municipal.


            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              4. TMOT Province-1, MOT Province-2, MOT Province-3 , MOT Province-4, MOT Province-5, MOT Province-6, MOT Province-7.


            </Typography>
            <Typography align='justify' variant="body1" color="textSecondary" component="p">
              5. MOT consists of more than 250 members ranging from Engineers, Doctors, Biomedical Leaders, Campaigners and Government representations.


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