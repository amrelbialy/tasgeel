import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const NameOfPlannedVisitor = ({value}) => {
    const {setNamePlannedVisitor}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {6} >
        <TextField
        
        id = "nameOfVisitor"
        name = "nameOfVisitor"
        label =" اسم الجهة او الشخص الزمع زيارته"
        placeholder = "اسم الجهة او الشخص الزمع زيارته"
        value={value}
        fullWidth
        onChange={e =>
            setNamePlannedVisitor(e.target.value)
        }
        />  
    </Grid>
    );
}


