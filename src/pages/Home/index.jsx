import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Popular from '@/components/Populares';
import { useState } from 'react';

export default function Home() {
  const [tag, setTag] = useState('Lua');
  return (
    <>
      <Header />
      <main className="my-0 mx-6">
        <section className="flex items-center mt-8">
          <Nav />
          <div className="w-full">
            <Banner />
            <div className="w-full flex mt-20">
              <Gallery enabledTag={tag} filterPhotos={value => setTag(value)} />
              <Popular />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
