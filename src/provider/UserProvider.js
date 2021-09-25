import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [username, setUsername] = useState("Tina");
  return (
    <UserContext.Provider value={[username, setUsername]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
