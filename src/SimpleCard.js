import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: '16px',
    margin: '0 12px'
  }
});

export default function TextCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
      {props.children}
      </CardContent>
    </Card>
  );
}