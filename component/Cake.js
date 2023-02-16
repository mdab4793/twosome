import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import CakeTab from './CakeTab';

//케이크메뉴
const Cake = ({ isAdd, cake, setIsAdd, piece, dessert }) => {
  let [cakeTab, setCakeTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setCakeTab(0);
            setIsAdd(6);
          }}
        >
          홀케이크
        </button>
        <button
          onClick={() => {
            setCakeTab(1);
            setIsAdd(7);
          }}
        >
          쇼트케이크
        </button>
        <button
          onClick={() => {
            setCakeTab(2);
            setIsAdd(8);
          }}
        >
          디저트
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <CakeTab
          cakeTab={cakeTab}
          cake={cake}
          piece={piece}
          dessert={dessert}
        />
        {/* isAdd={isAdd}
          setIsAdd={setIsAdd} */}
      </div>
    </body>
  );
};

export default Cake;
