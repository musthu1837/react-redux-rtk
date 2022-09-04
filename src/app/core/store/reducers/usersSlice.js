import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import mockUsersData from '../../../mock-data/users.json';

const initialState = {
  users: [],
  loading: false,
  search: '',
}


export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data
  }
);


const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // fetchUsers(state, action) {
    //   state.users = mockUsersData
    // },
    fetchByUserId(state, action) {
      state.search = action.payload
    }

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    }).addCase(fetchUsers.pending, (state, action) => {
      state.users = action.payload;
      state.loading = true;
    }).addCase(fetchUsers.rejected, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    })
  }
})

export const { fetchByUserId } = usersSlice.actions
export default usersSlice.reducer;