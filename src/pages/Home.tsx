import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import SearchBar from '../components/SearchBar';
import CountryCard from '../components/CountryCard';

import {
    allCountries,
    filteredCountries,
    // getAllCountries,
    // getFilteredCountries,
    // selectedRegion,
    status,
} from '../features/countriesSlice';

import { useAppDispatch, useAppSelector } from '../app/hooks';

import Loading from '../pages/Loading';

function Home() {
    const countries = useAppSelector(allCountries);
    const filtered = useAppSelector(filteredCountries);
    const requestStatus = useAppSelector(status);

    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    }

    const displayedCountries = useMemo(() => {
        return filtered.length > 0 ? filtered : countries;
    }, [filtered, countries]);

    const searchedCountries = useMemo(
        () =>
            displayedCountries.filter((country) => {
                return country.name.common
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            }),
        [displayedCountries, searchValue]
    );

    return (
         <div className="home">
                <SearchBar
                    value={searchValue}
                    onChange={handleSearch}
                    placeholder="Search..."
                />
        <h1 className='title'>Countries</h1>
                {requestStatus === 'loading' && <Loading />}  
                {searchedCountries.length > 0 &&
                searchedCountries.map((country) => {
                    return (
                        <Link to={`/detail/${country.cca3.toLowerCase()}`} key={country.cca3}>
                            <CountryCard country={country} />
                        </Link>
                    );
                })}
            </div>
    )
}

export default Home;