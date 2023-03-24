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
import { Footer } from "../layouts";

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
                <TableCell width="12%"><p className="flag-cell">Flag</p></TableCell>
                <TableCell width="13%">
                  <p className="cells">Name{" "}
                  <AiOutlineDown
                    className="down-up"
                    onClick={handleSortingAZ}
                  ></AiOutlineDown>
                  <AiOutlineUp
                    className="down-up"
                    onClick={handleSortingZA}
                  ></AiOutlineUp></p>
                </TableCell>
                <TableCell width="10%"><p className="cells">Population</p></TableCell>
                <TableCell width="10%"><p className="cells">Region</p></TableCell>
                <TableCell width="9%"><p className="cells">Capital</p> </TableCell>
                <TableCell width="10.3%"><p className="cells">Languages</p></TableCell>
                <TableCell width="7%"><p className="cells">Favorites</p></TableCell>
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
      <Footer></Footer>
    </MainWrapper>
  );
};

export default Home;