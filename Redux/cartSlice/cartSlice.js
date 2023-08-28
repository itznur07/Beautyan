const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: "",
};

const cartSlice = createSlice({
  name: carts,
  initialState,
  reducers: {},
  extraReducers: {},
});

export default cartSlice.reducer;
