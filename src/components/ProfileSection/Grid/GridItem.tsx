import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = {
  grid: {
    padding: '0 15px !important',
  },
};

const useStyles = makeStyles(styles);

interface Props {
  xs: any;
  sm: any;
  md: any;
  children: any;
}
export default function GridItem(props:Props) {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item={true} {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node,
};
