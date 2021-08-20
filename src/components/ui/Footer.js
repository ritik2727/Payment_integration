import { Grid, makeStyles ,Typography} from '@material-ui/core';
import React from 'react';


const useStyle = makeStyles(theme=>({
    footer:{
        backgroundColor:theme.palette.common.black,
        width:'100%',
        zIndex:1302,
        position:'relative',
        // marginTop:'30em'
        
    },
    center:{
        margin:"0 auto"
    },
}));
export default function Footer(props){
    const classes = useStyle();

    return (
        <footer className={classes.footer}>
                        <Grid container justifyContent='center'>
                            <Grid item>
                            <Typography variant="body2" 
                                style={{color:'white',
                                        textAlign:'center',
                                        marginTop:'2em',
                                        fontFamily:'Raleway',
                                        fontWeight:600,
                                        fontSize:'1.1rem',
                                        textTransform:'none'
                                        }}
                            >
                                    Made By  Ritik Jain
                            </Typography>
                            <Typography variant="body2" 
                                        style={{
                                                color:'white',
                                                textAlign:'center',
                                                fontFamily:'Raleway',
                                                fontWeight:600,
                                                fontSize:'1.1rem',
                                                marginBottom:'2em'
                                                }}>
                                {'Copyright © '}
                                    WF NGO {' '}
                                {new Date().getFullYear()}
                                {'.'}
                            </Typography>
                            </Grid>
                        </Grid>
        </footer>
    )
}
