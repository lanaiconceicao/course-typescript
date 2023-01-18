import React, { useContext } from 'react';

// 11 - Consumindo Context API
import { AppContext } from '../App';

const Context = () => {
  const details = useContext(AppContext);
  return (
    <>
      {details && (
        <div>
          <p>Aqui temos nosso Context value:</p>
          <p>Framework: {details.framework}</p>
          <p>Language: {details.language}</p>
          <p>Projects: {details.projects}</p>
        </div>
      )}
    </>
  );
}

export default Context;