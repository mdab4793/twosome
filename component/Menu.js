import styles from '../css/Menu.module.css';
import { useDispatch, useSelector } from 'react-redux';

import {
  addCount,
  addMin,
  addItem,
  removeItem,
  tumDiscount,
} from '../store.js';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Menu = ({ item }) => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  const navigate = useNavigate();
  // let [click, setClick] = useState([]);
  // const Clickhandler = () => {
  //   for (let i = 0; i < 200; i++) {
  //     setClick([...click, i]);
  //   }
  // };

  let [tum] = useState(-300);
  let [tumCount, setTumCount] = useState(1);

  //신용카드 팝업
  //https://velog.io/@sparrowscout/react
  //모달창 부모컴포넌트모달띄우고 자식컴포넌트에서 닫는법  참고(부모컴포넌트에서 자식컴포넌트로 함수전송)
  const [credit, setCredit] = useState(false);

  const CreditPopup = () => {
    setCredit(true);
  };
  const CreditClose = () => {
    setCredit(false);
  };
  //관리창 팝업
  const [manage, setManage] = useState(false);

  const managePopup = () => {
    setManage(true);
  };
  const manageClose = () => {
    setManage(false);
  };

  //hot,ice 글자색깔 선택 변수

  let [white, setWhite] = useState();
  let [hotColor, setHotColor] = useState();
  const WhiteHandler = (i) => {
    setWhite(white === 'white' ? 'black' : 'white');
  };
  const WhiteDelHandler = (i) => {
    setWhite(white === 'black');
  };
  const HotColorHandler = () => {
    setHotColor(hotColor === 'black' ? '' : 'black');
  };
  const HotDelColorHandler = () => {
    setHotColor(hotColor === '');
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
  let disTotal = state.cart.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return accumulator + state.cart[currentIndex].count * tum;
  },
  0);
  let discountTotal = state.cart.reduce(function (
    accumulator,
    currentValue,
    currentIndex,
    array
  ) {
    return state.cart[currentIndex].count * disTotal;
  },
  0);
  return (
    <body className={styles.wrapper}>
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
              <tr>
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
        </tbody>
      </table>
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
      <scticon className={styles.section}>
        <div className={styles.calBox}>
          <span></span> <span></span>
        </div>
        <div>
          <div className={styles.calQuan}>
            <div className={styles.cal}>
              <span className={styles.calTotal}>총수량 </span>
              <span className={styles.calCount}>{countTotal}</span>
            </div>

            <div className={styles.cal}>
              <span className={styles.calTotal}>총매출액 </span>
              <span> {total}</span>
            </div>
            {/* <div className={styles.cal}>
              <span className={styles.calDis}> 할인금액 </span>
              <span> {discountTotal}</span>
            </div> */}
            <div className={styles.cal}>
              {/* <span> 받을금액 </span>
              <span>{total}</span> */}
            </div>
            <div className={styles.cal}>
              {/* <span>받은금액 </span> <span> {total}</span> */}
            </div>
            <div className={styles.calChange}>
              {/* <span>거스름돈 </span> <span> 0</span> */}
            </div>
          </div>
          <div className={styles.calEmpty}>
            <div></div>
            <div></div>
          </div>
          <div className={styles.numpad}>
            <input className={styles.display} id='result' type='text'></input>
            <div class={styles.numberWrapper}>
              <div>
                {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '00', '초기화'].map((i) => (
                  <button type='button' onClick={() => {}}>
                    {i}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </scticon>
      <div>
        <div className={styles.sideWrapper}>
          <button
            className={styles.sideUse}
            onClick={() => {
              dispatch(
                addItem({
                  name: '텀블러할인',
                  count: 1,
                  discount: -300,
                  price: -300,
                })
              );
            }}
          >
            텀블러할인
          </button>
          <button
            className={styles.sideUse}
            onClick={() => {
              dispatch(
                addItem({
                  name: 'Take-Out',
                  count: 1,
                  price: 0,
                })
              );
            }}
          >
            TAKE-OUT(선택)
          </button>
          <button>모바일쿠폰</button>
          <button>프로모션</button>
          <button>영수증조회</button>
          <button
            className={styles.sideUse}
            onClick={() => {
              CreditPopup();
            }}
          >
            신용카드
          </button>
          <button>현금결제</button>
          <button>판매</button>
          <button>할인</button>
          <button>결제</button>
          <button>영업</button>
          <button
            className={styles.sideUse}
            onClick={() => {
              navigate('/menu');
            }}
          >
            관리창
          </button>
        </div>

        {credit == true ? (
          <CreditCard CreditClose={CreditClose} total={total} />
        ) : null}
      </div>
    </body>
  );
};

//신용카드버튼 모달창
const CreditCard = (props) => {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let [modal, setModal] = useState(false);
  const ModalOpen = () => {
    setModal(true);
  };
  const ModalClose = () => {
    setModal(false);
  };
  return (
    //https://joylee-developer.tistory.com/184
    //modal창 배경 어둡게 만드는것 참고
    <body className={styles.cardBack}>
      <div className={styles.card}>
        <header>
          <h1>신용카드</h1>{' '}
          <h1
            className={styles.cardClose}
            onClick={() => {
              props.CreditClose();
            }}
          >
            X
          </h1>
        </header>
        <main className={styles.cardMainContainer}>
          <section className={styles.cardMain}>
            <div className={styles.cardPart}>
              <div>제휴할인</div>
              <input placeholder='신용카드(일반)' />
            </div>
            <div>
              <div>카드번호</div>
              <input placeholder='' />
            </div>
            <div>
              <div>카드회사</div>
              <input placeholder='' />
            </div>
            <div>
              <div>유효기간</div>
              <input placeholder='' />
            </div>
            <div>
              <div>할부개월</div>
              <input placeholder='0' />
            </div>
            <div>
              <div>승인번호</div>
              <input placeholder='' />
            </div>
            <div className={styles.cardInput}>
              <button>
                단말기
                <br />
                승인입력
              </button>
              <button
                onClick={() => {
                  ModalOpen();
                }}
              >
                카드입력
              </button>
              <button>바코드입력</button>
            </div>
          </section>
          <section className={styles.cardSub}>
            <div>총 결제 금액</div>
            <div className={styles.cardSubTotal}>{props.total}원</div>
          </section>{' '}
          <section className={styles.cardThird}>
            <div class={styles.cardNumberWrapper}>
              {[
                9,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                3,
                1,
                '00',
                '000',
                'X',
                '초기화',
                'Enter',
              ].map((i) => (
                <button type='button' onClick={() => {}}>
                  {i}
                </button>
              ))}
            </div>{' '}
            <div className={styles.cardThirdCheck}>
              <button
                onClick={() => {
                  dispatch(removeItem(state.cart.id));
                }}
              >
                초기화
              </button>
              <button>승인요청</button>
            </div>
          </section>{' '}
        </main>
        <footer>결제할 금액을 입력 하세요.</footer>
      </div>
      {modal == true ? (
        <Modal ModalClose={ModalClose} total={props.total} />
      ) : null}
    </body>
  );
};
//카드결제 모달
const Modal = (props) => {
  return (
    <body className={styles.modalBack}>
      <div className={styles.modalContainer}>
        <header className={styles.modalHead}>
          <h3>AWESOME PLACE </h3>
          <h6>coffee & DESSERT</h6>
        </header>
        <main>
          <div className={styles.modalDiscount}>
            제휴할인내역조회(금액[{props.total}원])
          </div>
          <div className={styles.modalWrapper}>
            <div>
              IC 또는 MSOnly카드를
              <br /> 읽어주세요.
            </div>
          </div>
          <div className={styles.modalFooter}>
            <div className={styles.modalCount}>IC카드 리딩 대기 시간:{} </div>
            <button
              onClick={() => {
                props.ModalClose();
              }}
            >
              종료(ESC)
            </button>
          </div>
        </main>
      </div>
    </body>
  );
};

export default Menu;
