import React, { useState } from 'react'
import { Modal as MuiModal, ModalProps } from '@material-ui/core'

type Props = {
  open: boolean
} & ModalProps

export const Modal: React.FC<Props> = ({ open, children, ...other }) => {
  return <MuiModal open={open}>{children}</MuiModal>
}
