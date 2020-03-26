import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const ConstantVisitData = ({value}) => {
    const {setConstantVisitDate}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {4} >
        <TextField
        
        id = "visitDate"
        name = "visitDate"
        label ="تاريخ الزيارة"
        placeholder = "تاريخ الزيارة "
        value={value}
        fullWidth
        onChange={e =>
            setConstantVisitDate(e.target.value)
        }
        />  
    </Grid>
    );
}

