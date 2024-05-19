import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import * as userApi from "@api/user.api";

interface WatchlistState {
  data: IWatchlist | null;
  isPending: boolean;
  error: string | null;
}

const initialState: WatchlistState = {
  data: null,
  isPending: false,
  error: null,
};

export const watchlistSlice = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    setWatchlist(state, action: PayloadAction<IWatchlist>) {
      state.data = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isPending = action.payload;
    },
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    clearWatchlist(state) {
      state.data = null;
    },
  },
  extraReducers(builder) {
    builder.addCase(userApi.addToWatchlist.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(userApi.removeFromWatchlist.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setWatchlist, setLoading, setError, clearWatchlist } =
  watchlistSlice.actions;

export default watchlistSlice.reducer;
