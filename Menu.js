import React from 'react'
import {MenuList} from "../helpers/MenuList";
import MenuItem from '../components/Menuitem';
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">System Menu</h1>
        <div className="menuList">
        {MenuList.map((menuItem, key) => (
          <a key={key} href={menuItem.path} target="_blank" rel="noopener noreferrer" className="menuLink">
            <MenuItem image={menuItem.image} name={menuItem.name} />
          </a>
        ))}
        </div>
    </div>
  )
}

export default Menu
