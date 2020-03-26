import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const VisitPlace = ({value}) => {
    const {setVisitPlace}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {9} >
        <TextField
        
        id = "visitPlace"
        name ="visitPlace"
        label ="مكان الزيارة"
        placeholder = "مكان الزيارة"
        value={value}
        fullWidth
        onChange={e =>
            setVisitPlace(e.target.value)
        }
        />  
    </Grid>
    );
}


