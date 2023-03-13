import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineHome } from 'react-icons/ai';
import { GiEarthAmerica } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';

import { Toggle}  from '../components/Toggle';
import TopBar from '../components/navbar/TopBar';
import Menu from '../components/navbar/Menu';

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
              <div className="sections">
       
              </div>
            </div>
            <Link to="/" className="nav-link" >
              <AiOutlineHome className='icon' />
            </Link>
            <Link to="/" className="nav-link" >            
              <GiEarthAmerica className='icon' />
            </Link>
            <Link to="/" className="nav-link" >             
              <AiFillHeart className='icon' />
            </Link>
            <div className="nav-link">
            <Toggle/>
            </div>     
        </nav>)
}

export default Header