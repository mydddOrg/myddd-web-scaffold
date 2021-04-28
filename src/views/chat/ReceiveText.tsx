import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '10px',
        textAlign: 'left',
        backgroundColor: '#e87364'
    }
}));


export interface ReceiveTextProps {
    text:String
}

const ReceiveText = (props:ReceiveTextProps) => {
    const classes = useStyles()

    return (<div className={classes.root}>
        {props.text}
    </div>)
}

export default ReceiveText