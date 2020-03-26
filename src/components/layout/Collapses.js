import React from 'react';
import {Collapse,MenuList,MenuItem,Paper
    } from '@material-ui/core';

export const Collapses = ({door,style,headCells,Selected,handleMenuItemClick}) => {
    return (
        <Collapse in={door} timeout="auto" unmountOnExit>
        <Paper className={style} elevation={3}>
                <MenuList>
                    {headCells.map((headCell,index)=>{
                        return <MenuItem 
                        key={headCell.id}
                        selected={index === Selected}
                        onClick={event => handleMenuItemClick(event, index)}
                        >
                        {headCell.label}
                        </MenuItem>
                        
                    })}
                </MenuList>
        </Paper>
            </Collapse>
    );
}


