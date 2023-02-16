import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';
import styled from 'styled-components';
import axios from 'axios';
import MenuBox from './layout/MenuBox';
const CakeTab = ({ cakeTab, cake, piece, dessert }) => {
  if (cakeTab == 0) {
    return <WholeCake cake={cake} />;
  }
  if (cakeTab == 1) {
    return <ShortCake piece={piece} />;
  }
  if (cakeTab == 2) {
    return <Dessert dessert={dessert} />;
  }
};
//홀케이크탭
const WholeCake = ({ cake }) => {
  const [layout, setLayout] = useState(cake.menu && cake.menu);
  const [layoutDel, setLayoutDel] = useState('cake');

  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox cake={cake} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
//조각케이크탭
const ShortCake = ({ piece }) => {
  const [layout, setLayout] = useState(piece.menu && piece.menu);
  const [layoutDel, setLayoutDel] = useState('piece');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox piece={piece} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
//디저트탭
const Dessert = ({ dessert }) => {
  const [layout, setLayout] = useState(dessert.menu && dessert.menu);
  const [layoutDel, setLayoutDel] = useState('dessert');

  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox dessert={dessert} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};

export default CakeTab;
