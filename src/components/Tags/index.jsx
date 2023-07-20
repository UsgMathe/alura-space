export default function Tags({ filterPhotos }) {
  const tags = ['Estrelas', 'Galáxias', 'Lua', 'Planeta'];

  return (
    <div className="py-6 flex justify-between">
      <p className="text-2xl text-text ">Busque por tags:</p>
      <ul className="flex gap-2 items-center tags">
        {tags.map(tag => (
          <li
            className="text-text bg-text/30 rounded-xl p-2  relative z-0 px-3 text-center cursor-pointer hover:scale-105 transition-all"
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
