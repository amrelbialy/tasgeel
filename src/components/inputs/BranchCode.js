import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const BranchCode = ({value}) => {
    const {setBranchCode} =useProjectsValue()
    return (
        
        <Grid item xs = {12}sm = {6} >
        <TextField
        
        id = "branchCode"
        name = "branchCode"
        label ="كود الفرع"
        value={value}
        placeholder = "كود الفرع"
        fullWidth
        onChange={e =>
            {
           setBranchCode(e.target.value)
            console.log(e.target.value)
            }
        } 
        />  
    </Grid>
        
    );
}

