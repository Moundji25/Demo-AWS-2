import {
  AppBar,Button,Container,MenuItem,Select,Toolbar,Typography,} from "@material-ui/core";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import monMenu from "./Menu";
import { IDState } from "../IdContext";
import { useState } from "react";


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: '#00c2ff',
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    
  },
  Button:
  {
    flex: 1,
    color: '#00c2ff',
  }
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header({etat}) {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  //const { etat,setEtat } = IDState();
  //const[etat,setEtat] = useState("logged_out");


  const history = useHistory();

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push(`/`)}
              variant="h6"
              className={classes.title}
            >
              Crypto Tracker
            </Typography>
            
            { etat === "logged" ?
            ( 
            <Button style={{ width: 100, height: 40, marginLeft: 15 }} className={classes.Button} 
              onClick={() => history.push(`/Identification`)}>
              <img src="https://img.icons8.com/fluency/48/000000/logout-rounded-down.png"/>
              Log_out
            </Button>)
            :
            (<Button 
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onClick={() => history.push(`/Identification`)}
              className={classes.Button}
              >
              <img src="https://img.icons8.com/fluency/48/000000/login-rounded-right.png"/>
              Login/register
              </Button>)
            }
            
        
            {/* <Button color="inherit">Login</Button> */}
            <Select
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15 }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"EUR"}>EUR</MenuItem>
            </Select>
           
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
