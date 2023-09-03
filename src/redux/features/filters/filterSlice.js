const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  searchKey: "",
  status: "all",
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeKey: (state, action) => {
      state.searchKey = action.payload?.toLowerCase() || "";
    },
    changeStatus: (state, action) => {
      state.status = action.payload?.toLowerCase() || "";
    },
  },
});

export const { changeKey, changeStatus } = filterSlice.actions;
export default filterSlice.reducer;
