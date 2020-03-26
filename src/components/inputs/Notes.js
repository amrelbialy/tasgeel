import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'


export const Notes = ({value}) => {
    const {setNotes}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {12} >
        <TextField
        
        multiline
        rows="5"
        id = "visitResult"
        name ="visitResult"
        label ="الملاحظات"
        placeholder = "الملاحظات"
        value={value}
        fullWidth
        onChange={e =>
            setNotes(e.target.value)
        }
        />  
    </Grid>
     )
}

