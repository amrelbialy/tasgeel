import React from 'react';
import {Grid,TextField} from '@material-ui/core'
import {useProjectsValue} from '../../context'

export const NameOfVisitor = ({value}) => {
    const {setNameVisitor}=useProjectsValue()
   return (
            <Grid item xs = {12}sm = {4} >
            <TextField
            
            id = "nameOfVisitor"
            name = "nameOfVisitor"
            label =" اسم القائم بالزيارة"
            placeholder = "اسم القائم بالزيارة"
            value={value}
            fullWidth
            onChange={e =>
                setNameVisitor(e.target.value)
            }
            />  
        </Grid>
    );
}


