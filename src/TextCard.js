import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: '16px',
    margin: '0 12px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  pos: {
    marginBottom: 12,
  },
  excerpt: {
      fontStyle: 'italic'
  }
});

export default function TextCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          STORY OF THE DAY
        </Typography>
        <Typography color="textPrimary">
        Women's Rights Activist
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        Glanis Changarire
        </Typography>
        <Typography className={classes.excerpt} component="p">
          "You find out that the role of the girl is often prescribed for them. But they ne..."
        </Typography>
      </CardContent>
    </Card>
  );
}