import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const Current = ({value}) => {
    const {setCurrent}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {3}>
        <TextField
        
        id = "current"
        name = "current"
        label ="حالي"
        placeholder = "حالي"
        value={value}
        fullWidth
        onChange={e =>
            setCurrent(e.target.value)
        }
        />  
    </Grid>
    );
}


