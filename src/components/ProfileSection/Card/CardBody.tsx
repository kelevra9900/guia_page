import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

// core components
import styles from '../styles/cardBodyStyle';

const useStyles = makeStyles(styles);

export default function CardBody(props:any) {
  const classes = useStyles();
  const { className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined,
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  children: PropTypes.node,
};