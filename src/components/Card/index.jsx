import { CgExpand as Expand } from 'react-icons/cg';

import {
  AiOutlineHeart as FavoriteOff,
  AiFillHeart as FavoriteOn,
} from 'react-icons/ai';
import { useState } from 'react';
export default function Card({
  item,
  isFavorite,
  addFavorite,
  removeFavorite,
  openModal,
}) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handleChangeFavorite = () => {
    setFavorite(!favorite);

    if (isFavorite) {
      removeFavorite(item);
    } else {
      addFavorite(item);
    }
  };

  return (
    <li
      key={item.id}
      className="w-[285px] h-[280px] shadow-2xl rounded-[20px] m-2 text-[#fff] scale-100 transition-all duration-200 cursor-pointer hover:scale-[102%] hover:shadow-darkBlue"
    >
      <img
        className="w-full h-2/4 object-cover rounded-t-[20px]"
        src={item.imagem}
        alt={item.titulo}
      />
      <div className="py-2  w-full">
        <p className="px-4 text-xl font-semibold ">{item.titulo}</p>
        <div className="px-4 pb-2 text-lg font-normal ">
          <p>{item.creditos}</p>
          <span className="absolute right-2 bottom-3 flex items-center gap-1">
            {favorite ? (
              <>
                <FavoriteOn
                  size={30}
                  className="text-pink transition-all"
                  onClick={handleChangeFavorite}
                />
              </>
            ) : (
              <FavoriteOff
                size={28}
                className="hover:text-pink transition-all"
                onClick={handleChangeFavorite}
              />
            )}

            <Expand
              size={33}
              className="hover:text-pink transition-all"
              onClick={() => openModal(item)}
            />
          </span>
        </div>
      </div>
    </li>
  );
}
