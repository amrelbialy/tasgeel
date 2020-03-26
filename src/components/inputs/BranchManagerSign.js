import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'


export const BranchManagerSign = ({value}) => {
    const {setBranchManagerSign}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {6} >
        <TextField
        
        id = "branchManagerSign"
        name ="branchManagerSign"
        label =" توقيع مدير الفرع"
        placeholder = " توقيع مدير الفرع"
        value={value}
        fullWidth
        onChange={e =>
            setBranchManagerSign(e.target.value)
        }
        />  
    </Grid>
     )
}

