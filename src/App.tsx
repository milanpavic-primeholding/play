import React, { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { RootState } from './redux/store/store';
import { depositMoney, withdrawMoney } from './redux/actions/accountActions';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostPage from './pages/post-page/PostPage';
import ErrorPage from './pages/error-page/ErrorPage';
import PlayPage from './pages/play-page/PlayPage';
import GraphPage from './pages/graph-page/GraphPage';

// import { bindActionCreators } from 'redux';

const App: React.FC = () => {
  const account = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <Router>
      <div className={'App'}>
        <Link to={'/graph'}>Graph</Link>
        <Link to={'/post/1'}>Post</Link>
        <Link to={'/play'}>Play</Link>
        <h1>learn react:{account}</h1>
        <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
        <button onClick={() => dispatch(withdrawMoney(1000))}>WithDraw</button>
      </div>
      <Routes>
        <Route path={'/graph'} element={<GraphPage />} />
        <Route path={'/play'} element={<PlayPage />} />
        <Route path={'/post/:id'} element={<PostPage />} />
        <Route path={'/'} element={<></>} />
        <Route path={'*'} element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
