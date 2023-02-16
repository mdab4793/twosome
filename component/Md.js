import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import MdTab from '../component/MdTab';
const Md = ({ setIsAdd, beans, reqularmd, seasonmd, giftset }) => {
  let [mdTab, setMdTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setMdTab(0);
            setIsAdd(15);
          }}
        >
          원두,티 가공상품{' '}
        </button>
        <button
          onClick={() => {
            setMdTab(1);
            setIsAdd(16);
          }}
        >
          상시MD
        </button>
        <button
          onClick={() => {
            setMdTab(2);
            setIsAdd(17);
          }}
        >
          시즌MD
        </button>
        <button
          onClick={() => {
            setMdTab(3);
            setIsAdd(18);
          }}
        >
          MD선물세트
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <MdTab
          mdTab={mdTab}
          beans={beans}
          reqularmd={reqularmd}
          seasonmd={seasonmd}
          giftset={giftset}
        />
      </div>
    </body>
  );
};

export default Md;
