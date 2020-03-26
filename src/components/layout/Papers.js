import React from 'react'
import {Paper ,Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme=>({
    root:{
    display:"flex",
    marginTop:100,
    
    [theme.breakpoints.between('md','lg')]: {
        marginLeft:0,
        marginRight:0,
    },
    [theme.breakpoints.between('lg','xl')]: {
    marginLeft:0,
    marginRight:0,
    },
    textAlign:'right',
    
    },
    paper:{
    height:"auto",
    padding:20,
    [theme.breakpoints.between('md','lg')]: {
        maxWidth:1000,
        minWidth:720
},
[theme.breakpoints.between('lg','xl')]: {
    maxWidth:1500,
    
},
      width:"100%",
      paddingLeft:20,
      paddingRight:20
    },
   
    location:{
        backgroundColor: '#EEE',
        marginBottom:30,
        marginTop: 20,
        height:45,
        width:"100%",
        padding:10
    
    },
    shape:{
        border:1,
        width: 175,
        height: 40, 
        float:"right",
      
    // [theme.breakpoints.between('md','lg')]: {
    //         marginLeft:790
    // },
    // [theme.breakpoints.between('lg','xl')]: {
    //     marginLeft:990
    // },
        borderTopLeftRadius:10,
       backgroundColor:theme.palette.info.main
    },
    icon:{
        paddingTop:6,
        paddingRight:5,
        color:"white",
        
    },
    text:{
        padding:0,
        color:"white",
    }
  }));
  

export const Papers=({name , path , component , icon})=>{
    
        const classes = useStyles();
    return (
        <div className={classes.root}>

            <Paper className={classes.paper} elevation={3}>
        <Typography variant="h4">
                    {name}
                </Typography>
                < Typography className={classes.location}>
                {path}
                </Typography>
                {component}
                </Paper>
        </div>
    );
    
}
