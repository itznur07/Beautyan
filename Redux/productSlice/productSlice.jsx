const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
  error: "",
};

const productSlice = createSlice({
  name: products,
  initialState,
  reducers: {},
  extraReducers: {},
});

export default productSlice.reducer;
