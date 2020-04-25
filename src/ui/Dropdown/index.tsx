import React, { useState, useEffect } from 'react'
import { Button } from '../Button'
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  makeStyles,
  Paper,
  List,
  ListItem,
  Theme,
  ListItemText,
} from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'
import { TextField } from '../TextField'

type ListItemType = {
  label: string
  value: any
}

type Props = {
  labelText: string
  // id: string;
  labelId?: string
  items: ListItemType[]
  handleSelectItem?: (item: ListItemType) => void
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    minWidth: 165,
  },
  listItemText: {
    textTransform: 'uppercase',
  },
}))

export const Dropdown: React.FC<Props> = ({
  items,
  handleSelectItem,
  // id,
  labelText,
  labelId,
}) => {
  const classes = useStyles()
  const [listIsOpen, setListIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<ListItemType | null>(null)
  const onSelectItem = (item: ListItemType) => {
    setCurrentItem(item)
    setListIsOpen(false)
    if (handleSelectItem) handleSelectItem(item)
  }

  return (
    <FormControl id={id} className={classes.formControl}>
      <Button
        endIcon={<KeyboardArrowDown />}
        variant="contained"
        onClick={() => setListIsOpen(!listIsOpen)}
      >
        {currentItem?.label ?? labelText}
      </Button>
      <div className={classes.root}>
        <List>
          {listIsOpen &&
            items.map((item, index) => (
              <ListItem
                key={index}
                onClick={() => {
                  onSelectItem(item)
                }}
                className={classes.listItemText}
              >
                <ListItemText>{item.label}</ListItemText>
              </ListItem>
            ))}
        </List>
      </div>
    </FormControl>
  )
}
