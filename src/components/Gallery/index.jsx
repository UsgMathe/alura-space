import Tags from '../Tags/index';
import Cards from './Cards';
import photos from './photos.json';

export default function Gallery({ enabledTag, filterPhotos }) {
  return (
    <>
      <div className="w-3/4">
        <h2 className="text-3xl text-purple">Navegue pela galeria</h2>
        <Tags tag={enabledTag} filterPhotos={tag => filterPhotos(tag)} />
        <Cards tag={enabledTag} itens={photos} />
      </div>
    </>
  );
}
