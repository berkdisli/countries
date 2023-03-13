import {useState} from "react";
import { DarkModeToggle } from "react-dark-mode-toggle-2";

export const Toggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  
  return (
    <DarkModeToggle 
      onChange={setIsDarkMode}
      isDarkMode={isDarkMode} 
    />
  );
};