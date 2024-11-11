import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action to fetch alarms from API
export const fetchAlarms = createAsyncThunk('alarms/fetchAlarms', async () => {
  const response = await fetch('/api/user-alarms');
  const data = await response.json();
  console.log(data);
  return data.alarms;
});

const alarmSlice = createSlice({
  name: 'alarms',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addAlarm: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlarms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAlarms.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchAlarms.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addAlarm } = alarmSlice.actions;

export default alarmSlice.reducer;
