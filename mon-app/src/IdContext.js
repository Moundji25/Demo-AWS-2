import React, { createContext, useContext, useEffect, useState } from "react";

const ID = createContext();

const IdContext = ({ children }) =>
 {
  const [etat,setEtat] = useState("logged_out");

  /*useEffect(() => {
    if (currency === "EUR") setSymbol("€");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);*/

  return (
    <ID.Provider value={{ etat , setEtat}}>
      {children}
    </ID.Provider>
  );
};

export default IdContext;

export const IDState = () => {
  return useContext(ID);
};
