import React from "react";

const AuthContext =  React.createContext({
    isLoggedIn: false,
    onLogout: () => {} // dummy function which does nothing // just doing this to get auto-complete suggestion of context
});

export default AuthContext;