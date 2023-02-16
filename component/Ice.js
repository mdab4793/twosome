import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/MenuWindow.module.css';
import IceTab from './IceTab';

//아이스크림,빙수탭
const Ice = ({
  item,
  ice,
  bever,
  tea,
  bottle,
  isAdd,
  setIsAdd,
  isBackColor,
  setISBackColor,
  sherbet,
}) => {
  let [iceTab, setIceTab] = useState(0);
  return (
    <body>
      <section className={styles.subWrapper}>
        <button
          onClick={() => {
            setIceTab(0);
            setIsAdd(4);
          }}
        >
          아이스크림
        </button>
        <button
          onClick={() => {
            setIceTab(1);
            setIsAdd(5);
          }}
        >
          빙수(시즌종료)
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button>왼쪽</button>
        <button>오른쪽</button>
      </section>
      <div>
        <IceTab
          iceTab={iceTab}
          ice={ice}
          isAdd={isAdd}
          setIsAdd={setIsAdd}
          isBackColor={isBackColor}
          setISBackColor={setISBackColor}
          sherbet={sherbet}
        />
      </div>
    </body>
  );
};
export default Ice;
