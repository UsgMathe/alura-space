import { useRef } from 'react';

export default function Tags({ tags, selectedTag, filterPhotos }) {
  return (
    <div className="py-6 flex-col justify-between">
      <p className="text-2xl text-text my-2">Busque por tags:</p>
      <ul className="w-full flex-wrap flex flex-row gap-2 items-center tags">
        {tags.map(tag => (
          <li
            key={tag}
            className={`text-text bg-text/30 rounded-xl p-2  relative z-0 px-3 text-center cursor-pointer hover:scale-105 transition-all ${
              tag == selectedTag && 'gradient-outline scale-105'
            }`}
            onClick={() => filterPhotos(tag)}
            value={tag}
          >
            {tag == '' ? 'Todas' : tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
