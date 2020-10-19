import React, { useEffect } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes'
import './Container.scss';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from './store/products/operations';
import { productsLoading } from './store/products/selectors';
import Loader from './components/Loader/Loader'

const App = () =>{
  const dispatch = useDispatch();
  const isLoading = useSelector(productsLoading);

  useEffect(() => {
    dispatch(loadProducts())
  }, [dispatch])

  if (isLoading) {
      return <Loader />
  }
  
  return(
    <div className='App'>
      <Header />
      <AppRoutes />
      <Footer />     
    </div>
  );
}
export default App;


