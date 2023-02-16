import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';
import MenuBox from './layout/MenuBox';
const BreadTab = ({ bread, breadTab, isAdd }) => {
  if (breadTab == 0) {
    return <Bread bread={bread} />;
  }
};
const Bread = ({ bread }) => {
  const [layout, setLayout] = useState(bread.menu && bread.menu);
  const [layoutDel, setLayoutDel] = useState('bread');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox bread={bread} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
export default BreadTab;
