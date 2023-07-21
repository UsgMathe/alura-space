import Card from '../../Card';
import {
  setLocalStorage,
  getLocalStorage,
} from '../../../services/localStorage';
import { useEffect, useState } from 'react';

export default function Cards({ itens, selectedTag, search }) {
  const [favorites, setFavorites] = useState(
    getLocalStorage('favorites') ? JSON.parse(getLocalStorage('favorites')) : []
  );

  const addFavorite = item => {
    setFavorites([...favorites, item]);

    // let localFavorites = getLocalStorage('favorites');
    // if (localFavorites) {
    //   console.log(localFavorites);
    //   setLocalStorage('favorites', [[JSON.stringify(item)]]);
    // } else {
    //   setLocalStorage('favorites', [[JSON.stringify(item)]]);
    // }
  };

  useEffect(() => {
    setLocalStorage('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const removeFavorite = item => {
    let localFavorites = getLocalStorage('favorites');

    setLocalStorage('favorites', [...localFavorites, item]);
  };

  return (
    <ul className="flex justify-center items-start flex-wrap">
      {search.length <= 0
        ? selectedTag
          ? itens
              .filter(
                item => item.tag.toLowerCase() == selectedTag.toLowerCase()
              )
              .map(filterItem => {
                return (
                  <Card
                    key={filterItem.id}
                    item={filterItem}
                    addFavorite={item => addFavorite(item)}
                    removeFavorite={item => removeFavorite(item)}
                    isFavorite={favorites.includes(filterItem)}
                  />
                );
              })
          : itens.map(filterItem => {
              return (
                <Card
                  key={filterItem.id}
                  item={filterItem}
                  addFavorite={item => addFavorite(item)}
                  removeFavorite={item => removeFavorite(item)}
                  isFavorite={favorites.includes(itens)}
                />
              );
            })
        : itens
            .filter(
              item =>
                item.tag.toLowerCase().includes(search.toLowerCase()) ||
                item.titulo.toLowerCase().includes(search.toLowerCase()) ||
                item.creditos.toLowerCase().includes(search.toLowerCase())
            )
            .map(filterItem => {
              return (
                <Card
                  key={filterItem.id}
                  item={filterItem}
                  addFavorite={item => addFavorite(item)}
                  removeFavorite={item => removeFavorite(item)}
                  isFavorite={favorites.includes(filterItem)}
                />
              );
            })}
    </ul>
  );
}
