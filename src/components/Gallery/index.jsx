import Tags from '../Tags/index';
import Cards from './Cards';
import photos from './photos.json';

export default function Gallery({
  selectedTag,
  filterPhotos,
  search,
  galleryRef,
  addFavorite,
  removeFavorite,
  checkFavorite,
}) {
  const tags = [...new Set(photos.map(value => value.tag))];

  return (
    <div className="w-3/4" ref={galleryRef}>
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
      />
    </div>
  );
}
