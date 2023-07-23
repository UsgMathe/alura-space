import banner from './banner.png';

export default function Banner({ isOpen = true }) {
  return (
    <>
      <div
        className={`w-full m-auto rounded-xl ${
          isOpen
            ? 'translate-y-0 relative opacity-100'
            : 'absolute -translate-y-[160%] opacity-0'
        } transition-all duration-700 ease-in-out z-20`}
      >
        <h1 className="absolute z-[1] text-text text-2xl sm:text-4xl w-full h-[144px] bottom-0 p-5 backdrop-brightness-50 self-center rounded-b-xl">
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
