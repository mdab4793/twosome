import Header from './Header';
import Menu from './Menu';
import MenuWindow from './MenuWindow';
import MenuItems from './MenuItems';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import MenuPopup from './MenuPopup';
const Main = ({ item, popup }) => {
  return (
    <body>
      <div>
        <Header />
        <Menu />
        <MenuWindow item={item} />
      </div>
    </body>
  );
};

export default Main;
