import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const ClientType = ({value}) => {
    const {setClientType}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {3} >
        <TextField
        
        id = "clientType"
        name = "clientType"
        label ="نوع العميل "
        placeholder = "نوع العميل "
        value={value}
        fullWidth
        onChange={e =>
            setClientType(e.target.value)
        }
        />  
    </Grid>
    );
}


