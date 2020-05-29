import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';




function Header1(){
    return(
        <div>   
            <Tabs >
            <Tab label="login" />
            <Tab label="register" />
            </Tabs>

        </div>
    )
}
export default Header1;