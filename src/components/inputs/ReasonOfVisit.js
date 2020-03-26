import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const ReasonOfVisit = ({value}) => {
    const {setReasonOfVisit}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {6} >
        <TextField
        
        id = "reasonOfVisit"
        name ="reasonOfVisit"
        label ="  الغرض من الزيارة"
        placeholder = " الغرض من الزيارة"
        value={value}
        fullWidth
        onChange={e =>
            setReasonOfVisit(e.target.value)
        }
        />  
    </Grid>
     )
}


