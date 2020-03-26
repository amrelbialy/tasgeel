import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const VisitResult = ({value}) => {
    const {setVisitResult}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {6} >
        <TextField
        id = "visitResult"
        name ="visitResult"
        label ="نتيجة الزيارة"
        placeholder = "نتيجة الزيارة "
        value={value}
        fullWidth
        onChange={e =>
            setVisitResult(e.target.value)
        }
        />  
    </Grid>
     )
}


