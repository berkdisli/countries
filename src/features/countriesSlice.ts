import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

export interface CountryState {
  countries: any[];
  filteredCountries: string[];
  selectedCountry: any;
  filteredRegion: string;
  status: "successful" | "loading" | "failed";
  favoriteCountries: string[];
}

const baseURL = "https://restcountries.com/v3.1";

export const getAllCountries = createAsyncThunk(
  "countries/fetchCountries",
  async () => {
    const response = await axios.get(`${baseURL}/all`);
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
  async (name: string) => {
    const response = await axios.get(`${baseURL}/name/${name}`);
    return response.data;
  }
);

const initialState: CountryState = {
  countries: [],
  filteredCountries: [],
  selectedCountry: {},
  filteredRegion: "",
  status: "successful",
  favoriteCountries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    handleFavorites: (state, action) => {
      if (!state.favoriteCountries.includes(action.payload)) {
        state.favoriteCountries.push(action.payload);
      } else {
        state.favoriteCountries = state.favoriteCountries.filter(
          (country) => country !== action.payload
        );
      }
    },
    sortAZ: (state) => {
      state.countries = state.countries.sort((firstCountry, secondCountry) =>
        firstCountry.name.common > secondCountry.name.common
          ? 1
          : firstCountry.name.common < secondCountry.name.common
          ? -1
          : 0
      );
    },
    sortZA: (state) => {
      state.countries = state.countries.sort((firstCountry, secondCountry) =>
        firstCountry.name.common < secondCountry.name.common
          ? 1
          : firstCountry.name.common > secondCountry.name.common
          ? -1
          : 0
      );
    },
  },

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
export const { handleFavorites, sortAZ, sortZA } = countriesSlice.actions;

export const allCountries = (state: RootState) => state.countriesR.countries;
export const filteredCountries = (state: RootState) =>
  state.countriesR.filteredCountries;
export const filteredRegion = (state: RootState) =>
  state.countriesR.filteredRegion;
export const status = (state: RootState) => state.countriesR.status;
export const selectedCountry = (state: RootState) =>
  state.countriesR.selectedCountry;
