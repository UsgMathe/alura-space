import { useRef } from 'react';

export default function Tags({ tags, selectedTag, filterPhotos }) {
  return (
    <div className="py-6 flex justify-between">
      <p className="text-2xl text-text ">Busque por tags:</p>
      <ul className="flex gap-2 items-center tags">
        {tags.map(tag => (
          <li
            key={tag}
            className={`text-text bg-text/30 rounded-xl p-2  relative z-0 px-3 text-center cursor-pointer hover:scale-105 transition-all ${
              tag == selectedTag && 'gradient-outline scale-105'
            }`}
            onClick={() => filterPhotos(tag)}
            value={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}
