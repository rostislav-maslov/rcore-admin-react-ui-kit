// eslint-disable-next-line import/no-unresolved
import { Overrides } from '@material-ui/core/styles/overrides'
import { MuiPickersOverrides } from '@material-ui/pickers/typings/overrides'

type overridesNameToClassKey = {
  [P in keyof MuiPickersOverrides]: keyof MuiPickersOverrides[P]
}

declare module '@material-ui/core/styles/overrides' {
  export type ComponentNameToClassKey = overridesNameToClassKey
}
