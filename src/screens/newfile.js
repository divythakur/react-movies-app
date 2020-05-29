import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



function DummyApp() {
  return (
      <div>
    <Button variant="contained" color="primary">
      Hello World
    </Button>
    <Tabs >
                         <Tab label="login" />
                         <Tab label="register" />
                     </Tabs>
    </div>
  );
}
export default DummyApp ;
