import { createContext } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const user = { name: "Alice", email: "alice@example.com" };

    const createUser = () => { }

    return (
        <UserContext.Provider
            value={{
                user,
                createUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
