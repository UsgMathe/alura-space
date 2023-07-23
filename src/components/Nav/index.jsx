import icons from './icons.json';
import {
  AiOutlineMenuUnfold as OpenMenu,
  AiOutlineMenuFold as CloseMenu,
} from 'react-icons/ai';
import { useState } from 'react';

export default function Nav() {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      <nav className=" w-[20%] hidden sm:block self-start">
        <ul className="w-full h-72 flex flex-col justify-around z-50">
          {icons.map(icon => {
            return (
              <a key={icon.id} href="/" className="w-full">
                <li className="flex justify-start items-center w-full">
                  <img className="mr-2 h-6 " src={icon.path} alt={icon.alt} />
                  <p className="text-lg text-text hidden sm:block">
                    {icon.link}
                  </p>
                </li>
              </a>
            );
          })}
        </ul>
      </nav>
      <div
        className={`${
          enabled ? 'left-16' : 'left-2'
        } fixed top-24  mt-5 z-50 cursor-pointer transition-all duration-200 block sm:hidden`}
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? (
          <CloseMenu size={35} color={'white'} className="" />
        ) : (
          <OpenMenu size={35} color={'white'} className="" />
        )}
      </div>

      <div
        className={`fixed flex top-24 left-0 z-50 h-full sm:hidden ${
          !enabled && '-translate-x-full'
        } duration-200 transition-transform`}
      >
        <nav className="bg-footerBlue z-40 w-full p-3">
          <ul className="w-full h-72 flex flex-col justify-around ">
            {icons.map(icon => {
              return (
                <a key={icon.id} href="/" className="w-full ">
                  <li className="flex justify-center items-center w-full z-50">
                    <img className="mr-2 h-6 " src={icon.path} alt={icon.alt} />
                    <p className="text-lg text-text hidden sm:block">
                      {icon.link}
                    </p>
                  </li>
                </a>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
