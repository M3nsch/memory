import * as React from "react";

export enum Theme {
  Light,
  Dark,
}

export interface IThemeContextProps { theme: number; toggleTheme?: () => void; }
const ThemeContext = React.createContext<IThemeContextProps>({
  theme: Theme.Light,
});

export default ThemeContext;
