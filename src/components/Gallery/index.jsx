import { useState } from 'react';
import Tags from '../Tags/index';
import Cards from './Cards';
import ModalImage from './ModalImage';
import photosJson from './photos.json';

export default function Gallery({
  selectedTag,
  filterPhotos,
  search,
  galleryRef,
  addFavorite,
  removeFavorite,
  checkFavorite,
}) {
  let photos = photosJson.sort((a, b) => (a.titulo > b.titulo ? 1 : -1));

  const tags = ['', ...new Set(photos.map(value => value.tag))];

  const [modal, setModal] = useState({
    isOpen: false,
    item: '',
  });

  const openModal = item => {
    setModal({
      isOpen: true,
      item: item,
    });
  };

  const closeModal = () => {
    setModal({
      ...modal,
      isOpen: false,
    });
  };

  return (
    <>
      <ModalImage
        isOpen={modal.isOpen}
        item={modal.item}
        closeModal={closeModal}
      />
      <div className="w-full sm:w-3/4" ref={galleryRef}>
        <h2 className="text-3xl text-purple">Navegue pela galeria</h2>
        <Tags
          tags={tags}
          selectedTag={selectedTag}
          filterPhotos={tag => filterPhotos(tag)}
        />
        <Cards
          search={search}
          selectedTag={selectedTag}
          itens={photos}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
          checkFavorite={checkFavorite}
          openModal={item => openModal(item)}
        />
      </div>
    </>
  );
}
