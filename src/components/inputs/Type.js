import React from 'react';
import {Grid,TextField} from '@material-ui/core'


export const Type = ({name , func , value}) => {
    
    return (
        <Grid item xs = {12}sm = {4} >
        <TextField
        
        id = {name}
        name = {name}
        label ="الصفة"
        placeholder = "الصفة"
        value={value}
        fullWidth
        onChange={e =>
            func(e.target.value)
        }
        />  
        </Grid>
    );
}
