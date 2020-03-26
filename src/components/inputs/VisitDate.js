import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

                
export const VisitDate = ({value}) => {
    const {setVisitDate}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {3} >
        <TextField
        
        id = "visitDate"
        name = "visitDate"
        label ="ميعاد الزيارة"
        placeholder = "ميعاد الزيارة "
        value={value}
        fullWidth
        onChange={e =>
            setVisitDate(e.target.value)
        }
        />  
    </Grid>
    );
}

