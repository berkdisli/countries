import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

export interface CountryState {
  countries: any[];
  filteredCountries: any[];
  selectedCountry: any;
  filteredRegion: string;
  status: "successful" | "loading" | "failed";
}

const baseURL = "https://restcountries.com/v3.1/all";

export const getAllCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(`${baseURL}`);
    return response.data;
  }
);

export const getFilteredCountries = createAsyncThunk(
  "countries/fetchFilteredCountries",
  async (region: string) => {
    const response = await axios.get(`${baseURL}/region/${region}`);
    return response.data;
  }
);

export const getCountryDetail = createAsyncThunk(
  "countries/fetchCountryDetail",
  async (cca3Code: string) => {
    const response = await axios.get(`${baseURL}/alpha/${cca3Code}`);
    return response.data;
  }
);

const initialState: CountryState = {
  countries: [],
  filteredCountries: [],
  selectedCountry: {},
  filteredRegion: "",
  status: "successful",
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.status = "successful";
        state.countries = action.payload;
        state.filteredCountries = [];
      })
      .addCase(getAllCountries.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getFilteredCountries.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFilteredCountries.fulfilled, (state, action) => {
        state.status = "successful";
        state.filteredCountries = action.payload;
      })
      .addCase(getFilteredCountries.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(getCountryDetail.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCountryDetail.fulfilled, (state, action) => {
        state.status = "successful";
        state.selectedCountry = action.payload?.[0];
      })
      .addCase(getCountryDetail.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default countriesSlice.reducer;

export const allCountries = (state: RootState) => state.countriesR.countries;
export const filteredCountries = (state: RootState) =>
  state.countriesR.filteredCountries;
export const selectedRegion = (state: RootState) =>
  state.countriesR.filteredRegion;
export const status = (state: RootState) => state.countriesR.status;
