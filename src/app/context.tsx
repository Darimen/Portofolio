"use client";

import { Context, createContext, useState, useContext } from "react";

interface AppContextType {
  theme: string;
  toggleTheme: () => void;

  tags: string[];
  setTags: (newTags: string[]) => void;

  setter: string
  setSetter: (newSetter: string) => void;
}

export const AppContext: Context<AppContextType> = createContext<AppContextType>({
  theme: "light",
  toggleTheme: () => {},

  tags: [],
  setTags: (newTags: string[]) => {},

  setter: "tag",
  setSetter: (newSetter: string) => {},
});

export default function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<string>("light");
    const [tags, setTags] = useState<string[]>([]);
    const [setter, setSetter] = useState<string>("tag")

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <AppContext.Provider value={{ theme, toggleTheme, tags, setTags, setter, setSetter }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
};