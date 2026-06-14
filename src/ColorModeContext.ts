import { createContext } from "react";

export const ColorModeContext = createContext({
  toggleColorMode: () => {
    console.log("Default context toggle");
  },
});
