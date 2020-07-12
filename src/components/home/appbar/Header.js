import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {NavLink} from 'react-router-dom';
 

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Header(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar color="transparent">
        
          <div style={{display:'flex', justifyContent:'space-around'}}>
              <img src={require('../../../assets/images/logo.png')}/>
             <NavLink to="/"><p style={{textDecoration:'underline', fontSize:'16px', fontWeight:'600', color:'#FF1F3D'}}>Home</p></NavLink>
             <NavLink to="read"><p style={{textDecoration:'underline', fontSize:'16px', fontWeight:'600', color:'#FF1F3D'}}>Read Now</p></NavLink>
             <NavLink to="about"><p style={{textDecoration:'underline', fontSize:'16px', fontWeight:'600', color:'#FF1F3D'}}>About Us</p></NavLink>
          </div>
       
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
