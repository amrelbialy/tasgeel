import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const MarketingManagerSign = ({value}) => {
    const {setMarketinghManagerSign}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {6} >
        <TextField
        
        id = "marketingManagerSign"
        name ="markeringManagerSign"
        label =" توقيع مدير المبيعات"
        placeholder = " توقيع مدير المبيعات"
        value={value}
        fullWidth
        onChange={e =>
            setMarketinghManagerSign(e.target.value)
        }
        />  
    </Grid>
     )
}


