import { useState } from 'react';
import Card from '../../Card';

export default function Cards({ itens, tag = 'estrelas' }) {
  const a = 'aaa';
  a.toLowerCase();
  return (
    <ul className="flex justify-center items-start flex-wrap">
      {itens
        .filter(item => item.tag.toLowerCase() == tag.toLowerCase())
        .map(filterItem => {
          return <Card key={filterItem.id} item={filterItem} />;
        })}
    </ul>
  );
}
