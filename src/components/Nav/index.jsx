import './index.css';
import icons from './icons.json';

export default function Nav() {
  return (
    <nav className="menu w-[18%] self-start">
      <ul className="px-2 m-0 h-72 flex flex-col justify-around">
        {icons.map(icon => {
          return (
            <li key={icon.id} className="item">
              <img className="menu-img" src={icon.path} alt={icon.alt} />
              <a href="/">{icon.link}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
