import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom'    


const useStyles = makeStyles(theme => ({
  root: {
  
  },
  appBar: {
    width: "100%",
    height:58,
    backgroundColor:theme.palette.info.light,
    padding:10
  },
  toolbar: {
    float:"right",
  },
  button :{
    fontSize:20
  }
 
}));

export const Navbar=()=> {
     const classes = useStyles();
        return (
          <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <div >
                <Typography variant="h6" noWrap className={classes.toolbar}>
                  <Link to="/addClient" style={{textDecoration:"none" , color:"white"}}>
                <Button  color="inherit" className={classes.button}>اضافة عميل</Button>
                </Link>
                </Typography>
                <Typography variant="h6" noWrap className={classes.toolbar}>
                <Link to="/" style={{textDecoration:"none" , color:"white"}}>
                <Button color="inherit" className={classes.button}>العملاء</Button>
                </Link>
                </Typography>
              
              </div>
            </AppBar>
          </div>
        );
    
}