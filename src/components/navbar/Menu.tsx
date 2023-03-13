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
        </li>
        <li onClick={() => isMenuOpen}>
        </li>
        <li onClick={() => isMenuOpen}>
        </li>
      </ul>
    </div>
  );
}

export default Menu

