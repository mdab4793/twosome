import { useState } from 'react';
import styles from '../css/MenuWindow.module.css';
import MenuBox from './layout/MenuBox';
const BakeTab = ({ bakeTab, sandwich, lunchset, salad }) => {
  if (bakeTab == 0) {
    return <Sandwich sandwich={sandwich} />;
  }
  if (bakeTab == 1) {
    return <Lunchset lunchset={lunchset} />;
  }
  if (bakeTab == 2) {
    return <Salad salad={salad} />;
  }
};
const Sandwich = ({ sandwich }) => {
  const [layout, setLayout] = useState(sandwich.menu && sandwich.menu);
  const [layoutDel, setLayoutDel] = useState('sandwich');

  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox sandwich={sandwich} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
const Lunchset = ({ lunchset }) => {
  const [layout, setLayout] = useState(lunchset.menu && lunchset.menu);
  const [layoutDel, setLayoutDel] = useState('lunchset');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox lunchset={lunchset} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
const Salad = ({ salad }) => {
  const [layout, setLayout] = useState(salad.menu && salad.menu);
  const [layoutDel, setLayoutDel] = useState('salad');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox salad={salad} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};

export default BakeTab;
