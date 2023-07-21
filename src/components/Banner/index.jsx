import banner from './banner.png';

export default function Banner() {
  return (
    <>
      <div className={` w-full relative`}>
        <h1 className="absolute z-[1] text-text text-4xl w-[401px] h-[144px] top-[75px] left-[44px]">
          A galeria mais completa de fotos do espaço!
        </h1>
        <img
          src={banner}
          alt="A imagem da terra vista do espaço"
          className="w-full h-[288px] object-cover rounded-2xl"
        />
      </div>
    </>
  );
}
