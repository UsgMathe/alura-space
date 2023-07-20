import logo from './logo.png';
import search from './search.png';

export default function Header() {
  return (
    <header className="flex justify-between items-center m-6">
      <a href="/">
        <img src={logo} alt="Logo do Alura Space" />
      </a>
      <div className="relative flex justify-between items-center w-1/3 px-3 py-1 z-0 gradient-outline">
        <input
          type="text"
          className="w-4/5 h-8 text-text text-sm bg-transparent outline-none"
          placeholder="O que você procura?"
        />
        <img src={search} alt="Ícone de lupa" className="cursor-pointer" />
      </div>
    </header>
  );
}
