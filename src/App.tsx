import React, { useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { RootState } from './redux/store/store';
import { depositMoney, withdrawMoney } from './redux/actions/accountActions';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PostPage from './pages/post-page/PostPage';
import ErrorPage from './pages/post-page/error-page/ErrorPage';
// import { bindActionCreators } from 'redux';

const App = () => {
  const account = useSelector((state: RootState) => state.account);
  const dispatch = useDispatch();
  const store = useStore();

  useEffect(() => {
    const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));

    return () => {
      unsubscribe();
    };
  }, [store]);

  return (
    <Router>
      <div className="App">
        <Link to='/post/1'>Post</Link>
        <h1>{account}</h1>
        <button onClick={() => dispatch(depositMoney(1000))}>Deposit</button>
        <button onClick={() => dispatch(withdrawMoney(1000))}>WithDraw</button>
      </div>
      <Routes>
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/" element={<></>} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
