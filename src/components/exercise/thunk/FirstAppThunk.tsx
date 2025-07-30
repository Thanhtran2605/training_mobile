import PostList from './features/PostList';

import store from './store/store';

import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <PostList />
    </Provider>
  );
}

