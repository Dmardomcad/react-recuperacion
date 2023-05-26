import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(false);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("logedUser"));
    if (storedUser) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
