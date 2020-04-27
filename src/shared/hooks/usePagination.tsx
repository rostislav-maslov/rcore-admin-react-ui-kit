import React from 'react'
import {
  usePagination as MaterialUsePagination,
  UsePaginationProps,
} from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core'

type Props = UsePaginationProps

export const usePagination: React.FC<Props> = () => {
  const classes = useStyles()
  const { items } = MaterialUsePagination({
    count: 10,
  })

  return (
    <nav>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children

          if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = '…'
          } else if (type === 'page') {
            children = (
              <button
                type="button"
                style={{ fontWeight: selected ? 'bold' : 'initial' }}
                {...item}
              >
                {page}
              </button>
            )
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            )
          }

          return <li key={index}>{children}</li>
        })}
      </ul>
    </nav>
  )
}

const useStyles = makeStyles({
  ul: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
})
