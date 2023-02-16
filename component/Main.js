import Menu from '../component/Menu';
import MenuWindow from '../routes/MenuWindow';
import Header from './layout/Header';
import styles from '../css/Main.module.css';
import { useEffect, useState } from 'react';
const Main = ({
  item,
  setItem,
  bever,
  tea,
  bottle,
  isBackColor,
  setISBackColor,
  ice,
  cake,
  sherbet,
  piece,
  dessert,
  sandwich,
  lunchset,
  salad,
  bread,
  snack,
  productset,
  beans,
  reqularmd,
  seasonmd,
  giftset,
}) => {
  return (
    <body className={styles.container}>
      <Header />
      <Menu />
      <MenuWindow
        item={item}
        setItem={setItem}
        bever={bever}
        tea={tea}
        bottle={bottle}
        isBackColor={isBackColor}
        setISBackColor={setISBackColor}
        ice={ice}
        cake={cake}
        sherbet={sherbet}
        piece={piece}
        dessert={dessert}
        sandwich={sandwich}
        lunchset={lunchset}
        salad={salad}
        bread={bread}
        snack={snack}
        productset={productset}
        beans={beans}
        reqularmd={reqularmd}
        seasonmd={seasonmd}
        giftset={giftset}
      />
    </body>
  );
};

export default Main;
