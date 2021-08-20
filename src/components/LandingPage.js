import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography ,useMediaQuery,useTheme,Button, Hidden} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    background:{
        backgroundImage: `url(${'https://www.compassion.com/Images/donate-now-hero--l.jpg'})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: '100%',
        width: '100%',
        // position:'absolute',
        paddingBottom:'10em',
        paddingTop:'10em',
        [theme.breakpoints.down('md')]:{
            backgroundImage: `url(${'https://www.compassion.com/Images/donate-now-hero--m.jpg'})`,
        },
        [theme.breakpoints.down('sm')]:{
            backgroundImage: `url(${'https://www.compassion.com/Images/donate-now-hero--m.jpg'})`,
            paddingTop:'10em',
            paddingBottom:'10em'
        },
        [theme.breakpoints.down('xs')]:{
            backgroundImage: `url(${'https://www.compassion.com/Images/donate-now-hero--s.jpg'})`,
            paddingBottom:'10em',
            paddingTop:'10em',
        }
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em"
        }
      },
    esitmate:{
        fontSize:'1.5rem',
        backgroundColor:'#ffd100',
        borderRadius:5,
        height: 40,
        width: 175,
        fontFamily:'Raleway',
        fontWeight:'bold',
        marginRight:'5em',
        // marginLeft:'2em',
        '&:hover':{
            backgroundColor:theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
            marginLeft: 0,
            marginRight: 0
          },
          [theme.breakpoints.down("xs")]: {
            marginLeft: 0,
            marginRight: 0
          }
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down("md")]: {
          marginBottom: "2em"
        }
    },

}))

export default function LandingPage(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
    const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

    return (
        <Grid container direction='row'>
            <Grid item  container  className={classes.background}   >          
                <Grid 
                    item 
                    style={{ 
                        marginLeft:matchesXS ? 0 : '3em', 
                        // textAlign:matchesXS ? 'center':'inherit',
                       
                        }}      
                > 
                <Hidden smDown>
                    <Grid container direction='column' style={{ width:matchesMD ? '30em' : '40em'}} >
                        <Grid item >
                        <Typography 
                            variant='h5' style={{color:'#ffd100'}}
                        >
                            Donate Now
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography 
                            variant='h2' 
                            style={{fontSize:matchesXS ? 35 :44,color:'#EEEEEE'}} 
                            // align={matchesXS ? "center" : undefined}
                        >
                             Help Families Affected by
                            COVID 19
                        </Typography>
                        </Grid>
                        <Typography variant='body1' style={{color:'#EEEEEE',width:matchesXS ? '10em' : matchesSM ? '25em':'30em'}}>
                            Help restore what COVID-19 destroyed — provide for a family in poverty today.
                            Help provide food, medical care and support during this pandemic.
                        </Typography>
                        <Grid container item justify={matchesXS ? 'center' : undefined}>
                        <Grid item style={{marginTop:'2em'}}>
                            <Button 
                                variant='contained' 
                                className={classes.esitmate}
                                component={Link} to='/services'
                                onClick = {()=>{
                                    props.setValue(1)
                                }}
                            >
                                Donate
                            </Button>
                        </Grid>
                    </Grid>
                    </Grid>
                </Hidden>   
                </Grid>
            </Grid>
            <Hidden mdUp>
            <Grid item container direction='column'  className={classes.rowContainer} >
                        <Grid item >
                        <Typography 
                            variant='h5' style={{color:'#03002C',fontWeight:700}}
                        >
                            Donate Now
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography 
                            variant='h2' 
                            style={{fontSize:matchesXS ? 35 :44,color:theme.palette.common.black}}
                            // align={matchesXS ? "center" : undefined}
                        >
                             Help Families Affected by COVID 19
                        </Typography>
                        </Grid>
                        <Typography variant='body1' style={{color:'#393E46'}}>
                            Help restore what COVID-19 destroyed — provide for a family in poverty today.
                            Help provide food, medical care and support during this pandemic.
                        </Typography>
                        <Grid container item >
                        <Grid item style={{marginTop:'2em'}} >
                            <Button 
                                variant='contained' 
                                className={classes.esitmate}
                                component={Link} to='/services'
                                onClick = {()=>{
                                    props.setValue(1)
                                }}
                            >
                                Donate
                            </Button>
                        </Grid>
                    </Grid>
                    </Grid>
            </Hidden>
            <Grid item container direction='column' style={{marginTop:'3em',marginBottom:'3em'}} 
                    className={classes.rowContainer}
            >
                    <Grid item>
                    <Typography variant='h4' align='center' style={{marginBottom:'2em',color:'#090030'}} >
                    Your donation to this fund will help stop the virus's spread in India and give 
                    communities on the front lines of this crisis the resources they need to act quickly and 
                    protect the most 
                    vulnerable communities.
                    </Typography>
                    </Grid>
                <Grid item >
                    <Typography variant='h4' align='center' style={{marginBottom:'1em'}}>
                    When you donate to WF NGO COVID-19 Relief Fund, your donation will be used to:
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant='subtitle1' align='center' style={{color:theme.palette.common.black,marginBottom:'1em'}}>
                    Send doctors, nurses, and other front line responders to communities in need.
                    </Typography>
                    <Typography variant='subtitle1' align='center' style={{color:theme.palette.common.black,marginBottom:'1em'}}>
                    Get masks, oxygen, ventilators, and other lifesaving medical supplies to hospitals and clinics.
                    </Typography>
                    <Typography variant='subtitle1' align='center' style={{color:theme.palette.common.black,marginBottom:'1em'}}>
                    Deliver essential items to struggling families and older individuals in lockdown.
                    </Typography>
                    <Typography variant='subtitle1' align='center' style={{color:theme.palette.common.black,marginBottom:'1em'}}>
                    Provide mental and emotional support to frontline responders others affected by the COVID-19 outbreak in India.
                    </Typography>
                    <Typography variant='subtitle1' align='center' style={{color:theme.palette.common.black}} >
                    Make COVID-19 vaccines more accessible and affordable.
                    </Typography>
                </Grid>
                </Grid>
        </Grid>

    )
}