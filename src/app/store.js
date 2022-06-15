import { configureStore } from '@reduxjs/toolkit';

import CocktailReducer from '../features/cocktailsSlice';

export const store = configureStore({
  reducer: {
    cocktail: CocktailReducer,
  },
});
