import React from 'react'
import { Button as MaterialButton, makeStyles } from '@material-ui/core'
import { colors } from '../../shared/constants/colors'
import { SvgIconComponent } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    borderRightColor: 'red',
    '&.rippleVisible': {
      background: 'red',
    },
  },
  containedPrimary: {
    backgroundColor: colors.success.successDefault,
    '&:hover': {
      backgroundColor: colors.success.successHover,
    },
    '&$disabled': {
      color: '#fff',
      backgroundColor: colors.disable.disableActive,
    },
  },
  disabled: {
    // backgroundColor: colors.disable.disableDefault,
  },
  rippleChild: {
    background: colors.success.successActive,
  },
  text: {
    color: colors.success.successDefault,
    '&$disabled': {
      color: colors.disable.disableDefault,
    },
  },
})

type Props = {
  variant?: 'contained' | 'text'
  disabled?: boolean
  onClick?: (e?: React.MouseEvent) => void
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

export const Button: React.FC<Props> = ({
  variant,
  disabled,
  startIcon,
  endIcon,
  onClick,
  children,
}) => {
  const classes = useStyles()
  return (
    <MaterialButton
      color="primary"
      variant={variant}
      disabled={disabled}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      TouchRippleProps={{
        classes: {
          // rippleVisible: classes.rippleVisible,
          child: classes.rippleChild,
        },
      }}
      classes={{
        root: classes.root,
        containedPrimary: classes.containedPrimary,
        disabled: classes.disabled,
        textPrimary: classes.text,
      }}
    >
      {children}
    </MaterialButton>
  )
}
