import React from 'react';
import { MuiThemeProvider, AppBar, Card } from '@material-ui/core'

export default (props) => (
  <MuiThemeProvider>
    <div>
      <AppBar
        title="Welcome"
      />
      <br />
      <Card>You have been logged in succesfully!</Card>
    </div>
  </MuiThemeProvider>
);