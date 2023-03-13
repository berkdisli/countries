import {useEffect, useState} from 'react';
import "./Menu.scss";

interface MenuProps {
    isMenuOpen: boolean
    value: string;
    placeholder?: string;
    open?: boolean;
    options: string[];
	onChange: (value: string) => void;
}

const Menu = ({isMenuOpen =false, value, placeholder, options, onChange}: MenuProps): JSX.Element => {
    const [selectedItem, setSelectedItem] = useState<string>(value);


    useEffect(() => {
		onChange(selectedItem);
	}, [selectedItem]);

    return (
    <div className={"menu " + (isMenuOpen && "active")}>
      <ul>
        <li onClick={() => isMenuOpen}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#impressum">Impressum</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu

