import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'


export const BranchName = ({value}) => {
    const {setBranchName} =useProjectsValue()
    
    return (
    <Grid item xs = {12}sm = {6} >
        <TextField
    
        id = "branchName"
        name = "branchName"
        label ="اسم الفرع"
        placeholder = "اسم الفرع"
        value={value}
        fullWidth
        onChange={e =>
            setBranchName(e.target.value)
        }
        />  
    </Grid>
        
    );
}


