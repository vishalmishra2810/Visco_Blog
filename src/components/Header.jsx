import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  component: {
    background: "#FFFFFF",
    color: "black",
  },
  container: {
    justifyContent: "center",
    "& > *": {
      padding: 20,
    },
  },
  link: {
    textDecoration: "none",
    color: "inherit",
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.component}>
      <Toolbar className={classes.container}>
        <Typography>HOME</Typography>
        <Typography>ABOUT</Typography>
        <Typography>CONTACT</Typography>
        <Link className={classes.link} to="/">
          <Typography>BLOG</Typography>
        </Link>
        <Typography>LOGIN</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
