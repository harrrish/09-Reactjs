import { createContext, ReactNode } from "react";

// Define a type for the context value that includes a string, number, boolean, array of objects, and an object
interface ContextValue {
  phone: string;
  count: number;
  isActive: boolean;
  items: { id: number, name: string }[]; // Array of objects
  user: { name: string, email: string }; // An object
}

// Create the context with a default value for all the fields in ContextValue
export const MyCustomContext =
  createContext <
  ContextValue >
  {
    phone: "",
    count: 0,
    isActive: true,
    items: [],
    user: { name: "", email: "" },
  };

interface ContextProviderProps {
  children: ReactNode;
}

// Context provider component
const MyContextProvider = ({ children }: ContextProviderProps) => {
  // Example of the values you want to provide
  const phone = "+1 123456789";
  const count = 0;
  const isActive = true;
  const items = [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" },
  ];
  const user = { name: "John Doe", email: "john.doe@example.com" };

  // The value that the context provider will provide to its consumers
  const contextValue: ContextValue = { phone, count, isActive, items, user };

  //* WHEN PASSING MULTIPLE DATA WE HAVE TO PASS THEM AS OBJECTS.
  return (
    <MyCustomContext.Provider value={contextValue}>
      {children} {/* Render children inside the context provider */}
    </MyCustomContext.Provider>
  );
};

export default MyContextProvider;
