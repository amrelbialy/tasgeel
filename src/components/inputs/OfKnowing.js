import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const OfKnowing = ({value}) => {
    const {setOfKnowing}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {4} >
        <TextField
        
        id = "ofKnowing"
        name = "ofKnowing"
        label ="بعرفة"
        placeholder = "بعرفة"
        value={value}
        fullWidth
        onChange={e =>
            setOfKnowing(e.target.value)
        }
        />  
        </Grid>
    );
}


