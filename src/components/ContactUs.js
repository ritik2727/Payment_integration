import { Grid ,makeStyles, Typography,useTheme,TextField, Button,useMediaQuery, Hidden} from '@material-ui/core';
import React ,{useState} from 'react';


import MailIcon from '@material-ui/icons/Mail';

import airplane from "../assets/send.svg";
import { CircularProgress } from '@material-ui/core';
import { Snackbar } from '@material-ui/core';

import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme=>({
    esitmate:{
        ...theme.typography.estimate,
        fontSize:'1.5rem',
        backgroundColor:theme.palette.common.orange,
        borderRadius:50,
        height: 80,
        width: 205,
        marginRight:'5em',
        marginLeft:'2em',
        '&:hover':{
            backgroundColor:theme.palette.secondary.light
        },
        [theme.breakpoints.down("md")]: {
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
    message:{
        border: `2px solid ${theme.palette.common.black}`,
        marginTop:'5em',
        borderRadius:5
    },
    sendButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height:45,
        width:245,
        fontSize:'1rem',
        backgroundColor:theme.palette.common.black,
        "&:hover":{
            backgroundColor:theme.palette.common.black.light
        },
        [theme.breakpoints.down("sm")]: {
            height: 40,
            width: 225,
          }
    }
    
}))

export default function ContactUs(props){
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.down('md'))


    const [name,setName] = useState('');
    
    const [email,setEmail] = useState('');
    const [emailHelper,setEmailHelper] = useState('');

    const [phone,setPhone] = useState('');
    const [phoneHelper,setPhoneHelper] = useState('');

    const [message,setMessage] = useState('');

    // const [open,setOpen] = useState(false);
    // const [status, setStatus] = useState("Submit");
    // const [status, setStatus] = useState("Submit");

    const [loading,setLoading] = useState(false);

    const [alert, setAlert] = useState({ open: false, color: "" });
    const [alertMessage, setAlertMesssage] = useState("");

    const onChange = event => {
        let valid;

        switch(event.target.id)
        {
            case 'email' :
                setEmail(event.target.value);
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value);

                if(!valid){
                    setEmailHelper('Invaild email');
                }else
                {
                    setEmailHelper('');
                }
                break;
            case 'phone' :
                setPhone(event.target.value)
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value);

                if(!valid) {
                    setPhoneHelper('Invalid phone')
                }else{
                    setPhoneHelper('')
                }
                break;

                default :
                break;
        }
    }

    const buttonContents = (
        <React.Fragment>
          Send Message
          <img src={airplane} alt="paper airplane" style={{ marginLeft: "1em" }} />
        </React.Fragment>
      );
    
    const handleSubmit = async (e) => {
   
        setLoading(true);
        e.preventDefault();
        // setStatus("Sending...");
       
        // const { name, email, phone,message } = e.target.elements;
        let details = {
          name: name,
          email: email,
          phone: phone,
          message: message,
        };
        await fetch("https://vast-castle-89203.herokuapp.com/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(details),
        });
        // setStatus("Submit");
        // let result = await response.json();
        // alert(result.status);
        setLoading(false);
        // setStatus("Submit");
        setLoading(false);
        // setOpen(false);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        // let result = await response.json();
       
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");
      };
    
    return (
        <Grid container direction='row' style={{marginBottom:0}}>
            <Grid 
                item 
                container 
                direction='column' 
                justifyContent='center' 
                alignItems='center' 
                lg={4}
                xl={3}
                style={{
                    marginTop:matchesSM ? '1em'  : matchesMD ? '5em' : '2em',
                    marginBottom: matchesMD ? '5em' : undefined
                }}
            >
               <Grid item>
                   <Grid item container  direction='column'>
                        <Grid item>
                            <Typography 
                                variant='h2'
                                align={matchesMD ? 'center' : undefined}
                                style={{lineHeight:1}}
                            >
                                Contact Us
                            </Typography>
                            <Typography 
                                variant='body1'
                                align={matchesMD ? 'center' : undefined}
                                style={{color :theme.palette.common.black}}
                            >
                                We're waiting
                            </Typography>
                        </Grid>
                        <Grid item container style={{marginTop:'2em'}}>
                            <Grid item>
                                <PhoneIcon style={{marginRight:'0.5em',color:'black'}}/>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='body1'
                                    style={{color:theme.palette.common.black,fontSize:'1rem'}}    
                                >
                                <a href ='tel:8602204936' 
                                    style={{textDecoration:'none',color:'inherit'}}
                                >
                                    (777) 777-7777
                                </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container style={{marginBottom:'2em'}}>
                            <Grid item>
                                <MailIcon  style={{marginRight:'0.5em',verticalAlign:'bottom'}}/>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant='body1'
                                    style={{color:theme.palette.common.black ,fontSize:'1rem'}}    
                                >
                               
                                <a href ='mailto:ritikjain2727@gmail.com' 
                                    style={{textDecoration:'none',color:'inherit'}}
                                >
                                    reactjsdeveloper45@gmail.com
                                </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid 
                            item 
                            container
                            direction='column' 
                            style={{maxWidth:'20em'}}
                        >
                            <Grid item style={{marginBottom:'0.5em'}}>
                                <TextField 
                                    label='Name'
                                    id='name'
                                    fullWidth
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                />
                            </Grid>
                            <Grid item style={{marginBottom:'0.5em'}}>
                                <TextField 
                                    label='Email'
                                    error={emailHelper.length !== 0}
                                    helperText={emailHelper}
                                    id='email'
                                    fullWidth
                                    value={email}
                                    onChange={onChange}
                                />
                            </Grid>
                            <Grid item style={{marginBottom:'0.5em'}}>
                                <TextField 
                                    label='Phone' 
                                    error= {phoneHelper.length !== 0}
                                    helperText={phoneHelper}
                                    id='phone'
                                    fullWidth
                                    value={phone}
                                    onChange={onChange}
                                />
                            </Grid>
                        </Grid>
                        <Grid item style={{ maxwidth: "20em" }} >
                            <TextField
                                InputProps={{disableUnderline:true}}
                                value={message}
                                multiline
                                fullWidth
                                rows={10}
                                id='message'
                                onChange={(e)=>setMessage(e.target.value)}
                                className={classes.message}
                            />
                        </Grid>
                        <Grid item container justifyContent='center' style={{marginTop:'2em',marginBottom:'3em'}}>
                            <Button 
                                disabled={
                                    name.length === 0 ||
                                    email.length === 0 ||
                                    phone.length === 0 ||
                                    message.length === 0 ||
                                    phoneHelper.length !== 0 ||
                                    emailHelper.length !== 0
                                    }
                                variant='contained' 
                                className={classes.sendButton}
                                onClick={handleSubmit}
                            >
                               {loading ? <CircularProgress size={30} /> : buttonContents}
                            
                            </Button>
                        </Grid>
                   </Grid>
               </Grid>
            </Grid>
            <Snackbar
                open={alert.open}
                ContentProps={{
                style: {
                    backgroundColor: alert.color
                }
                }}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                message={alertMessage}
                autoHideDuration={4000}
                onClose={() => setAlert(false)}
            />
            <Hidden mdDown>
            <Grid 
                item 
                direction={matchesMD ? 'column' : 'row'}
                // className={classes.background} 
                alignItems='center'
                justifyContent={matchesMD ? 'center' : undefined}
                lg={8}
                xl={9}
            >
                <img 
                 src='https://images.unsplash.com/photo-1587814969489-e5df12e17391?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1056&q=80' 
                 alt='banking'
                 style={{width:'100%',height:'100%'}}
                  />
            </Grid>
            </Hidden>
        </Grid>
    )
}