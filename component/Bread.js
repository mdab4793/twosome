import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import BreadTab from '../component/BreadTab';
//빵 탭
const Bread = ({ bread, setIsAdd, isAdd }) => {
  let [breadTab, setBreadTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setBreadTab(0);
            setIsAdd(12);
          }}
        >
          빵
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <BreadTab bread={bread} breadTab={breadTab} isAdd={isAdd} />
      </div>
    </body>
  );
};

export default Bread;
