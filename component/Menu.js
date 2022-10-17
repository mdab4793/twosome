import styles from '../css/Menu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCount,
  addMin,
  addItem,
  removeItem,
  tumDiscount,
} from '../store.js';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Menu = ({ item }) => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

  //hot,ice 글자색깔 선택 변수
  let [hotColor, setHotColor] = useState();
  let [white, setWhite] = useState();

  const WhiteHandler = () => {
    setWhite(white === 'white' ? 'black' : 'white');
  };
  const HotColorHandler = () => {
    setHotColor(hotColor === 'black' ? '' : 'black');
  };
  //총 매출 합계
  let total = state.cart.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return (
      accumulator +
      state.cart[currentIndex].price * state.cart[currentIndex].count
    );
  },
  0);
  //총 수량 합계
  let countTotal = state.cart.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + state.cart[currentIndex].count;
  },
  0);
  //총 할인 합계
  let disCountTotal = state.cart.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    //if 문처리?
    return total - state.cart[currentIndex].price;
  },
  0);
  let disTotal = state.cart.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    //if 문처리?
    return total - disCountTotal * countTotal;
  },
  0);
  return (
    <body className={styles.container}>
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <td>상품명</td>
            <td>수량</td>
            <td>정가</td>
            <td>할인</td>
            <td>금액</td>
            <td>비고</td>
          </thead>
          <tbody className={styles.mainTbody}>
            {state.cart.map((a, i) => {
              return (
                <tr
                  style={{ background: hotColor, color: white }}
                  key={i}
                  onClick={() => {
                    HotColorHandler();
                    WhiteHandler();
                  }}
                >
                  <td className={styles.product}>
                    {state.cart[i].takeout}
                    {state.cart[i].tem}
                    {state.cart[i].size}
                    {state.cart[i].name}
                  </td>
                  <td>{state.cart[i].count}</td>
                  <td>{state.cart[i].price}</td>
                  <td>{state.cart[i].discount}</td>
                  <td>{state.cart[i].total}</td>
                  <td> {state.cart[i].bean}</td>
                </tr>
              );
            })}
          </tbody>{' '}
        </table>{' '}
        <div className={styles.subTbody}>
          <button
            onClick={() => {
              dispatch(addMin(state.cart.id));
            }}
            className={styles.min}
          >
            -
          </button>
          <button
            onClick={() => {
              dispatch(addCount(state.cart.id));
            }}
            className={styles.plus}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(removeItem(state.cart.id));
            }}
            className={styles.close}
          >
            x
          </button>
          <button className={styles.top}>∧</button>
          <button className={styles.bottom}>∨</button>
        </div>
        <scticon>
          <div className={styles.calBox}>
            <div>신용카드(일반) : 6,100원</div>

            {/* <div className={styles.cal}>신용카드(일반) : 6,100원</div>
            <div className={styles.cal}>신용카드(일반) : 6,100원</div>
            <div className={styles.cal}>신용카드(일반) : 6,100원</div>
            <div className={styles.cal}>신용카드(일반) : 6,100원</div> */}
          </div>
          <div>
            <div className={styles.calQuan}>
              <div className={styles.cal}>총수량 : {countTotal}</div>
              <div className={styles.cal}>총매출액 :{total}원</div>
              <div className={styles.cal}>할인금액 : {disTotal}원</div>
              <div className={styles.cal}>받을금액 : {total}원</div>
              {/* <div className={styles.cal}>받은금액 : 6,100원</div>
              <div className={styles.cal}>거스름돈 : 6,100원</div> */}
            </div>
            <div className={styles.calEmpty}>
              <div className={styles.cal}>뭔지 height: 100px;ㅍ모를 </div>
              <div className={styles.cal}>파란상자</div>
            </div>
            <div>
              <div className={styles.cal}>계산기숫자판 </div>
              <div className={styles.cal}>계산기숫자판</div>
            </div>
            <div>
              <div className={styles.cal}>계산기 </div>
              <div className={styles.cal}>계산기</div>
            </div>
          </div>
        </scticon>
        <div className={styles.sideWrapper}>
          <div
            onClick={() => {
              dispatch(
                addItem({
                  name: '텀블러할인',
                  count: 1,
                  price: -300,
                })
              );
            }}
          >
            텀블러할인
          </div>
          <div>TAKE-OUT(선택)</div>
          <div>모바일쿠폰</div>
          <div>프로모션</div>
          <div>영수증조회</div>
          <div>신용카드</div>
          <div>현금결제</div>
          <div>판매</div>
          <div>할인</div>
          <div>결제</div>
          <div>영업</div>
          <div>관리</div>
        </div>
      </div>
    </body>
  );
};

export default Menu;
