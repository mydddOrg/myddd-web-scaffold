import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: '10px',
        backgroundColor: '#f1f8e9',
        textAlign: 'right',
        flexDirection: 'row-reverse',
        marginRight: '10px'
    }
}));

export interface SendTextProps {
    text:String
}

const SendText = (props:SendTextProps) => {
    const classes = useStyles()

    return (<div className={classes.root}>
        {props.text}
    </div>)
}

export default SendText