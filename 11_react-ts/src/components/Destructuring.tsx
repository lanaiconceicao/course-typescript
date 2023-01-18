import React from 'react';

export interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
  // 8 - Enum
  category: Category
}

export enum Category {
  JS = 'Javascript',
  TS = 'Typescript',
  P = 'Python',
}

function Destructuring ({ title, content, commentsQty, tags,  category }: Props) {
  return (
    <div>
      <p>{title}</p>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {
          tags.map((tag) => (
            <span>#{tag}</span>
          ))
        }
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}

export default Destructuring
