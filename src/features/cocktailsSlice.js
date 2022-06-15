import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCocktails = createAsyncThunk(
  'cocktails/fetchCocktails',
  async () => {
    return fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
    ).then((res) => res.json());
  }
);

export const cocktailSlice = createSlice({
  name: 'cocktails',
  initialState: {
    cocktails: [],
    cocktail: [],
    loading: false,
    error: null,
  },

  extraReducers: {
    [fetchCocktails.pending]: (state) => {
      state.loading = true;
    },

    [fetchCocktails.fulfilled]: (state, action) => {
      state.loading = false;
      state.cocktails = action.payload.drinks;
    },

    [fetchCocktails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default cocktailSlice.reducer;
