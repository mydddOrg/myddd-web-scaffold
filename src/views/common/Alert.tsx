import React, { useEffect, useState } from "react"

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from "@material-ui/core";

export interface AlertProp{
    open?:boolean,
    handleClose:any,
    title:string,
    description:string
}
const Alert = (props:AlertProp) => {

    const handleClose = () => {
        props.handleClose()
    }

    return (
        <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            确认
          </Button>
        </DialogActions>
      </Dialog>
    )

}

export default Alert