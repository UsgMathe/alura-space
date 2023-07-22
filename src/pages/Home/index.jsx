import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Popular from '@/components/Populares';
import { useRef, useState, useEffect } from 'react';
import { setLocalStorage, getLocalStorage } from '@/services/localStorage';

export default function Home() {
  const [tag, setTag] = useState();
  const [search, setSearch] = useState('');
  const galleryRef = useRef();

  const scrollTo = () => {
    galleryRef?.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const [favorites, setFavorites] = useState(
    getLocalStorage('favorites') ? JSON.parse(getLocalStorage('favorites')) : []
  );

  const addFavorite = item => {
    setFavorites([...favorites, item]);
  };

  const removeFavorite = item => {
    setFavorites(favorites.filter(local => local.id !== item.id));
  };

  const checkFavorite = item => {
    return favorites.find(fav => fav.id == item.id);
  };

  useEffect(() => {
    setLocalStorage('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <Header onChange={value => setSearch(value)} scrollTo={scrollTo} />
      <main className="my-0 mx-6">
        <section className="flex items-center mt-8">
          <Nav />
          <div className="w-full ">
            <Banner />
            <div className="w-full flex mt-20 ">
              <Gallery
                galleryRef={galleryRef}
                search={search}
                selectedTag={tag}
                filterPhotos={value => setTag(value)}
                addFavorite={item => addFavorite(item)}
                removeFavorite={item => removeFavorite(item)}
                checkFavorite={item => checkFavorite(item)}
              />
              <Popular />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
