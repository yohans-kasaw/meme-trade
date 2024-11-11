import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch trading signals from API
export const fetchSignals = createAsyncThunk('signals/fetchSignals', async () => {
  const response = await fetch('/api/trading-signals');
  const data = await response.json();
  console.log(data);
  return data.trading_signals;
});

const signalSlice = createSlice({
  name: 'signals',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addSignal: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSignals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchSignals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addSignal } = signalSlice.actions;

export default signalSlice.reducer;
