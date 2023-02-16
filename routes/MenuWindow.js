import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import Coffee from '../component/Coffee';
import Ice from '../component/Ice';
import Cake from '../component/Cake';
import Bake from '../component/Bake';
import Bread from '../component/Bread';
import Product from '../component/Product';
import Md from '../component/Md';
import NewItem from '../component/NewItem';
//전체 메뉴 탭
const MenuWindow = ({
  item,
  bever,
  tea,
  bottle,
  isAdd,
  setIsAdd,
  isBackColor,
  setISBackColor,
  ice,
  cake,
  sherbet,
  piece,
  dessert,
  sandwich,
  deleteHandler,
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
  let [tab, setTab] = useState(0);

  return (
    <body className={styles.mainContainer}>
      <section className={styles.mainWrapper}>
        <button
          onClick={() => {
            setTab(0);
            setIsAdd(0);
          }}
        >
          커피&음료
        </button>
        <button
          onClick={() => {
            setTab(1);
            setIsAdd(4);
          }}
        >
          아이스크림&빙수
        </button>
        <button
          onClick={() => {
            setTab(2);
            setIsAdd(6);
          }}
        >
          케이크
        </button>
        <button
          onClick={() => {
            setTab(3);
            setIsAdd(9);
          }}
        >
          델리
        </button>
        <button
          onClick={() => {
            setTab(4);
            setIsAdd(12);
          }}
        >
          빵
        </button>
        <button
          onClick={() => {
            setTab(5);
            setIsAdd(13);
          }}
        >
          상품
        </button>
        <button
          onClick={() => {
            setTab(6);
            setIsAdd(15);
          }}
        >
          MD
        </button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <MenuTab
          tab={tab}
          item={item}
          bever={bever}
          tea={tea}
          bottle={bottle}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
          isBackColor={isBackColor}
          setISBackColor={setISBackColor}
          ice={ice}
          cake={cake}
          sherbet={sherbet}
          piece={piece}
          dessert={dessert}
          sandwich={sandwich}
          deleteHandler={deleteHandler}
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
      </div>
    </body>
  );
};

const MenuTab = ({
  tab,
  item,
  bever,
  tea,
  bottle,
  isAdd,
  setIsAdd,
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
  if (tab == 0) {
    return (
      <Coffee
        item={item}
        bever={bever}
        tea={tea}
        bottle={bottle}
        setIsAdd={setIsAdd}
        isBackColor={isBackColor}
        setISBackColor={setISBackColor}
      />
    );
  }
  if (tab == 1) {
    return (
      <Ice
        ice={ice}
        setIsAdd={setIsAdd}
        isBackColor={isBackColor}
        setISBackColor={setISBackColor}
        sherbet={sherbet}
      />
    );
  }
  if (tab == 2) {
    return (
      <Cake setIsAdd={setIsAdd} cake={cake} piece={piece} dessert={dessert} />
    );
  }
  if (tab == 3) {
    return (
      <Bake
        setIsAdd={setIsAdd}
        sandwich={sandwich}
        lunchset={lunchset}
        salad={salad}
      />
    );
  }
  if (tab == 4) {
    return <Bread bread={bread} setIsAdd={setIsAdd} />;
  }
  if (tab == 5) {
    return (
      <Product snack={snack} productset={productset} setIsAdd={setIsAdd} />
    );
  }
  if (tab == 6) {
    return (
      <Md
        beans={beans}
        reqularmd={reqularmd}
        seasonmd={seasonmd}
        giftset={giftset}
        setIsAdd={setIsAdd}
      />
    );
  }
};

export default MenuWindow;
