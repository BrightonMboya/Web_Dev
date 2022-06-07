import React from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

const AuthContextProvider = (props) => {
  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};
