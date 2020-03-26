import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const PersonToBeInterviewed = ({value}) => {
    const {setPersonToBeInterviewed}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {4} >
        <TextField
        
        id = "personToBeInterviewed"
        name ="personToBeInterviewed"
        label =" الشخص المسئول المراد مقابلته"
        placeholder = "الشخص المسئول المراد مقابلته "
        value={value}
        fullWidth
        onChange={e =>
            setPersonToBeInterviewed(e.target.value)
        }
        />  
    </Grid>
    );
}


