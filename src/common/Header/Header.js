import React,{Component} from 'react';
import './Header.css'

import Button from '@material-ui/core/Button';



function Header(){
    
        return(
            <div>
                {/* <Button variant="contained" color="default">Login</Button> */}
                <div className="header-com">
                    <img  className="app-logo" src={"https://cdn.upgrad.com/UpGrad/temp/81930fe3-8dc5-47d1-b7f9-d00847a4f057/logo.svg"} alt="s" />
                <button style={{float:"right",marginRight:"15px",marginTop:"8px"}}>Login</button></div>
                
                
            </div>

        )
    
}
export default Header;