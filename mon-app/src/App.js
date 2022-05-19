import { makeStyles } from "@material-ui/core";
import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Identification from "./Pages/Identification";
import { useState } from "react";
import Connexion from "./Pages/Connexion";
import Inscription from "./Pages/Connexion";



const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();
  const[etat,setEtat] = useState("logged");
  console.log(etat)
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header etat={etat}/>
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
        <Route path="/Identification" exact>
          {etat == "logged_out" ? 
          (<Inscription etat={etat} setEtat={setEtat}/>) : 
          (<Connexion etat={etat} setEtat={setEtat}/>)
          }
        </Route>
        <Route path="/Connexion" component={Connexion} exact></Route>
        <Route path="/Inscription" component={Inscription} exact></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
