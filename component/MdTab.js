import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from '../css/MenuWindow.module.css';
import MenuBox from './layout/MenuBox';
const MDTab = ({ mdTab, beans, reqularmd, seasonmd, giftset }) => {
  if (mdTab == 0) {
    return <Beans beans={beans} />;
  }
  if (mdTab == 1) {
    return <RegularMd reqularmd={reqularmd} />;
  }
  if (mdTab == 2) {
    return <SeasonMd seasonmd={seasonmd} />;
  }
  if (mdTab == 3) {
    return <Giftset giftset={giftset} />;
  }
};
const Beans = ({ beans }) => {
  const [layout, setLayout] = useState(beans.menu && beans.menu);
  const [layoutDel, setLayoutDel] = useState('beans');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox beans={beans} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
const RegularMd = ({ reqularmd }) => {
  const [layout, setLayout] = useState(reqularmd.menu && reqularmd.menu);
  const [layoutDel, setLayoutDel] = useState('reqularmd');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox reqularmd={reqularmd} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
const SeasonMd = ({ seasonmd }) => {
  const [layout, setLayout] = useState(seasonmd.menu && seasonmd.menu);
  const [layoutDel, setLayoutDel] = useState('seasonmd');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox seasonmd={seasonmd} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
const Giftset = ({ giftset }) => {
  const [layout, setLayout] = useState(giftset.menu && giftset.menu);
  const [layoutDel, setLayoutDel] = useState('giftset');
  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox giftset={giftset} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};

export default MDTab;
