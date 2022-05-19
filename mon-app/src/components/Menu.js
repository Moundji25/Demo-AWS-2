
import React from "react";
import { Button } from "@material-ui/core";
import { IDState } from "../IdContext";

/* a rajouter dans une balise d'identification qui changera l'etat (connecté/deconnecté)
onClick={ () => { 
                    setEtat("logged")
                }}
*/
import {
    makeStyles,
  } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    lesBouttons :
    {
      flex: 1,
      backgroundColor : "green",
    },
  }));

const Menu = ({etat}) => 
{
    const classes = useStyles();
    //const { etat } = IDState();
    if(etat === "logged_out")
    {
        return(
                <Button className={classes.lesBouttons}>
                    log_in
                </Button>
            
        );
    }

    return(
        
            <Button  className={classes.lesBouttons} >
            log_out
            </Button>
    );
}

export default Menu;