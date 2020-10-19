import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as selectors from '../../store/favorites/selectors';
import Content from '../../components/Content/Content'
import { loadFavorites } from '../../store/favorites/operations';
import Loader from '../../components/Loader/Loader'

const Favorites = () => {
  const dispatch = useDispatch();
  const favoritesProducts = useSelector(selectors.getFavoritesProducts);
  const isLoading = useSelector(selectors.favoritesLoading);

  useEffect(() => {
      dispatch(loadFavorites(favoritesProducts))
  }, [dispatch, favoritesProducts]);

  if (isLoading) {
    return <Loader />
  }

  return (
    <Content
      header='Your favorite products'
      content={favoritesProducts}
    />
  );
};

export default Favorites;
