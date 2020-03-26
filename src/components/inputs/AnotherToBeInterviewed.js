import React from 'react';
import {Grid,TextField} from '@material-ui/core'



export const AnotherToBeInterviewed = ({name , func , value}) => {
    
    return (
        <Grid item xs = {12}sm = {4} >
        <TextField
        
        id = {name}
        name ={name}
        label ="اشخاص مسئولين اخرين"
        placeholder = "اشخاص مسئولين اخرين "
        value={value}
        fullWidth
        onChange={e =>
            func(e.target.value)
        }
        />  
    </Grid>
    )
}


