
import React from "react";
import { makeStyles, Container, Button} from "@material-ui/core";


const Identification = ({etat,setEtat}) => {

  const useStyles = makeStyles({
    loginWrapper :
    { 
    height : 300,
    display : "flex",
    marginTop : 30,
    flexDirection : "row",
    justifyContent: "space-evenly",
    MaxWidth: "100%",
    },
    loginWrapperChild1 : 
    {
      
      height : "%82",
    
      display : "flex",
      flexDirection : "column",
      justifyContent : "space-evenly",
      width : 350
    },
    header1:
    {
      
      display : "flex",
      justifyContent : "center"
    },
    form1 : 
    {
      marginLeft : 16, 
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      
    },
    loginWrapperChild2 : 
    {
      height : "%80",

      display : "flex",
      flexDirection : "column",
      justifyContent : "space-around",
      width : 350,
    },
    
    header2:
    {
      marginTop : 20,
      display : "flex",
      marginLeft : 16,
      justifyContent : "center"
    },
    form2 : 
    {
      marginLeft : 16, 
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
    }
  
  });
  const classes = useStyles();

  return (
    <>
    <Container className={classes.loginWrapper}>
      <div className={classes.loginWrapperChild1}>
        <h1 className={classes.header1}>Please Log In</h1>
        <form className={classes.form1}>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>


      <div className={classes.loginWrapperChild2}>
        <h1 className={classes.header2}>Please Register</h1>
        <form className={classes.form2}>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <label>
            <p>Password</p>
            <input type="password confirmation"/>
          </label>
          <div>
            <Button onClick={ () => { 
                    setEtat("logged")
                }}>Submit</Button>
          </div>
        </form>
      </div>
    </Container>
    
    </>
  );
};

export default Identification ;
