import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  email: string;
  name: string;
  authorizedUserData: object | null;
}

const initialState: UserState = {
  name: "test",
  email: "test@gmail.com",
  authorizedUserData: null,
} as const;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.name>
    ) => {
      state.name = action.payload;
    },
    setEmail: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.email>
    ) => {
      state.email = action.payload;
    },
    setAuthorized: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.authorizedUserData>
    ) => {
      state.authorizedUserData = action.payload;
    },
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setName, setEmail, setAuthorized } = userSlice.actions;

export default userSlice.reducer;
