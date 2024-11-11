import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch tokens from API
export const fetchTokens = createAsyncThunk('tokens/fetchTokens', async () => {
  const response = await fetch('/api/user-tokens');
  const data = await response.json();
  console.log(data)
  return data.tokens;
});

const tokenSlice = createSlice({
  name: 'tokens',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addToken: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTokens.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTokens.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTokens.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addToken } = tokenSlice.actions;

export default tokenSlice.reducer;
