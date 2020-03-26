import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

                
export const VisitDeterminedDate = ({value}) => {
    const {setDetertminedDate}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {4} >
        <TextField
        
        id = "determinedDate"
        name = "determinedDate"
        label ="تاريخ تحديد الزيارة"
        placeholder = "تاريخ تحديد الزيارة"
        value={value}
        fullWidth
        onChange={e =>
            setDetertminedDate(e.target.value)
        }
        />  
    </Grid>
    );
}


