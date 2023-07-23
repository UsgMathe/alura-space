import Card from '@/components/Card';

export default function Cards({
  itens,
  selectedTag,
  search,
  addFavorite,
  removeFavorite,
  checkFavorite,
  openModal,
}) {
  return (
    <ul className="flex justify-center items-start flex-wrap">
      {search.length <= 0
        ? selectedTag
          ? itens
              .filter(
                item => item.tag.toLowerCase() == selectedTag.toLowerCase()
              )
              .map(filterItem => {
                return (
                  <Card
                    key={filterItem.id}
                    item={filterItem}
                    addFavorite={item => addFavorite(item)}
                    removeFavorite={item => removeFavorite(item)}
                    isFavorite={checkFavorite(filterItem)}
                    openModal={openModal}
                  />
                );
              })
          : itens.map(filterItem => {
              return (
                <Card
                  key={filterItem.id}
                  item={filterItem}
                  addFavorite={item => addFavorite(item)}
                  removeFavorite={item => removeFavorite(item)}
                  isFavorite={checkFavorite(filterItem)}
                  openModal={openModal}
                />
              );
            })
        : itens
            .filter(
              item =>
                item.tag.toLowerCase().includes(search.toLowerCase()) ||
                item.titulo.toLowerCase().includes(search.toLowerCase()) ||
                item.creditos.toLowerCase().includes(search.toLowerCase())
            )
            .map(filterItem => {
              return (
                <Card
                  key={filterItem.id}
                  item={filterItem}
                  addFavorite={item => addFavorite(item)}
                  removeFavorite={item => removeFavorite(item)}
                  isFavorite={checkFavorite(filterItem)}
                  openModal={openModal}
                />
              );
            })}
    </ul>
  );
}
