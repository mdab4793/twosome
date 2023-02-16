import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import BakeTab from '../component/BakeTab';
//델리탭
const Bake = ({ setIsAdd, sandwich, lunchset, salad }) => {
  let [bakeTab, setBakeTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setBakeTab(0);
            setIsAdd(9);
          }}
        >
          샌드위치
        </button>
        <button
          onClick={() => {
            setBakeTab(1);
            setIsAdd(10);
          }}
        >
          런치세트
        </button>
        <button
          onClick={() => {
            setBakeTab(2);
            setIsAdd(11);
          }}
        >
          샐러드
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <BakeTab
          bakeTab={bakeTab}
          sandwich={sandwich}
          lunchset={lunchset}
          salad={salad}
        />
      </div>
    </body>
  );
};

export default Bake;
