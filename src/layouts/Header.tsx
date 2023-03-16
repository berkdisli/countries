import {useState} from 'react';
import { Link } from 'react-router-dom';

import { GiEarthAmerica } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';

import { Switch, Grid } from '@mui/material';

import TopBar from '../components/navbar/TopBar';
import Menu from '../components/navbar/Menu';

import { RootState } from "../app/store";
import { useAppDispatch, useAppSelector } from '../app/hooks'

import {
    getAllCountries,
    getFilteredCountries,
    selectedRegion,
} from '../features/countriesSlice';

const Header = () => {
  const regionsFilter:string[] = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
];
const dispatch = useAppDispatch();
const region = useAppSelector(selectedRegion);
const [isMenuOpen, isSetMenuOpen] = useState<boolean>(false);


function handleFilterChange(value: string): void {
    if (!value) return
    if (value === 'All') {
        dispatch(getAllCountries());
        return;
    }
    dispatch(getFilteredCountries(value));
}

    return (
        <nav>
            <div className="app">
              <TopBar isMenuOpen={isMenuOpen} isSetMenuOpen={isSetMenuOpen} />
              <Menu isMenuOpen={isMenuOpen} 
                    value={region}
                    options={regionsFilter}
                    placeholder="Filter by Region"
                    onChange={handleFilterChange}
              />
            </div>          
            <Link to="/" className="nav-link" >            
              <GiEarthAmerica className='icon' />
            </Link>
            <Link to="/favorites" className="nav-link" >             
              <AiFillHeart className='icon' />
            </Link>
            <div className="nav-link">
            </div>     
        </nav>
        )
}

export default Header