import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

import { MainWrapper } from "../components/componentStyles";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

import {
  allCountries,
  filteredCountries,
  getAllCountries,
  sortAZ,
  sortZA,
  status,
} from "../features/countriesSlice";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import Loading from "../pages/Loading";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Home = () => {
  const countries = useAppSelector(allCountries);
  const filtered = useAppSelector(filteredCountries);
  const requestStatus = useAppSelector(status);
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSortingAZ = () => {
    dispatch(sortAZ());
  };

  const handleSortingZA = () => {
    dispatch(sortZA());
  };

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

  useEffect(() => {
    dispatch(getAllCountries());
  }, []);

  return (
    <MainWrapper>
      <div className="home">
        <h1 className="title">Countries</h1>
        <SearchBar
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search..."
        />
        <TableContainer component={Paper}>
          <Table aria-label="body">
            <TableHead>
              <TableRow>
                <TableCell width="29%">Flag</TableCell>
                <TableCell width="12.4%">
                  Name{" "}
                  <AiOutlineDown
                    className="down-up"
                    onClick={handleSortingAZ}
                  ></AiOutlineDown>
                  <AiOutlineUp
                    className="down-up"
                    onClick={handleSortingZA}
                  ></AiOutlineUp>
                </TableCell>
                <TableCell width="12.4%">Population</TableCell>
                <TableCell width="12.4%">Region</TableCell>
                <TableCell width="12.4%">Capital </TableCell>
                <TableCell width="12.4%">Languages</TableCell>
                <TableCell>Favorites</TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
        {requestStatus === "loading" && <Loading />}
        {searchedCountries.length > 0 &&
          searchedCountries.map((country) => {
            return (
              <Link
                to={`/detail/${country.cca3.toLowerCase()}`}
                key={country.cca3}
              >
                <CountryCard country={country} />
              </Link>
            );
          })}
      </div>
    </MainWrapper>
  );
};

export default Home;
