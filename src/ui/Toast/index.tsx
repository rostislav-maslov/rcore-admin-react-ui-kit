import React from 'react'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
import { Snackbar, makeStyles } from '@material-ui/core'

type Props = {
  message: string
  isOpen: boolean
  onClickHandle?: (e?: React.SyntheticEvent) => void
}

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const Toast: React.FC<Props> = ({ isOpen, message, onClickHandle }) => {
  const classes = useStyles()
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    // if (reason === 'clickaway') {
    //   return;
    // }
    // onClickHandle(false);
  }

  return (
    <Snackbar open={isOpen} onClose={handleClose}>
      <Alert onClose={handleClose}>{message}</Alert>
    </Snackbar>
  )
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

// TODO styles
