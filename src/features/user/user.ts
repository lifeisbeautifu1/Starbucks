import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
  user: null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default userSlice.reducer;