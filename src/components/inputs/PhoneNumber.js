import React from 'react';
import {Grid,TextField} from '@material-ui/core'


export const PhoneNumber = ({name , func , value}) => {
    return (
        <Grid item xs = {12}sm = {4} >
        <TextField
        
        id = {name}
        name ={name}
        label ="هاتف "
        placeholder = " هاتف"
        value={value}
        fullWidth
        onChange={e =>
            func(e.target.value)
        }
        />  
    </Grid>
    );
}


