import Button from '../Button';
import photos from './popularPhotos.json';

export default function Popular() {
  return (
    <aside className="flex flex-col w-full sm:w-1/5 mx-2 ">
      <h2 className="text-purple text-center text-3xl mt-16 mb-8">Populares</h2>
      <ul className="flex flex-col justify-between gap-4">
        {photos.map(photo => {
          return (
            <li key={photo.id} className="p-5 sm:p-2">
              <img
                className="rounded-[20px] cursor-pointer hover:scale-[103%]
        transition-all duration-200 w-1/2 sm:w-full m-auto shadow-lg"
                src={photo.path}
                alt={photo.alt}
              />
            </li>
          );
        })}
      </ul>

      <Button>Ver mais</Button>
    </aside>
  );
}
