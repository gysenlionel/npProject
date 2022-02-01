import * as React from 'react'

import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { ClassNames } from '@emotion/react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#000000',
    },
    '& .Mui-selected': {
      backgroundColor: 'black',
      color: '#DF4F4F',
      fontWeight: 'bold',
    },
  },
}))

export default function PaginationControlled({
  pages,
  pageNumber,
  setPageNumber,
  sibling,
  boundary,
}) {
  const classes = useStyles()

  // responsive paginate
  let [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    let updateDimension = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateDimension)
    return () => window.removeEventListener('resize', updateDimension)
  })

  // value for page
  const [page, setPage] = React.useState(1)
  const handleChange = (event, value) => {
    setPage(value + 1)
    setPageNumber(value - 1)
  }

  return (
    <Stack spacing={2}>
      <Pagination
        count={pages?.totalPages}
        page={pageNumber === 0 ? 1 : page - 1}
        onChange={handleChange}
        siblingCount={width <= 580 ? 0 : 1}
        boundaryCount={width <= 580 ? 0 : 1}
        classes={{ ul: classes.ul }}
        // color="primary"
      />
    </Stack>
  )
}
