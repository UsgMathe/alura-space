import logo from './logo.png';
import search from './search.png';

export default function Header({ onChange, scrollTo }) {
  const handelKeyDown = event => {
    if (event.key === 'Enter') {
      scrollTo();
    }
  };

  return (
    <header
      className={`fixed sm:relative top-0 left-0  backdrop-blur-sm bg-footerBlue w-full flex justify-between items-center p-4 z-50`}
    >
      <a href="/">
        <img src={logo} alt="Logo do Alura Space" />
      </a>
      <div className=" relative flex justify-between items-center w-1/3 px-3 py-1 z-0 gradient-outline">
        <input
          type="text"
          className=" w-4/5 h-8 text-text text-sm bg-transparent outline-none"
          placeholder="O que você procura?"
          onChange={event => onChange(event.target.value)}
          onKeyDown={handelKeyDown}
        />
        <img
          src={search}
          alt="Ícone de lupa"
          className="cursor-pointer"
          onClick={scrollTo}
        />
      </div>
    </header>
  );
}
