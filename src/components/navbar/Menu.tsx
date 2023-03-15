import {useEffect, useState} from 'react';
import "./Menu.scss";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RegionsFilter } from '../../components/ContinentFilter';

import {
    selectedRegion, getAllCountries, getFilteredCountries} from '../../features/countriesSlice';
import Dropdown from '../Dropdown';

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

    const region = useAppSelector(selectedRegion);
const dispatch = useAppDispatch();

    function handleFilterChange(value: string): void {
        if (!value) return
        if (value === 'All') {
            dispatch(getAllCountries());
            return;
        }
        dispatch(getFilteredCountries(value));
    }

    useEffect(() => {
		onChange(selectedItem);
	}, [selectedItem]);

    return (
    <div className={"menu " + (isMenuOpen && "active")}>
      <ul>

        <li onClick={() => isMenuOpen}>
          <a href="#intro">All</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#portfolio">Africa</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#works">Americas</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#contact">Asia</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#impressum">Europe</a>
        </li>
        <li onClick={() => isMenuOpen}>
          <a href="#impressum">Oceania</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu

