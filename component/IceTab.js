import { useState } from 'react';
import styles from '../css/MenuWindow.module.css';

import MenuBox from './layout/MenuBox';
const IceTab = ({
  iceTab,
  ice,
  isAdd,
  isBackColor,
  setISBackColor,
  sherbet,
}) => {
  if (iceTab == 0) {
    return (
      <IceMenu
        ice={ice}
        iceTab={iceTab}
        isAdd={isAdd}
        isBackColor={isBackColor}
        setISBackColor={setISBackColor}
      />
    );
  }
  if (iceTab == 1) {
    return <SherbetMenu sherbet={sherbet} />;
  }
};
//아이스크랩메뉴탭
const IceMenu = ({ ice }) => {
  const [layout, setLayout] = useState(ice.menu && ice.menu);
  const [layoutDel, setLayoutDel] = useState('ice');

  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox ice={ice} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};
//빙수메뉴탭
const SherbetMenu = ({ sherbet }) => {
  const [layout, setLayout] = useState(sherbet.menu && sherbet.menu);
  const [layoutDel, setLayoutDel] = useState('sherbet');

  return (
    <body className={styles.menuWindowContainer}>
      <MenuBox sherbet={sherbet} layout={layout} layoutDel={layoutDel} />
    </body>
  );
};

export default IceTab;
