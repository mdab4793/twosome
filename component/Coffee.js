import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import CoffeeTab from '../component/CoffeeTab';
import NewItem from './NewItem';
//커피,음료메뉴
const Coffee = ({
  item,
  bever,
  tea,
  bottle,
  isAdd,
  setIsAdd,
  isBackColor,
  setISBackColor,
}) => {
  let [coffeeTab, setCoffeeTab] = useState(0);

  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setCoffeeTab(0);
            setIsAdd(0);
          }}
        >
          에스프레소 베리에이션
        </button>
        <button
          onClick={() => {
            setCoffeeTab(1);
            setIsAdd(1);
          }}
        >
          음료
        </button>
        <button
          onClick={() => {
            setCoffeeTab(2);
            setIsAdd(2);
          }}
        >
          티 베리에이션
        </button>
        <button
          onClick={() => {
            setCoffeeTab(3);
            setIsAdd(3);
          }}
        >
          병음료
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <CoffeeTab
          coffeeTab={coffeeTab}
          item={item}
          bever={bever}
          tea={tea}
          bottle={bottle}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
          isBackColor={isBackColor}
          setISBackColor={setISBackColor}
        />
      </div>
    </body>
  );
};

export default Coffee;
