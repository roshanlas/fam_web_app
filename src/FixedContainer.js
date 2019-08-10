import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function FixedContainer(prop) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ padding: '0 0 40px' }}>
          {prop.children}
        </Typography>
      </Container>
    </React.Fragment>
  );
}