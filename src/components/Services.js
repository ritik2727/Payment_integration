import React from 'react';
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery,useTheme } from '@material-ui/core';
import '../components/ui/services.css'
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useStyles = makeStyles(theme=>({
  background:{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${'https://images.unsplash.com/photo-1593113630400-ea4288922497?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: '100%',
    width: '100%',
    paddingBottom:'10em',
    paddingTop:'10em',
},
vcontainer:{
  opacity:1,
  width:'50%',
  backgroundColor: 'transparent',
  background:'#fff',
},
rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
input:{
    borderRadius: "8%",
    borderColor: "#F2D200",
    height:'2em',
    fontSize:'1.2rem',
    marginBottom:'1em'
}
}))


export default function Services() {
  const classes = useStyles();
  const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
    const [amount, setAmount] = useState(0);
    const [product] = React.useState({
        name: "WF NGO",
        description: "Cool car"
    });

    const onAmountChange = (e) => {
      const amount = e.target.value;
      if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
        setAmount(amount);
    }
    }

    async function handleToken(token) {
        const response = await axios.post(
            "https://arcane-bastion-09939.herokuapp.com/checkout/",
            { token, product, amount }
        );
        setAmount(0);
        const { status } = response.data;
        console.log("Response:", response.data);
        
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
            
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }
    return (
      <Grid container className={classes.background} justifyContent='center'  >
        
        <Grid item container direction='column' alignItems='center' style={{width:matchesSM ? '100%' : '50%'}}  className='sign-up-form'>
          <Grid item>
          <Typography variant='h2' style={{color:'#F7FD04',marginBottom:'0.5em'}} align='center' >
              Lets Make A Change Together!
          </Typography>
          </Grid>
          <Grid item >
            <Typography variant='subtitle1' style={{color:'#FBF6F0',marginBottom:'0.5em'}} align='center'>
              Giving is not just about making a donation,
              its about making difference.
            </Typography>
            <Typography  align='center' variant='subtitle1' style={{color:'#FBF6F0',marginBottom:'0.5em'}} >
              Any help or donation,
              no matter how small or big,
              will be deeply appreciated and is much needed.
            </Typography>
          </Grid>
          <Grid item>
          <Typography variant='h4' style={{color:'#FBF6F0',marginBottom:'0.5em'}} >
            Enter The amount you want to donate
          </Typography>
          </Grid>
          <Grid item>
          <form>
            <label>
                <input className={classes.input} type="text" name="name" 
                  value={amount}
                  onChange={onAmountChange} 
                />
            </label>
            </form>
          </Grid>
          <Grid item>
          <StripeCheckout stripeKey='pk_test_51JOzfFSGs3WteDI290yrM0bhrCjRDXsZISCi8PVHG45isfw7CN09fsOooDB99yl042wgNGVE1G9p8a6sLo5MC1ZD00PovwK3x6'
            token={handleToken}
            amount={amount * 100}
            name="WF NGO"
            billingAddress
            // shippingAddress
          >
          <Button variant='contained' style={{backgroundColor:'#DA0037'}}>
            <Typography variant='h6' style={{color:'#EDEDED'}}> Donate Now</Typography>
           </Button>
          </StripeCheckout>
          </Grid>
          
        </Grid>
      
        
      </Grid>
    )

}
