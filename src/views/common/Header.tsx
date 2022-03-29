import React, { useEffect, useState } from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    employeeTitle: {
        margin: theme.spacing(4, 0, 2),
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
}));


export interface HeaderProps {
    title:string,
    enableGoBack?:boolean
}
const Header = (props:HeaderProps) => {
    const classes = useStyles()
    const navigate = useNavigate();

    const goBack = ()=>{
        if (props.enableGoBack){
            navigate(-1)
        }
    }

    return (
        <AppBar position="static">
        <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={goBack}>
                {
                    (()=>{
                        if (props.enableGoBack){
                            return<ArrowBackIcon />
                        }
                        else{
                            return<MenuIcon />
                        }
                    })()
                }
            </IconButton>
            <Typography variant="h6" className={classes.title}>
                {props.title}
            </Typography>
        </Toolbar>
    </AppBar>
    )
}

export default Header