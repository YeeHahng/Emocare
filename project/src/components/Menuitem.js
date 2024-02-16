import React from 'react';
import { useNavigate } from 'react-router-dom';

function Menuitem({ image, name, path }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div className="menuItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
    </div>
  );
}

export default Menuitem;
