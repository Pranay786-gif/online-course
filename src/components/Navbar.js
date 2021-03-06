import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { set } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <div variant="h4" className={classes.logo}>
          <img style={{width:'100px'}} src="/exam-logo-new.png" alt="img"/>
        </div>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            {localStorage.getItem("user_email")?<>
             <Link onClick={()=>localStorage.clear()} to="/login" className={classes.link}>
             Log Out 
           </Link><ExitToAppIcon style={{marginTop:2}} /></>: 
            <Link to="/login" className={classes.link}>
              Login
            </Link>}
           
          </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
