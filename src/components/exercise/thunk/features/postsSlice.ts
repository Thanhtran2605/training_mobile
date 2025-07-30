import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../type/post';

export const fetchPosts = createAsyncThunk<Post[]>(
  'posts/fetchPosts',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
  },
);

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initState: PostsState = {
  posts: [],
  status: 'idle',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPosts.pending, state => {
      state.status = 'loading';
    }),
      builder.addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      }),
      builder.addCase(fetchPosts.rejected, state => {
        state.status = 'failed';
      });
  },
});


export default postsSlice.reducer;
export const selectAllPosts = (state: {posts : PostsState}) => state.posts.posts;
export const selectStatus = (state: {posts : PostsState}) => state.posts.status;
export const selectPostById = (state: {posts : PostsState}, postId: number) => state.posts.posts.find(post => post.id === postId);
export const selectPostByTitle = (state: {posts : PostsState}, title: string) => state.posts.posts.filter(post => post.title.includes(title));
export const selectPostByBody = (state: {posts : PostsState}, body: string) => state.posts.posts.filter(post => post.body.includes(body));