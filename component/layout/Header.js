import styles from '/Users/zio/Desktop/node/cafe-pos/src/css/Header.module.css';

const Header = () => {
  return (
    <body>
      <nav className={styles.navbar}>
        <div className={styles.mainContainer}>
          <ul className={styles.mainWrapper}>
            <li className={styles.deli}>배달</li>
            <li className={styles.order}>어썸오더</li>
          </ul>
        </div>
        <div className={styles.subContainer}>
          <ul className={styles.subWrapper}>
            <li className={styles.branch}>매장명:어썸플레이스본사</li>
            <li className={styles.time}>영업시간:22년02월22일(월)22:22</li>
            <li className={styles.bill}>영수증번호:00101</li>
            <li className={styles.pos}>POS번호:01</li>
            <li className={styles.version}>버전:V1.0.4.4</li>
          </ul>
        </div>
        <div className={styles.thirdContainer}>
          <ul className={styles.thirdWrapper}>
            <li className={styles.cal}>계산기</li>
            <li className={styles.notice}>긴급공지</li>
            <li className={styles.manager}>담당장</li>
            <li className={styles.callCenter}>콜센터</li>
            <li className={styles.edu}>교육자료</li>
            <li className={styles.min}>-</li>
            <li className={styles.close}> X</li>
          </ul>
        </div>
      </nav>
    </body>
  );
};

export default Header;
