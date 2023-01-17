import React from 'react';

export interface Props {
  title: string
  content: string
  commentsQty: number
  tags: string[]
}

function Destructuring ({ title, content, commentsQty, tags }: Props) {
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
    </div>
  );
}

export default Destructuring
