import {useEffect} from 'react';
import "./Menu.scss";
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { RegionsFilter } from '../ContinentFilter';
import {filteredRegion, getAllCountries, getFilteredCountries,} from '../../features/countriesSlice'
import DropdownMenu from '../DropdownMenu';
interface MenuProps {
    isMenuOpen: any
}

const Menu = ({isMenuOpen =false}: MenuProps): JSX.Element => {
    const region = useAppSelector(filteredRegion);
    const dispatch = useAppDispatch();

    const handleFilterChange = (value: string): void => {
        if (!value) return
        if (value === 'All') {
            dispatch(getAllCountries());
            return;
        }
        dispatch(getFilteredCountries(value));
    }

    useEffect(() => {
        dispatch(getAllCountries());
    }, []);

    return (
    <div className={"menu " + (isMenuOpen && "active")}>
      <DropdownMenu
                    value={region}
                    options={RegionsFilter}
                    placeholder="Filter by Region"
                    onChange={handleFilterChange}
                />
    </div>
  );
}

export default Menu

