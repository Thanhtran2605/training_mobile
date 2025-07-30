import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from '../service/userService';
import { User } from '../types/UserParam';
export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  getUsers,
);

export const fetchUserById = createAsyncThunk<User, number>(
  'users/fetchUserById',
  async (id: number) => await getUserById(id),
);

export const addUser = createAsyncThunk<User, Partial<User>>(
  'users/addUser',
  async (user: Partial<User>) => await createUser(user),
);

export const editUser = createAsyncThunk<
  User,
  { id: number; user: Partial<User> }
>('users/editUser', async ({ id, user }) => await updateUser(id, user));

export const deleteByUserId = createAsyncThunk<void, number>(
  'users/deleteUser',
  async (id: number) => {
    await deleteUser(id);
  },
);

interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initState: UsersState = {
  users: [],
  status: 'idle',
};

const usersSlice = createSlice({
  name: 'users',
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, state => {
      state.status = 'loading';
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      }),
      builder.addCase(fetchUsers.rejected, state => {
        state.status = 'failed';
      });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(editUser.fulfilled, (state, action) => {
      const index = state.users.findIndex(
        user => user.id === action.payload.id,
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      const index = state.users.findIndex(
        user => user.id === action.payload.id,
      );
      if (index === -1) {
        state.users.push(action.payload);
      } else {
        state.users[index] = action.payload;
      }
    });
    builder.addCase(deleteByUserId.fulfilled, (state, action) => {
      state.users = state.users.filter(user => user.id !== action.meta.arg);
    });
  },
});

export default usersSlice.reducer;
export const selectAllUsers = (state: { users: UsersState }) =>
  state.users.users;
export const selectStatus = (state: { users: UsersState }) =>
  state.users.status;
export const selectUserById = (state: { users: UsersState }, userId: number) =>
  state.users.users.find(user => user.id === userId);
export const selectUserByName = (state: { users: UsersState }, name: string) =>
  state.users.users.filter(user => user.name.includes(name));
