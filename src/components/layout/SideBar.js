import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Drawer , List ,Divider,ListItem ,
        ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom'
const drawerWidth = 240; 
const useStyles = makeStyles(theme => ({
            root: {
              display: 'flex',
            
            },
            appBar: {
              width: `calc(100% - ${drawerWidth}px)`,
              marginRight: drawerWidth,
            },
            drawer: {
              width: drawerWidth,
              flexShrink: 0,
              
            },
            drawerPaper: {
              width: drawerWidth,
              backgroundColor:"#18202c",
              color:"white"
            },
            
              offset:theme.mixins.toolbar,
           
            content: {
              flexGrow: 1,
              backgroundColor: theme.palette.background.default,
              padding: theme.spacing(3),
            },
            text:{
              textAlign:"right"
            }
        }));
export const SideBar =() => {
    const classes = useStyles();
    const drawer = ( 
        <div >
        <List >
        <Link to="/addClient" style={{textDecoration:"none" , color:"white"}}>
        <ListItem button className={classes.text} >
            <ListItemText  primary = "اضافة عميل"  style={{marginRight:5}}/>
        </ListItem> 
        </Link>
        <Divider/>
        <Link to="/" style={{textDecoration:"none" , color:"white"}}>
        <ListItem button >
        <ListItemText  className={classes.text} primary = 'قائمة العملاء'  style={{marginRight:5}}/>
        
        </ListItem> 
        </Link>
        <Divider/>
        </List> 
        <Divider />
        </div>
        );
    return (
        <div className={classes.root}>
        <Drawer 
          className={classes.drawer}
          variant="permanent"
          classes={{
          paper: classes.drawerPaper
          }}
          anchor="right"
          >
          <div className={classes.offset} >
          </div>
          <Divider />
          {drawer}
          </Drawer>
        </div>
    )
}
