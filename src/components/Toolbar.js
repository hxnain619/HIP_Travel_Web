import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = theme => ({
  root: {
    height: 90,
    [theme.breakpoints.up('sm')]: {
      height: 90,
    },
  },
});

export default withStyles(styles)(Toolbar);