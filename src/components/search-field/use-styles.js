import { fade, makeStyles, withStyles } from '@material-ui/core/styles'
import MUIInputBase from '@material-ui/core/InputBase'

export const InputBase = withStyles(theme => ({
  root: {
    color: theme.palette.common.lightGrayishBlue,
  },
  input: {
    padding: theme.spacing(1, 1, 1, 4),
    transition: theme.transitions.create('width'),
    width: '100%',
    borderRadius: 3,
    boxShadow: `0 2px 4px 0 ${theme.palette.common.black}`,
    border: `1px solid ${theme.palette.common.lightGrayishBlue}`,

    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(25),
      '&:focus': {
        width: theme.spacing(28),
      },
    },
  },
}))(MUIInputBase)

export default makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.02),
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(4),
    color: theme.palette.common.blue,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))
