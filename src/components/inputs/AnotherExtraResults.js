import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const AnotherExtraResults = ({value}) => {
    const {setAnotherExtraResults}=useProjectsValue()
    return (
        <Grid item xs = {12}sm = {12} >
        <TextField
        
        multiline
        rows="10"
        id = "extraResults"
        name ="extraResults"
        label ="نتائج اخري اضافية"
        placeholder = "نتائج اخري اضافية"
        value={value}
        fullWidth
        onChange={e =>
            setAnotherExtraResults(e.target.value)
        }
        />  
    </Grid>
     );
}


